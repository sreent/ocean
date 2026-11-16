# Gantt

A plan over time: its tasks in a list beside it, by indentation, and across the weeks and days each task as a bar with what's done inside, its baseline faded beneath, its slack dashed after it; summaries as brackets, milestones as diamonds, finish-to-start curves between them, and today. Proposed.

- The critical path is told by line, never colour: in ink, twice as heavy, as production is. Its curves are ink too; the others are `--faint`.
- What's done fills the bar in `--chart-1`, the plan's one series (css/charts.css). A bar's edge is `--faint`, 3 to 1 on the card.
- A task that will finish after its due date is late: its edge turns `--bad`, a tick in `--bad` marks the date it was due, and beside it a cross and its words, "3 days late". Its dates in the list are `--bad` too.
- The baseline, the plan as it was agreed, is a ghost beneath each bar, faded to 0.42: what's no longer in force. Where a bar has moved from its ghost, the plan has slipped.
- Slack is a dashed tail from a bar's end to the latest it may finish, with a tick there: time it may take, not yet taken.
- Summaries are brackets over their tasks, in `--muted`, their names at 600. Milestones are diamonds in ink. Today is a line in `--accent`, with its word.
- Weekends are `--sunken` behind the days. Weeks are labelled by their Monday, and days by their number.
- A what-if (a task that slips, takes longer or changes hands, with nothing saved) shows where each task it moves would go: dashed in `--changes` over the plan, as what isn't so yet, a bar's outline or a milestone's diamond (`.gantt-whatif`). A summary keeps its bracket; the tasks under it show the move.
- It's SVG drawn from attributes alone (x, y, width, height, a path's d) and styled by classes, so it works under a policy that runs no inline style.
- The list is what screen readers read: each task's name, its dates and what's done, with what the chart shows in words (a milestone, on the critical path, late and by how much, its slack, what it follows, its baseline, where a what-if would put it). The chart is hidden from them.
- A task's name can open it: a link inside `.gantt-name`, which reads as a name and is underlined under the pointer.
- Where it's narrow, the list keeps its names and the chart scrolls under it, in its own frame, which a4a scrolls to today when it opens; the dates and what's done stay for screen readers.

- **Days a task's assignee is away** while it's on (a4a, D43) are shaded behind its bar, a day wide each, in `--sunken` (`rect.gantt-away`); half a day is dashed (`.gantt-away.half`). Each says "Away", or "Away in the morning", in its title, and never why.

**Takes:** `rows` (each `kind`: `task`, `summary` or `milestone`; `name`, `href`, `depth`, `start`, `end`, `done`, `baseline`, `critical`, `due`, `slackTo`, `after`, `whatIf`, `away`), `from`, `to`, `today`, `dayWidth`.

**Markup:** the list and the chart share their rows: a head 40px tall, then 32px a row, in the list (`height`) and in the chart (row r's top is `40 + 32r`).

```html
<section class="gantt gantt-box" aria-labelledby="g-title">
  <div class="gantt-scroll" tabindex="0" role="group" aria-label="Data center migration, 2 Nov to 13 Dec">
    <div class="gantt-grid">
      <div class="gantt-side">
        <div class="gantt-side-head" aria-hidden="true"><span>Task</span><span>When</span><span>Done</span></div>
        <ol class="gantt-rows">
          <li class="gantt-row summary" data-depth="0"><span class="gantt-name">Build the new site</span><span class="gantt-when">9–27 Nov</span><span class="gantt-done">30%<span class="hidden"> done</span></span></li>
          <li class="gantt-row late" data-depth="1"><span class="gantt-name">Order the hardware<span class="hidden">, on the critical path, 3 days late: it was due 13 Nov, planned for 9–13 Nov</span></span><span class="gantt-when">9–18 Nov</span><span class="gantt-done">80%<span class="hidden"> done</span></span></li>
        </ol>
      </div>
      <svg class="gantt-chart" width="714" height="520" viewBox="0 0 714 520" aria-hidden="true">
        <rect class="gantt-weekend" …/>  <line class="gantt-rule" …/>  <text class="gantt-week" …>9 Nov</text>  <text …>9</text>
        <path class="gantt-link critical" d="…"/><path class="gantt-link-head critical" d="M x y l-6 -3.5 v7 z"/>
        <path class="gantt-summary" d="M x1 y+21 V y+12 H x2 V y+21"/>
        <g class="gantt-task critical late">
          <rect class="gantt-base" x y="row+24" width height="4" rx="2"/>
          <rect class="gantt-bar" x y="row+8" width height="12" rx="4"/>
          <rect class="gantt-done-part" x="x+2" y="row+10" width="(width-4) × done" height="8" rx="2.5"/>
          <line class="gantt-due" …/><path class="gantt-late-mark" d="…"/><text class="gantt-late" …>3 days late</text>
        </g>
        <g class="gantt-task"><rect class="gantt-base" …/><path class="gantt-slack" d="M end+3 y H latest"/><path class="gantt-slack-end" d="M latest y-4 v8"/><rect class="gantt-bar" …/></g>
        <g class="gantt-task critical"><rect class="gantt-base" …/><path class="gantt-milestone" d="M cx row+6 l8 8 -8 8 -8 -8z"/></g>
        <rect class="gantt-whatif" x y="row+8" width height="12" rx="4"/>   <!-- a what-if's mark; a milestone's is the diamond's path -->
        <line class="gantt-today" …/><text class="gantt-today-label" …>Today</text>
      </svg>
    </div>
  </div>
  <ul class="gantt-legend"><li><svg width="28" height="14" aria-hidden="true">…</svg>The critical path: ink, twice as heavy</li>…</ul>
</section>
```

Draw in this order, so each sits on the last: weekends, rules and the axis; curves; summaries; each task's group; a what-if's marks; today. A task's name as a link: `<span class="gantt-name"><a href="…">Burn-in tests</a><span class="hidden">, on the critical path…</span></span>`.

**In a4a:** Plans, for a plan's tasks and its waterfall. Load css/charts.css with it. The preview is a static rendition of a plan to move a data center.
