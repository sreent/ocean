# Directory

Things to open, in a list: the boards, or the projects whose plans there are. Each is a name that opens it, what kind it is or its key, and a line about it, with its mark beside it when it has one. Proposed.

- The name is a link at 600: it's what the line is for. Beside it, what kind it is as a chip ("Sprints", "Kanban"), or its key in Plex Mono, as people quote it.
- Beneath the name, a line in `--muted` says what's in it: its project and how its columns run, or when its plan starts, its budget and how many issues are open.
- A mark beside it in `--muted`, when the things have one, such as a board's; it spans the name and the line beneath.
- It sits in a card. Where the page's title already says what the list is, the card's heading is for screen readers alone.

**Takes:** `items` (each `name`, `href`, `kind` or `key`, `about`, and `icon` when it has one).

**Markup:**

```html
<section class="card" aria-labelledby="boards-title">
  <h2 id="boards-title" class="hidden">All boards</h2>
  <ul class="directory">
    <li><svg class="icon" aria-hidden="true"><!-- board --></svg>
      <div class="directory-name"><a href="/boards/…">Backend sprints</a><span class="chip">Sprints</span></div>
      <p class="note">Backend platform (BACK) · 6 columns by State</p></li>
  </ul>
</section>
```

Without a mark, a name and its line: `<li><span class="directory-name"><a href="/plan/MIG">Data center migration</a><span class="issue-id">MIG</span></span><p class="note">Starts 25 Oct, budget $60,000 · 14 open issues</p></li>`.

**In a4a:** Boards, the list of boards; and Plan, choosing the project whose plan to see. The preview is a static rendition of both.
