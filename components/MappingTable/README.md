# MappingTable

Bringing a file of issues in: each column of the file with a few of its values and what it becomes here, each value of a mapped column and what it becomes, then what a check or the run did, in counts, with the problems row by row and how far the run is. Proposed.

- Columns (`table.figures.mapping`): the column's name in the name's weight, a few of its values and how many rows have one beneath it in `--muted` (`.mapping-samples`), then a choice of what it becomes, grouped: what every issue has, the project's fields, links to the issue with that key, or leave it out. How each was decided: a chip, "Found from its header", or in `--muted`, "Chosen" or "Left out".
- Values (the same table, one for each mapped field of options, people or sprints): each value in the file with how many rows have it (`.mapping-count`), and a choice of what it becomes. Leaving it unmapped says what that means, as the first choice: "Unassigned", "The project's default, Open", "In no sprint". People are matched by email, then login, then name. A value matched without anyone choosing says so in a chip, "Found by name"; one nothing matched is a `warn` badge, "Nothing here yet", until someone chooses.
- Checking changes nothing. Its counts are a tally (`.import-tally`): to create, to update, unchanged, skipped, would fail, comments, links and parents. The run's are the same words in the past: created, updated.
- Each problem is a row (`table.figures.problems`): the row's number, its key, a badge for what it means for that row (`bad`, "Not imported"; `warn`, "Imported without it") and its words, with how to put it right beneath (`.problem-hint`).
- A run's progress is a bar (`.import-progress`, `role="progressbar"` with its words as `aria-valuetext`), the done part in `--accent`, and its words: "Importing: 101 of 240 rows. You can leave this page; it carries on."

**Takes:** `columns` (each `name`, `samples`, `filled`, `target`, `found`), `targets` (what a column may become), `values` (for each mapped field: each `value`, `count`, `to`, `found`; the `choices`; what `empty` means), `counts`, `problems` (each `row`, `key`, `level`, `message`, `hint`), `progress` (`done`, `total`, `phase`).

**Markup:**

```html
<section class="card stack" aria-labelledby="map-columns">
  <div class="section-head"><h2 id="map-columns">Its columns</h2><p class="note">shop-export.csv, from Jira: 240 rows, 6 columns.</p></div>
  <div class="figures-scroll" tabindex="0" role="group" aria-label="The file's columns">
    <table class="figures mapping"><caption class="hidden">Each column of the file, and what it becomes in WEB</caption>
      <thead><tr><th scope="col">Column in the file</th><th scope="col">Becomes in WEB</th><th scope="col">How</th></tr></thead>
      <tbody><tr>
        <th scope="row"><span class="mapping-name">Summary</span><span class="mapping-samples">Checkout page times out under load · Cache the price lookups · 240 rows with a value</span></th>
        <td><select aria-label='What "Summary" becomes'><option value="ignore">Leave it out</option>…<optgroup label="A field of the project"><option value="field:State">State</option>…</optgroup></select></td>
        <td><span class="chip">Found from its header</span></td>
      </tr>…</tbody>
    </table>
  </div>
</section>
<section class="card stack" aria-labelledby="check-it">
  <h2 id="check-it">Check it, then import it</h2>
  <div class="cluster"><button type="button">Check it</button><button type="button" class="primary">Import 236 issues</button></div>
  <dl class="import-tally" aria-label="What it would do"><div><dt>To create</dt><dd>236</dd></div>…<div><dt>Would fail</dt><dd>4</dd></div></dl>
  <div class="figures-scroll" tabindex="0" role="group" aria-label="Problems, row by row">
    <table class="figures problems"><caption class="hidden">Problems, row by row</caption>
      <thead><tr><th scope="col">Row</th><th scope="col">Key</th><th scope="col">What</th></tr></thead>
      <tbody><tr><td>18</td><td class="mono">SHOP-17</td><td><span class="badge bad"><svg class="icon" aria-hidden="true"><!-- cross --></svg>Not imported</span> It has no summary, so it is not imported<span class="problem-hint">Give it a summary in the file, or leave the row out.</span></td></tr></tbody>
    </table>
  </div>
</section>
<section class="card stack" aria-label="Importing">
  <h2>Importing into Web app</h2>
  <div class="import-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="42" aria-valuetext="Importing: 101 of 240 rows" aria-label="How far the import is">
    <svg aria-hidden="true"><rect class="import-progress-track" width="100%" height="100%" rx="3"/><rect class="import-progress-done" width="42%" height="100%" rx="3"/></svg>
    <p>Importing: 101 of 240 rows. You can leave this page; it carries on.</p>
  </div>
</section>
```

**In a4a:** Import, under Build, for a project's managers: upload a Jira or YouTrack CSV, map its columns and values, check it, run it, and read what it did. The preview is rendered from a4a's own components, a shop's Jira export.
