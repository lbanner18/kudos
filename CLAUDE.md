# Handoff: what we were trying to do

Notes from an earlier Claude session (2026-10-14) for whoever picks this up next.

## The goal

The user is on a cyber competition team. Injects (business tasks) are answered as memos, and the team writes them with **Kudos** (`kudos/`): a static page with templates per inject type, per-host sections, screenshot slots, and `.docx` export. Upstream is github.com/pgilstru/pgilstru; this repo is a private copy (`lbanner18/kudos`).

The competition uses **Nextcloud** for collaboration, and Kudos is single-user (one draft in `localStorage`, shared by hand as a `.json`). The ask was Google Docs-style collaboration on Kudos through Nextcloud.

## What we found, and why we didn't do live editing

- Live editing is technically possible without extra servers: Nextcloud Text does it with Yjs over plain HTTP polling (`src/services/PollingBackend.ts`, `WebSocketPolyfill.ts` in nextcloud/text). Kudos could do the same as a Nextcloud app, or from github.io via the WebAppPassword app (stock Nextcloud sends no CORS headers for WebDAV).
- **But the competition Nextcloud is run by the organizers**, so nothing can be installed on it. Every server-side route is out. Don't re-propose them unless the user says they now control an instance.
- Fallbacks considered: early `.docx` export and co-editing in Nextcloud Office (loses Kudos's prompts and section structure), and co-writing in Nextcloud Text and pasting back.

## What we built: Merge drafts (branch `merge-draft`)

The workflow is to split an inject by section and use Nextcloud only as a file drop:

1. The lead clicks **Save draft** and puts the `.json` in the shared folder.
2. Each teammate clicks **Load draft** on it, fills in their sections, and puts their own **Save draft** back. They can do this repeatedly.
3. The lead clicks **Merge drafts** and picks one or more files.

How it works (`kudos/merge.js`, wired in `kudos/app.js`; user-facing docs are in `kudos/README.md` under "Splitting an inject"):

- **History, not a single base.** `state.seen` maps each part (`sec:<uid>`, `summary`, `meta.<k>`, `vars.<k>`) to the fingerprints of the versions this copy has had. It's recorded on load, on save, and after a merge. The merge rule:
  - if mine is in their history, theirs wins;
  - if theirs is in mine, mine stays;
  - otherwise it's a conflict.
  An earlier version compared against the draft as first loaded, and gave false conflicts when a teammate handed off twice. Don't go back to that.
- **Conflicts never lose work.** The teammate's section is inserted right after yours with `conflictOf`/`mergeFrom`, and shown with **Use this version** / **Discard**. A summary conflict becomes a section at the top. The status bar counts open conflicts, and export warns if any are left.
- **Section fingerprints ignore render-time filler.** `sectionKey()` skips empty per-host evidence lists and default per-host tables, because rendering creates those.
- **Deletions:** `state.removed` holds deleted section uids. They stay deleted unless a teammate changed the section afterwards.
- **Hosts** are added by id, then matched by name; per-host data is remapped to the matched id.
- **Header fields and details** fill blanks, then follow the same history rule. **Checklist** lines are combined and ticks are kept.
- **Save draft** names include the time (`inject12_team07_1432.json`), so uploads to one folder don't collide.

Kudos conventions to keep: no build step, no dependencies beyond `lib/docx.umd.js`, works offline from `file://`, terse code matching `app.js`.

## Testing

`kudos-tests/` (see its README): `serve.py` serves the repo, and `e2e.html` drives the real page in an iframe as a lead plus two teammates, with Save draft downloads captured in the page. It ran 25/25. Breaking the merge rule on purpose made 11 checks fail, so the test does catch regressions. `?stop` halts at the conflict view.

Gotchas from running it headless:
- `pkill -f <pattern>` kills your own shell if the pattern is in the command line. Kill by PID instead.
- Chrome doesn't write `localStorage` to disk before it's killed, so screenshot in the same run: `--screenshot --virtual-time-budget=60000` on `e2e.html?stop`.

## Not done / open

- Not yet tried with real Nextcloud uploads and downloads, or in Firefox. Only tested in Chrome.
- Conflicts are per section (pick one whole version). That's fine when each section has one owner.
- Two saves in the same minute get the same file name (Nextcloud asks before overwriting).
- The merge result banner disappears after 6 seconds.
- Teammates must start from the lead's file. A draft built separately from the template merges as duplicate sections.
- The user was pitching this to the team on 2026-10-15; outcome unknown. If adopted, offer it upstream to pgilstru as a PR, leaving out `kudos-tests/` and this file if the author doesn't want them. Kudos has no license of its own (the repo's MIT `LICENSE` is the just-the-docs theme's), so ask before publishing a modified copy.

## Branches

- `main` is an untouched copy of upstream.
- `merge-draft` (default) is the prototype: the feature commit, the test commit, then this file.
