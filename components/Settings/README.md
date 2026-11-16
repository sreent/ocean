# Settings

The parts of a page that sets something up, as a4a's pages for projects, fields, people, tokens and your profile draw them: a section's head with a note beside its title, fields that say what they're for, ticks in groups, what happened said after it, a table of things to set, and chips someone can take away. Proposed.

- **A section's head** (`.section-head`) holds its title, and beside it a note or a hint: how many there are, or what it's for in a few words. A longer note under it (`.section-note`) says what the section is for, 52rem wide at most.
- **Each field** is Ocean's form field (Layout). What it's for sits under it in `--muted` (`.field-help`), tied to the control by `aria-describedby`. A key people type, such as a project's or a currency's, reads in mono capitals, whatever is typed (`.key`).
- **Ticks that go together** are a fieldset (`fieldset.choice-group`) whose legend reads as a label. They sit in a row, in a column (`.column`), or in columns 15rem wide (`.columns`). Each is Ocean's `.choice`, with what it means under its words in a `.field-help`. A tick among fields, such as Required beside a field's default, sits at the foot of their row, level with their controls (`.form-fields > .choice`). A fieldset that only switches its fields off together has no frame (`fieldset.unframed`).
- **What happened** is said after it, in `--muted`, where a screen reader hears it (`p.outcome`, `role="status"`): "Saved." What failed is an error note (Layout), never the outcome in red. An empty outcome takes no room.
- **A table of things to set** names each row in its header cell (`th.row-head`): its name at 600 (`.item-name`, a link where it opens) and a line about it in `--muted` (`.item-about`); a login or a key in that line keeps its size. A column only as wide as its content (`.fit`) holds a row's own actions. The row of something switched off, archived or banned, is quieter (`tr.dimmed`). Rows that hold controls sit on their middle line (`table.figures.middle`), and a card that is its table runs it to its edges (`.card.figures-card`).
- **A count of a total** keeps its count in a name's weight, on one line (`.of-total`): **12** of 14. Words that need no colour but are quieter than the text around them, such as "Never", are `.muted`.
- **Chips in a list** (`ul.chips`). One someone can take away (`.chip.removable`), such as a day off, has a small button with a cross (`.chip-remove`), named for what it removes.

**Takes:** nothing of its own: these are classes, on Ocean's card, form, table and chips.

**Markup:**

```html
<section class="card" aria-labelledby="plan">
  <div class="section-head"><h2 id="plan">Plan settings</h2><span class="note">The plan's calendar and its money.</span></div>
  <form class="form">
    <fieldset class="unframed stack">
      <div class="form-fields">
        <div class="form-field"><label for="starts">Starts</label><input id="starts" type="date" aria-describedby="starts-help">
          <small class="field-help" id="starts-help">Empty: from its earliest task, or today.</small></div>
        <div class="form-field"><label for="currency">Currency</label><input id="currency" class="key" value="usd"></div>
      </div>
      <fieldset class="choice-group"><legend>Working days</legend>
        <label class="choice"><input type="checkbox" checked><span>Mon</span></label>…
      </fieldset>
      <fieldset class="choice-group"><legend>Days off</legend>
        <ul class="chips"><li class="chip removable"><time datetime="2026-12-25">25 Dec</time>
          <button type="button" class="chip-remove" aria-label="Remove 25 Dec"><svg class="icon" aria-hidden="true"><!-- cross --></svg></button></li></ul>
      </fieldset>
    </fieldset>
    <div class="cluster"><button type="submit">Save the plan settings</button><p class="outcome" role="status">Saved.</p></div>
  </form>
</section>

<table class="figures middle">
  <tr class="dimmed"><th scope="row" class="row-head"><span class="item-name">Fix versions</span><span class="item-about">versions</span></th>
    <td><span class="muted">No values yet</span></td><td class="fit"><span class="cluster"><button class="small">Save</button></span></td></tr>
</table>
```

**In a4a:** Projects and each project's page (its details, plan settings and fields), Fields, Administration, Agents and tokens, Webhooks, and your profile. The preview is a static rendition: a project's plan settings, and its fields as a table.
