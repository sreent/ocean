# Backlog

A board's backlog, to plan sprints from: the issues its saved query holds that no open sprint has, in the board's rank, each one a row to drag to another place or onto a sprint. Proposed, for a4a (D43).

- **A row** (`li.backlog-item`) is a handle, the issue's id, its summary and, at its end (`.backlog-facts`), its state, its story points as a chip, and a button that puts it in the sprint being planned, for whoever doesn't drag.
- **The handle** (`button.backlog-handle`) is how the keyboard ranks: Alt and an arrow moves the issue a place, and what moved is said where a screen reader hears it ("Moved BACK-27 above BACK-31."). Under the list, a line says so (`.field-help`), and every handle points to it.
- **Dragging:** the row being dragged leaves its outline where it was (`.moving`, dashed, its words hidden); where it would land is a line in `--accent` above or below the row under the pointer (`.drop-before`, `.drop-after`). While it's on its way, the list says so (`.backlog.dragging`, a closed hand).
- **Sprints to drop on** (`ul.sprint-targets`): each open sprint, dashed (`li.sprint-target`), with how many issues it holds and its dates. While an issue is dragged they're edged in `--accent` (`.ready`), and the one under it fills (`.over`, `--accent-soft`).
- Narrow, a row's facts go under its summary.

**Takes:** `issues` (each `id`, `summary`, `state`, `points`), `sprints` (each `name`, `issues`, `dates`), `target` (the sprint being planned), `onRank`, `onToSprint`, `said`.

**Markup:**

```html
<section class="card stack" aria-labelledby="backlog">
<div class="section-head"><h2 id="backlog">Backlog</h2><span class="note">14 issues, 31 pts</span></div>
<ol class="backlog" aria-label="Backlog, in rank order">
<li class="backlog-item" draggable="true"><button type="button" class="backlog-handle" aria-label="Move BACK-31" aria-describedby="keys"><span aria-hidden="true">⋮⋮</span></button><a class="issue-id mono" href="#">BACK-31</a><span class="backlog-summary">Rotate signing keys without downtime</span><span class="backlog-facts"><span class="badge" data-tone="idle">Open</span><span class="chip mono">5 pts</span><button type="button" class="small">To Sprint 15</button></span></li>
<li class="backlog-item drop-after" draggable="true"><button type="button" class="backlog-handle" aria-label="Move BACK-27" aria-describedby="keys"><span aria-hidden="true">⋮⋮</span></button><a class="issue-id mono" href="#">BACK-27</a><span class="backlog-summary">Paginate the audit log</span><span class="backlog-facts"><span class="badge" data-tone="idle">Open</span><span class="chip mono">3 pts</span><button type="button" class="small">To Sprint 15</button></span></li>
<li class="backlog-item moving" draggable="true"><button type="button" class="backlog-handle" aria-label="Move BACK-40" aria-describedby="keys"><span aria-hidden="true">⋮⋮</span></button><a class="issue-id mono" href="#">BACK-40</a><span class="backlog-summary">Retry webhooks with backoff</span><span class="backlog-facts"><span class="chip mono">2 pts</span></span></li>
<li class="backlog-item" draggable="true"><button type="button" class="backlog-handle" aria-label="Move BACK-12" aria-describedby="keys"><span aria-hidden="true">⋮⋮</span></button><a class="issue-id mono" href="#">BACK-12</a><span class="backlog-summary">Sessions survive a deploy</span><span class="backlog-facts"><span class="badge" data-tone="warn">In Progress</span><span class="chip mono">8 pts</span><button type="button" class="small">To Sprint 15</button></span></li>
</ol>
<p class="field-help" id="keys">Drag an issue to rank it, or onto a sprint. From the keyboard, Alt and an arrow key moves it a place.</p>
<ul class="sprint-targets ready" aria-label="Sprints to drop an issue on">
<li class="sprint-target"><span class="item-name">Sprint 14</span><span class="item-about">7 issues, 9 to 22 Nov</span></li>
<li class="sprint-target over"><span class="item-name">Sprint 15</span><span class="item-about">2 issues, 23 Nov to 6 Dec</span></li>
</ul>
</section>
```
