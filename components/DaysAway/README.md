# DaysAway

A person's days away, as a4a keeps them for its plans: a table of them, the past ones quieter, and the form that enters or changes one; on a person's own page, or in a dialog beside the load grid for the plan's people. Proposed, for a4a.

- It's Ocean's Settings, put together. **The table** (`table.figures.middle`, in a frame that scrolls sideways where it's narrow, `.figures-scroll`) names each absence in its row head: when, in words, at 600 (`.item-name`: "Tue 17 Nov", "2 to 6 Dec", "The afternoon of Wed 18 Nov"), and under it who entered it when that wasn't the person (`.item-about`). Then why, and the note under it; then, as wide as they are (`.fit`), Change and Remove, which asks first ([Confirm](../Confirm/README.md)). Days already past are quieter (`tr.dimmed`).
- **Why someone is away** is theirs. Only they, administrators and whoever entered it see it; anyone else reads "Not shown to you" in `.muted`, and the load grid says "away", never why ([LoadGrid](../LoadGrid/README.md)).
- **The form** (`.form`) says what it does in its heading: "Add days away", "Add days away for Inès Aubert", "Change Tue 17 Nov". From and To side by side (`.form-fields`), To saying it's the last day away. On one day, how much of it, as ticks in a row (`fieldset.choice-group`): all of it, the morning or the afternoon. Then why, a choice, with who sees it under it (`.field-help`), and a note. What happened is said after it, where a screen reader hears it (`p.outcome`): "Added: Inès Aubert is away Tue 17 Nov. Plans skip it for Inès Aubert’s work." What's refused is an error note, with how to put it right: "Inès Aubert is already away 2 to 6 Dec. Change that absence instead, or remove it first."
- **Beside the load grid**, it's a dialog wide enough for a table and its form (`dialog.dialog.wide`, 40rem at most): a sentence on what days away do, "Whose", a choice of the plan's people when there's more than one, the table and the form, and Done. A dialog beside its button in a row still centres itself.

**Takes:** `person` (`name`), `absences` (each `when`, `half`, `kind` or nothing when it isn't shown, `note`, `enteredBy`, `past`, `canChange`), `canEnter`, `editing`, `onAdd`, `onChange`, `onRemove`, `outcome`.

**Markup:**

```html
<section class="card" aria-labelledby="away">
  <div class="section-head"><h2 id="away">Days away</h2><span class="note">Plans skip them for your work</span></div>
  <p class="section-note">Everyone sees when you're away; why, only you, administrators and whoever enters it.</p>
  <div class="stack">
    <div class="figures-scroll" role="region" aria-label="Your days away" tabindex="0">
      <table class="figures middle">
        <thead><tr><th scope="col">When</th><th scope="col">Why</th><th scope="col" class="fit"><span class="hidden">What you can do</span></th></tr></thead>
        <tbody>
          <tr class="dimmed"><th scope="row" class="row-head"><span class="item-name">Fri 6 Nov</span></th><td>Sick</td><td class="fit">…</td></tr>
          <tr><th scope="row" class="row-head"><span class="item-name">2 to 6 Dec</span></th><td>Holiday<span class="item-about">Lisbon</span></td>
              <td class="fit"><div class="cluster"><button type="button" class="small" aria-label="Change 2 to 6 Dec">Change</button><button type="button" class="danger small" aria-label="Remove 2 to 6 Dec">Remove</button></div></td></tr>
          <tr><th scope="row" class="row-head"><span class="item-name">The afternoon of Wed 9 Dec</span><span class="item-about">Entered by Ben Okafor</span></th><td><span class="muted">Not shown to you</span></td><td class="fit">…</td></tr>
        </tbody>
      </table>
    </div>
    <p role="status" class="outcome">Added: you’re away 2 to 6 Dec. Plans skip those days for your work.</p>
    <form class="form" aria-labelledby="add-title">
      <h3 id="add-title">Add days away</h3>
      <div class="form-fields"><div class="form-field"><label for="from">From</label><input id="from" type="date"></div>
        <div class="form-field"><label for="to">To</label><input id="to" type="date" aria-describedby="to-help"><small class="field-help" id="to-help">The last day away.</small></div></div>
      <fieldset class="choice-group"><legend>How much of the day</legend><label class="choice"><input type="radio" name="part" checked><span>All of it</span></label><label class="choice"><input type="radio" name="part"><span>The morning</span></label><label class="choice"><input type="radio" name="part"><span>The afternoon</span></label></fieldset>
      <div class="form-fields"><div class="form-field"><label for="why">Why</label><select id="why" aria-describedby="why-help"><option>Holiday</option>…</select><small class="field-help" id="why-help">Only you, administrators and whoever enters it see why. Everyone else sees when.</small></div>
        <div class="form-field"><label for="note">A note, if you want one</label><input id="note"></div></div>
      <div class="cluster"><button type="submit" class="primary">Add the days away</button></div>
    </form>
  </div>
</section>

<dialog class="dialog wide" aria-labelledby="d-title" open>
  <h2 id="d-title">Days away</h2>
  <p>Plans skip a person’s days away: their work waits for them, and levelling looks for room on the days they’re there.</p>
  <div class="stack"><div class="form-field"><label for="whose">Whose</label><select id="whose"><option>Inès Aubert</option>…</select></div><!-- the table and the form --></div>
  <div class="dialog-actions"><button type="button">Done</button></div>
</dialog>
```

**In a4a:** a person's profile, for their own; and the plan's Resources, in the dialog, where a project's manager enters days away for the plan's people. Plans then skip them for each person's work (docs/architecture.md, D36, in a4a).
