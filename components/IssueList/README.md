# IssueList

Issues in rows, dense enough for long lists: each with a box to choose it, its id, its summary and tags, how it stands, its priority, its type, who it's assigned to, its comments, and when it last changed. Proposed.

- How it stands is a Badge with its shape. Fixed, Verified and Done are resolved, `good`, with a tick. In Review and Blocked wait on someone, `warn`, with a clock. Won't fix, Duplicate and Obsolete aren't needed, `idle`, with a pause. Open and In Progress are plain facts, with no tone.
- Priority is a PriorityMeter, its steps and its word. Tags are chips. The type is plain text.
- The id is in Plex Mono. Ids and times are `--muted`, not `--faint`, so they still read on a row under the pointer or chosen.
- Under the pointer a row is `--sunken`; chosen, `--accent-soft`. The issue that's open beside the list is `--accent-soft` too, with its summary in `--accent` at 600 (`aria-current="true"`). A resolved issue's summary is `--muted`.
- Its fields sit in columns where there's room. Narrower, the assignee shows by their mark alone, and screen readers still say the name. Narrower still, each row stacks: its id and when, its summary, then its fields. By container query, wherever the list is.
- From the keyboard the list is one stop: the arrows move from row to row, Space chooses one, Enter opens it. The row with the focus wears the ring inside its edge.
- Times as people read them: "2 minutes ago", "yesterday", "12 Nov".
- An issue's id in running text, such as a comment or an assistant's answer, is a link to the issue: `a.issue-id`, in `--accent`.
- With issues chosen, the bar above says how many, and offers a command for them (CommandBar).

**Takes:** `issues` (each `id`, `summary`, `href`, `state`, `priority`, `type`, `assignee`, `tags`, `comments`, `updated`, `resolved`, `chosen`, `current`), `label`, `onChoose`, `onOpen`, `onCommand`.

**Markup:** the box is framed, and its rows run to its edges. `.issue-meta` lays its children out as the row's own columns, and as one line of them when the row stacks.

```html
<section class="issues-box" aria-label="Issues in BACK">
  <div class="issues-bar"><strong>3 chosen</strong><button type="button">Apply a command</button><button type="button" class="link">Choose none</button></div>
  <div class="issues-head"><input type="checkbox" aria-label="Choose all 9 issues"><span>Issue</span><span>State</span><span>Priority</span><span>Type</span><span>Assignee</span><span><span class="hidden">Comments</span></span><span>Updated</span></div>
  <ul class="issues" aria-label="9 issues">
    <li class="issue" tabindex="0">                       <!-- .resolved; aria-current="true" for the one that's open -->
      <input type="checkbox" class="issue-select" aria-label="Choose BACK-12" tabindex="-1">
      <span class="issue-id">BACK-12</span>
      <span class="issue-main"><a class="issue-summary" href="…" tabindex="-1">Login times out on slow networks</a><span class="chips"><span class="chip">login</span></span></span>
      <span class="issue-meta">
        <span class="issue-state"><span class="badge">In Progress</span></span>
        <span class="issue-priority"><!-- PriorityMeter --></span>
        <span class="issue-type">Bug</span>
        <span class="issue-assignee"><span class="who" data-kind="person"><span class="avatar small" aria-hidden="true">AS</span><span class="who-name">Anna Schmidt</span></span></span>
        <span class="issue-comments"><svg class="icon" aria-hidden="true"><!-- chat --></svg>5<span class="hidden"> comments</span></span>
      </span>
      <time class="issue-updated" datetime="2026-11-15T13:58">2 minutes ago</time>
    </li>
  </ul>
</section>
```

A state with a tone carries its shape: `<span class="badge good"><svg class="icon">tick</svg>Fixed</span>`, `badge warn` with the clock, `badge idle` with the pause. Nobody assigned is `<span class="issue-type">Unassigned</span>` in the assignee's place.

**In a4a:** the Issues page, a search's results, and every list of issues. The preview is a static rendition, with the list's keyboard.
