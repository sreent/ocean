# FieldValues

A field's values, one row each, in their order: its place, its name, the badge it shows as and how, whether it resolves an issue or is archived, and its own Save and Delete. A row wraps where it's narrow. Proposed.

- **Its place** (`.value-order`): two small round buttons, up and down, named for the value they move ("Move Open up"). The first can't go up, nor the last down.
- **Its name** is a field 10rem wide (`.value-name`).
- **How it shows** (`.value-tone`): a choice of what it means, in the family's words ("A plain fact", "Going well", "Waiting on someone", "Failed or late", "Not needed"), with the badge itself beside it, as issues will show it. Its colour is a meaning, never a decoration.
- **The rest** (`.value-more`) goes to the row's end: ticks for Resolves and Archived, a chip when the value belongs to one project, and the row's own Save and Delete (Confirm), small.
- An archived value's name is quieter (`.value-row.dimmed`): it stays on the issues that have it, and new issues can't take it.
- What happened to a row is said under it, across the row (an outcome, or an error note); an empty one takes no room.
- New values are added under the rows, in a dashed form card (`fieldset.form-card.adding`), with the badge a new one will show as.

**Takes:** nothing of its own: these are classes, on Ocean's buttons, fields, badges, chips and Confirm.

**Markup:**

```html
<ol class="value-rows" aria-label="Values of State">
  <li class="value-row">
    <span class="value-order"><button type="button" class="round" aria-label="Move Open up"><svg class="icon up" aria-hidden="true"><!-- chevron --></svg></button>
      <button type="button" class="round" aria-label="Move Open down"><svg class="icon" aria-hidden="true"><!-- chevron --></svg></button></span>
    <input class="value-name" value="Open" aria-label="Name of Open">
    <span class="value-tone"><select aria-label="How Open shows">…</select><span class="badge">Open</span></span>
    <span class="value-more"><label class="choice"><input type="checkbox"><span>Resolves</span></label>
      <label class="choice"><input type="checkbox"><span>Archived</span></label>
      <span class="cluster"><button type="button" class="small">Save</button><button type="button" class="danger small">Delete</button></span></span>
    <p class="outcome" role="status">Saved.</p>
  </li>
</ol>
```

**In a4a:** Fields, for a field whose values are a list: a state, a choice, a version. The preview is a static rendition.
