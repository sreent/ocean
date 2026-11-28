# IssueLinks

An issue's links to other issues, grouped by what they say: each other issue's id, its summary and how it stands; and a way to add one. Proposed.

- Groups by their phrase, in Ocean's label style, with how many: "depends on · 2", "is required for", "subtask of", "parent for", "duplicates", "relates to". A phrase reads after the issue's own id: BACK-12 depends on BACK-41.
- Each link: the other issue's id in Plex Mono, its summary as a link, and how it stands as a Badge with its shape. A resolved issue's summary is `--muted`.
- Add link opens a form beneath it, dashed until the link is added, as what isn't in force yet is: what the link says, which issue it's to, and the issue found, by its id, summary and state, before the one thing to do, "Link it".
- A link is two-sided: adding "depends on" gives the other issue "is required for".
- The same list shows issues that may be the same as one being reported, with why when an agent said (`p.note` after the link) and its verdict beside its state (`.badges`). Where the list is narrow, as in a column beside a form, each issue's id and state are on one line and its summary beneath.
- On a phone the form's fields stack.

**Takes:** `issue`, `groups` (each `phrase` and `links`, each `id`, `summary`, `href`, `state`, `resolved`), `adding`, `found`, `onAdd`, `onLink`.

**Markup:**

```html
<section class="card issue-links-box" aria-labelledby="links-title"><div class="issue-links">
  <div class="issue-links-head"><h2 id="links-title">Links</h2><button type="button" aria-expanded="true" aria-controls="add-link">Add link</button></div>
  <fieldset class="link-add" id="add-link">
    <legend>A link from BACK-12</legend>
    <div class="link-add-fields">
      <label>What it says<select>…<option selected>relates to</option></select></label>
      <label>To<input type="text" value="BACK-46" aria-describedby="found"></label>
    </div>
    <p class="link-found" id="found"><span class="issue-id">BACK-46</span><span>Tokens expire early on clock drift</span><span class="badge">Open</span></p>
    <div class="link-add-actions"><button type="button">Cancel</button><button type="button" class="primary">Link it</button></div>
  </fieldset>
  <div class="link-group">
    <h3 class="label">depends on · 2</h3>
    <ul class="link-list">
      <li><span class="issue-id">BACK-41</span><a href="…">Raise the gateway's read timeout</a><span class="badge">In Progress</span></li>
      <li class="resolved"><span class="issue-id">BACK-9</span><a href="…">Move sessions to the new store</a><span class="badge good"><!-- tick -->Fixed</span></li>
    </ul>
  </div>
</div></section>
```

**In a4a:** an issue's page, under its description. The preview is a static rendition, with a link being added.

## A dependency's kind and lag

a4a keeps a dependency's kind and lag on its one "depends on" link (D72), as the Gantt draws them. Proposed, for a4a.

- **In the list**, a dependency that isn't finish to start, or has a lag, says so under its summary, in `--muted` (`span.link-dep`), in words from this issue's side: "start to start, 2 working days after it starts", "finish to finish", "finish to start, a day before it finishes" (a lead). Finish to start with no lag, the usual kind, says nothing.
- **Adding or changing one**: with "depends on" chosen, the form asks which ends it joins, in words from this issue's side ("its start after MIG-7 finishes", the default, then the three others), and the lag, in working days, signed, with a note saying what a lag and a lead do; a4a changes an existing link's kind and lag in the same fields.

**Markup:** `<li><span class="issue-id">BACK-41</span><a href="…">Raise the gateway's read timeout</a><span class="badge">In Progress</span><span class="link-dep">start to start, 2 working days after it starts</span></li>`, and in `.link-add-fields`, after "To": `<label class="wide">Which ends<select><option>its start after MIG-7 finishes</option><option selected>its start after MIG-7 starts</option><option>its finish after MIG-7 finishes</option><option>its finish after MIG-7 starts</option></select></label><label>Lag, in working days<input type="text" value="+2d" aria-describedby="add-dep-lag"></label>`, then `<p class="note" id="add-dep-lag">…</p>`.
