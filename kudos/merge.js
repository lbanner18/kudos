/* Kudos merge: fold teammates' saved drafts into this one. See README.md (Splitting an inject).
 *
 * Every draft keeps state.seen: for each part (a section, the summary, a header field, a
 * draft detail) the fingerprints of the versions this copy has had, recorded on load, save
 * and merge. When merging, if my version is one theirs has already had, theirs is newer and
 * wins; if theirs is one I've had, mine wins; otherwise both changed it and we keep both. */
(function () {
  'use strict';

  const MAX_SEEN = 50;
  const uid = () => Math.random().toString(36).slice(2, 10);
  const clone = o => JSON.parse(JSON.stringify(o));
  function hash(str) { // FNV-1a; only compared for equality
    let h = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193); }
    return (h >>> 0).toString(36);
  }
  const sorted = (obj, keep) => Object.keys(obj || {}).sort().filter(k => keep(obj[k])).map(k => [k, obj[k]]);

  // Fingerprint of what a person can edit in a section. Rendering fills in empty per-host
  // evidence lists and default per-host tables, so those don't count as changes.
  function sectionKey(s) {
    const ph = s.perHost;
    let per = null;
    if (ph) {
      const blank = ph.table ? JSON.stringify(ph.table.rows.length ? ph.table.rows : [ph.table.columns.map(() => '')]) : '';
      per = [ph.filter, ph.label, ph.text, ph.table,
        sorted(ph.exclude, v => v), sorted(ph.tables, v => JSON.stringify(v) !== blank), sorted(ph.evidence, v => v && v.length)];
    }
    // appendix only when set, so fingerprints of drafts saved before it existed don't change
    return hash(JSON.stringify([s.on, s.heading, s.level, s.text, s.table, s.evidence, per].concat(s.appendix ? ['appendix'] : [])));
  }
  const valKey = v => hash(String(v == null ? '' : v));
  const FIELDS = ['meta', 'vars'];

  function parts(state) {
    const out = [['summary', valKey(state.summary)]];
    for (const s of state.sections) out.push([`sec:${s.uid}`, sectionKey(s)]);
    for (const f of FIELDS) for (const [k, v] of Object.entries(state[f] || {})) out.push([`${f}.${k}`, valKey(v)]);
    return out;
  }
  function remember(state, key, f) {
    const l = state.seen[key] || (state.seen[key] = []);
    if (!l.includes(f)) { l.push(f); if (l.length > MAX_SEEN) l.splice(0, l.length - MAX_SEEN); }
  }
  // Note the current version of every part. Called on load, save and after a merge.
  function record(state) {
    state.seen = state.seen || {};
    for (const [k, f] of parts(state)) remember(state, k, f);
  }
  // A section deleted here stays deleted unless a teammate changes it afterwards.
  function noteDeleted(state, s) {
    state.seen = state.seen || {};
    state.removed = state.removed || {};
    remember(state, `sec:${s.uid}`, sectionKey(s));
    state.removed[s.uid] = true;
  }

  function decide(key, m, t, mine, theirs) {
    if (m === t) return 'same';
    if (((theirs.seen || {})[key] || []).includes(m)) return 'theirs';
    if (((mine.seen || {})[key] || []).includes(t)) return 'mine';
    return 'conflict';
  }

  function remapHosts(s, idMap) {
    if (!s.perHost || !Object.keys(idMap).length) return s;
    for (const k of ['exclude', 'tables', 'evidence']) {
      const m = s.perHost[k] || {};
      s.perHost[k] = Object.fromEntries(Object.entries(m).map(([id, v]) => [idMap[id] || id, v]));
    }
    return s;
  }

  // local and incoming are whole drafts (state objects). Returns a new state; local is untouched.
  function merge(local, incoming, from) {
    const out = clone(local);
    out.seen = out.seen || {};
    out.removed = out.removed || {};
    const r = { updated: 0, added: 0, conflicts: 0, hosts: 0, fields: [] };
    const conflictCopy = (sec, of) => Object.assign(sec, { uid: uid(), conflictOf: of, mergeFrom: from });

    // Hosts: add theirs, matching by id, then by name (same host typed in on both sides).
    const idMap = {};
    for (const hs of incoming.hosts || []) {
      if (out.hosts.some(x => x.id === hs.id)) continue;
      const same = hs.name.trim() && out.hosts.find(x => x.name.trim().toLowerCase() === hs.name.trim().toLowerCase());
      if (same) idMap[hs.id] = same.id;
      else { out.hosts.push(clone(hs)); r.hosts++; }
    }

    // Sections, matched by uid.
    let prev = null;
    for (const inc of incoming.sections || []) {
      if (inc.conflictOf) continue; // their own unresolved copies
      const key = `sec:${inc.uid}`, t = sectionKey(inc);
      const theirs = () => remapHosts(clone(inc), idMap);
      const at = out.sections.findIndex(s => s.uid === inc.uid);
      if (at < 0) {
        if (!(out.removed[inc.uid] && (out.seen[key] || []).includes(t))) {
          const after = out.sections.findIndex(s => s.uid === prev);
          out.sections.splice(after + 1, 0, theirs());
          delete out.removed[inc.uid];
          r.added++;
          prev = inc.uid;
        }
        continue;
      }
      const d = decide(key, sectionKey(out.sections[at]), t, out, incoming);
      if (d === 'theirs') { out.sections[at] = theirs(); r.updated++; }
      else if (d === 'conflict') { out.sections.splice(at + 1, 0, conflictCopy(theirs(), inc.uid)); r.conflicts++; }
      prev = inc.uid;
    }

    // Summary: a conflict becomes a section at the top to pick from.
    const isum = incoming.summary || '';
    const ds = out.summary.trim() ? decide('summary', valKey(out.summary), valKey(isum), out, incoming) : (isum ? 'theirs' : 'same');
    if (ds === 'theirs') { out.summary = isum; r.updated++; }
    else if (ds === 'conflict' && isum.trim()) {
      out.sections.unshift(conflictCopy({
        srcId: null, on: true, heading: '', level: 1, text: isum,
        table: null, hostRows: null, perHost: null, evidence: [], captions: [],
      }, 'summary'));
      r.conflicts++;
    }

    // Header fields and draft details: blanks get filled, otherwise the newer version wins.
    for (const f of FIELDS) {
      for (const [k, v] of Object.entries(incoming[f] || {})) {
        const mine = out[f][k] || '';
        if (!v || v === mine) continue;
        const d = mine ? decide(`${f}.${k}`, valKey(mine), valKey(v), out, incoming) : 'theirs';
        if (d === 'theirs') out[f][k] = v;
        else if (d === 'conflict') r.fields.push(`${f === 'meta' ? 'header' : 'details'} “${k}”`);
      }
    }

    // Private checklist: add their lines, keep every tick.
    const lines = out.checklist.text.split('\n').map(l => l.trim());
    const extra = ((incoming.checklist && incoming.checklist.text) || '').split('\n').filter(l => l.trim() && !lines.includes(l.trim()));
    if (extra.length) out.checklist.text = [out.checklist.text.replace(/\s+$/, ''), ...extra].filter(Boolean).join('\n');
    for (const [k, v] of Object.entries((incoming.checklist && incoming.checklist.done) || {})) if (v) out.checklist.done[k] = true;

    // Everything they had is now history here too, so merging the same file again is a no-op.
    for (const [k, list] of Object.entries(incoming.seen || {})) for (const f of list) remember(out, k, f);
    record(out);
    return { state: out, report: r };
  }

  window.KudosMerge = { merge, record, noteDeleted, sectionKey };
})();
