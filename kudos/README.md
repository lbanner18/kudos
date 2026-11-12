# Kudos

Kudos is our builder: a static page that builds a response as a `.docx` in our team's memo format: "INTEROFFICE MEMORANDUM", To/From/Date/Subject, a bold "Summary:", sections, tables with a gray header row, italic "Figure N." captions, and our closing and sign-off.

Pick the type and a variant, and the page lays out a **template**: the sections, tables, and screenshot slots that kind of request usually needs. Every `[[prompt]]` is highlighted until you replace it with what your team actually did, and the count of unfilled prompts shows next to "Autosaved".

> Templates give structure, not answers. Always read the whole request, paste its deliverables into **requirements**, and tick them off before you submit.

## Using it

1. **requirements (private):** paste the deliverables from the request, one per line, and tick them off. This box is never exported. Each unticked line shows the section heading it matches (by shared keywords), or **no heading** if none does. Exporting with a **no heading** line left asks first, so every requirement gets its own section before the doc leaves Kudos. Tick a line when it is covered some other way (e.g. screenshots). Variants built from a known prompt (the past-event cards at the top of the picker) fill this box with that prompt's asks when it is empty.
2. **Memo header:** team number (it changes every event, so it starts blank), number, To, subject, and sign-off. The exported file is named `NN_teamXX.docx`.
3. **writing type:** pick the type, then the variant closest to the request, then **Use this draft**. Search works on type and variant names, inject numbers and event names. Templates built from a past event's injects are also grouped in a box at the top of the picker, one card per inject in inject order, and carry a blue event badge on their type and variant. **Blank memo** starts with just the header and summary.
4. **Environment hosts:** enter the competition's hosts once, or load the sample 8-host topology. Per-host sections ("Ubuntu Ecom:" + screenshot) and table rows are built from this list, and it's kept between them.
5. **Draft details:** every `{{placeholder}}` in it gets a box here, so you never have to hunt through the text for blanks. Anything still unfilled is highlighted in the preview and in the Word file, and is counted next to "Autosaved".
6. **Sections:** untick sections you don't need, edit the text and headings, reorder them, and use **Reset** to get the draft text back. Tables are editable grids, and **Fill rows from hosts** rebuilds the rows from your host list. **+ Add table**, next to **+ Add section** at the bottom, adds a new section holding a three-column table (use **+ Row** / **+ Column** to size it, and the ✕ on the section to delete it).
7. **Evidence:** click a dashed box and paste a screenshot (Ctrl/⌘+V), drop images onto it, or add pasted command output as text. Click a *caption idea* to caption the first figure that doesn't have one yet.
8. **Insert:** quick buttons for phrases we use often: the "unable to finish" note, a bold **Please note** callout, the AI-use disclosure, a Sources section, and an **Appendix**. An appendix section prints after the sign-off (on a new page in the `.docx` and PDF), with figure numbers continuing from the memo. Tick **Appendix** on any section card to move it there.
9. **Export .docx**, or click **▾** next to it for **Export PDF**. The PDF is printed from the preview: pick **Save as PDF** as the printer in the print dialog and untick **Headers and footers** (otherwise the page date and `file:///…` path print on every page). The file name is filled in for you. Before either export, Kudos also lists any `{{placeholder}}` or `[[prompt]]` still unfilled (they would print as written) and warns if From and the signature name different teams. The `.docx` uses Calibri (Nextcloud Office shows it as Carlito, same letter widths; it has no Aptos) and real Word styles (Heading 1-3, Caption, Code), so text you add later picks up normal formatting. To keep working on it together, see **Finishing in Nextcloud** below.

## Finishing in Nextcloud

Upload the exported `.docx` to the shared folder and open it there (Nextcloud Office). Everyone can edit it at once; it saves by itself, and Ctrl+S saves right away.

**Adding a screenshot.** Nextcloud pastes images *floating*: the text moves around them and they drift. Every screenshot needs these steps:

1. Put the cursor on an empty line of its own. A **[[Paste screenshot…]]** line from the export is one: select the whole line and paste over it. To add a screenshot between two paragraphs, click at the very end of the first one and press **Enter**.
2. Paste (Ctrl+V) or use **Insert → Image**.
3. Right-click the image → **Anchor → As Character**. It now sits in the text like a big letter and moves with it.
4. If any text ended up on the same line as the image, click just after the image and press **Enter**. The caption goes on the next line: **Figure N.** and what it shows.

Doing step 3 while the image shares a line with text makes that line as tall as the image, with the text along its bottom edge. Split the line first (step 4), then anchor.

**Fixing an image that's already in the wrong place.** Click just before it, press **Enter**; click just after it, press **Enter**; then right-click → **Anchor → As Character** again.

**Cleaning up spacing.**
- Turn on **View → Formatting Marks** to see empty lines (¶) and delete the extra ones.
- A line that looks too big, bold or spaced out copied its formatting from the line above. Select it and pick **Default Paragraph Style** (or **Normal**) in the style box on the Home tab, or press **Ctrl+M** to clear its formatting.
- Headings: pick **Heading 1** in the style box rather than making text bold and big by hand.

**Before submitting:** search (Ctrl+H) for `[[`, `{{` and `____` to catch anything left unfilled, then download it (**File → Download as**) as `.docx` or PDF.

Drafts autosave in your browser. **Save draft** / **Load draft** passes one (screenshots included) to a teammate as a `.json` file. **Load draft** replaces the whole page, so if you've started a draft it asks first and offers **Merge drafts** instead. **New** keeps the team settings and hosts and clears everything else, and needs two clicks.

Everything runs in the browser and nothing is uploaded. It works offline from a local copy: open `index.html` directly.

## Splitting an inject

To split one inject across teammates, pass drafts around through a shared folder (Nextcloud or anything else):

1. One person starts the draft, then **Save draft** and puts the `.json` in the shared folder.
2. Each teammate opens it with **Load draft**, fills in their sections, and puts their **Save draft** file back. Saved drafts are named with the time (`inject12_team07_1432.json`) so uploads don't overwrite each other. Send updates as often as you like.
3. The person submitting clicks **Merge drafts** and picks one or more of those files. For each section, the summary and each header field, the newer version wins: if you haven't touched it since the teammate got it, theirs comes in; if they haven't, yours stays. Hosts and checklist lines are added, never removed. Sections you deleted stay deleted unless a teammate changed them afterwards. Merging the same file twice does nothing.
4. If you both changed the same section, you get both: the teammate's copy sits right under yours, marked, with **Use this version** and **Discard**. Unresolved copies are counted next to "Autosaved", and both versions go into the export until you pick one.

Teammates must start from the shared draft with **Load draft**, not a draft of their own, so their sections match up. Each draft keeps a short history of fingerprints of each part (`seen` in the `.json`) so a merge can tell which version is newer.


## Examples

`examples.js` adds sample answers to variants without touching `drafts/`. Each one is a team submission, transcribed as written and sanitized (some with obvious typos fixed). Types and variants that have one show an **Example Available** badge in the picker. Pick the variant and click **View example** to read it. Check the team playbook for notes on an example before using it. **Start from this example** loads it as the draft, and sections the example doesn't fill keep their `[[prompt]]`. Each screenshot the team included shows in the draft as a blank **Figure N: ________** with space below it (counted as "screenshots to add" in the status bar) until you add your own; the on-screen gap says what it should show.

Entries are keyed `typeId/variantId`. A section can have `text`, `rows` for its table (plus `columns` if the team's differ), `on: true` to turn on an off-by-default section, `screenshots` (descriptions of the figures the team included, shown in the example and offered as caption ideas; never the images), and an optional `why` note. `vars` on the example fills the variant's `{{vars}}`. This repo is public: never put real IPs, usernames, passwords or screenshots in an example.

Set `status` on an example to show its review state next to **Example Available** on the variant (the type only shows **Example Available**): `'good'` → **Good** (scored well; still check the playbook), `'review'` → **Needs Review**, `'incomplete'` → **Incomplete** (a section is still an unfilled template prompt), `'outdated'` → **Outdated** (needs updating for the current competition).

## Text formatting

In any text box: blank line = new paragraph, `- ` bullets, `1. ` numbered steps, `### ` small heading, `[[prompt]]` text still to be written (highlighted), triple-backtick fences for commands/code, `**bold**`, `` `inline code` ``.

## Adding or changing drafts

Each type is one file in `drafts/`. To add a type, copy a file, change it, and add a `<script src="drafts/your-file.js"></script>` line to `index.html`.

```js
window.INJECT_TYPES.push({
  id: 'unique-id',
  name: 'Name in the picker',
  description: 'One line shown above the variants.',
  variants: [{
    id: 'variant-id',
    name: 'Variant name',
    description: 'What this variant covers.',
    event: 'Event name',                  // optional: built from that event's inject
    inject: '05',                         // optional: inject number, sorts the event's cards
    subject: 'Default subject line',
    to: 'CISO',                           // only used if To is empty
    vars: [{ key: 'siem', label: 'SIEM', default: 'Splunk' }],
    summary: 'Text under "Summary:".',
    sections: [
      { id: 'a', heading: 'Heading', level: 1, text: 'Body text', evidence: ['Caption idea'] },
      { id: 'b', heading: 'Optional bit', on: false, text: '…' },            // off by default
      { id: 'c', heading: 'A table', text: '',
        table: { columns: ['Col 1', 'Col 2'], rows: [['a', 'b']] } },
      { id: 'd', heading: 'One row per host', text: '',
        table: { columns: ['Host', 'IP', 'Notes'], rows: [],
                 hostRows: { filter: 'all', cells: ['{{host}}', '{{host_ip}}', ''] } } },
      { id: 'e', heading: 'Per host', text: '',
        perHost: { filter: 'linux', label: '{{host}}:', text: '', evidence: ['Screenshot on {{host}}'],
                   table: { columns: [...], rows: [...] } } },                  // table optional
    ],
  }],
});
```

**Placeholders available everywhere:** `{{team}}`, `{{company}}`, `{{to}}`, `{{hosts_all}}`, `{{hosts_linux}}`, `{{hosts_windows}}`, plus any `vars`. Inside per-host sections and host rows: `{{host}}`, `{{host_ip}}`, `{{host_os}}`. Any other `{{name}}` automatically gets an input box under Draft details.

Host filters are `all`, `linux`, `windows`, or `other`.

If a file declares top-level `const`s (e.g. a long script reused in several sections), wrap the file in `(() => { … })();` so it can't clash with other draft files.

## Files

```
index.html        page + list of draft <script> tags
app.js            form, drafts, hosts, tables, evidence, preview, .docx export
merge.js          Merge drafts: fold teammates' saved drafts into this one
styles.css
drafts/*.js       one template file per type (23 types, 132 variants)
lib/docx.umd.js   docx 8.5.0 (MIT), included locally so the page works offline
```
