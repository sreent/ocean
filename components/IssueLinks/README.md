# IssueLinks

An issue's links to other issues, grouped by what they say: each other issue's id, its summary and how it stands; and a way to add one. Proposed.

- Groups by their phrase, in Ocean's label style, with how many: "depends on · 2", "is required for", "subtask of", "parent for", "duplicates", "relates to". A phrase reads after the issue's own id: BACK-12 depends on BACK-41.
- Each link: the other issue's id in Plex Mono, its summary as a link, and how it stands as a Badge with its shape. A resolved issue's summary is `--muted`.
- Add link opens a form beneath it, dashed until the link is added, as what isn't in force yet is: what the link says, which issue it's to, and the issue found, by its id, summary and state, before the one thing to do, "Link it".
- A link is two-sided: adding "depends on" gives the other issue "is required for".
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
