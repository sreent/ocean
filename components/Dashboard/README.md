# Dashboard

A person's page of widgets: a report with its parameters, a saved search's count or its list, or a note. Two columns where there's room and one where there isn't. Proposed.

- Each widget is a card (`.card.widget`) with its title as its heading. A widget asks to be half the page or all of it (`.widget.full`); on a phone, every widget is the page's width.
- A report widget is the report, compact: how it stands, its facts, its chart, and its figures folded beneath (`details.chart-more`), so the figures are always a click away.
- A search's count is a figure in the name's weight with its words, a link to the issues: "14 issues". A search's list is each issue's id and summary, with its state as a badge in the colour of how it stands.
- A note is the owner's Markdown, as prose.
- Arranging is moving each widget earlier or later, making it wide or half, or removing it: buttons in its head (`.widget-actions`), so it works from the keyboard as from the pointer, with no dragging. The first can't move earlier and the last can't move later; their buttons are disabled.
- A widget being added has a dashed border (`.widget.adding`) until it's on the dashboard.
- Each viewer sees a shared dashboard's widgets as they may: one naming what they can't see is left out for them.

**Takes:** `widgets` (each `id`, `title`, `width`, and its `report` and parameters, its search and `show`, or its `text`), `arranging`, `onMove`, `onWidth`, `onRemove`.

**Markup:**

```html
<div class="dashboard-box"><div class="dashboard">
  <section class="card widget" aria-label="Assigned to you">
    <div class="widget-head"><h2>Assigned to you</h2></div>
    <ul class="widget-list"><li><a class="issue-id" href="…">BACK-31</a><span>Single sign-on fails on Safari <span class="badge">In Progress</span></span></li>…</ul>
  </section>
  <section class="card widget" aria-label="Open bugs">
    <div class="widget-head"><h2>Open bugs</h2></div>
    <p class="widget-count"><strong>14</strong><a href="…">issues</a></p>
  </section>
  <section class="card widget full" aria-label="Backend sprints: the current sprint">
    <div class="widget-head"><h2>Backend sprints: the current sprint</h2></div>
    <div class="report"><!-- components/Burndown, compact: its figures in <details class="chart-more"> --></div>
  </section>
  <section class="card widget" aria-label="Note"><div class="widget-head"><h2>Note</h2></div><div class="prose"><p>Release on <strong>Friday</strong>.</p></div></section>
</div></div>

<!-- Arranging: each widget's head carries its moves -->
<div class="widget-head"><h2>Open bugs</h2>
  <div class="widget-actions" role="group" aria-label="Arrange Open bugs">
    <button type="button" class="small">Move earlier</button><button type="button" class="small">Move later</button>
    <button type="button" class="small">Make it wide</button><button type="button" class="small danger">Remove</button>
  </div>
</div>
```

**In a4a:** Dashboard, under Work: a person's own, the shared ones, and a default for someone with none (their open issues, a current sprint they can see, created against resolved, cycle time). The preview is rendered from a4a's own components: a dashboard, then the same being arranged with a widget being added.

## For plans: a portfolio's summary, and earned value

Two widgets for a plan, which in a4a is a saved search shown as a timeline, in one project or across several (a portfolio) (D72). Each is a card like any other widget, and arranged the same way. Proposed, for a4a.

- **A plan's summary** (`plan`): its title is the saved search's name, with "Open the plan" at the head's end. Then its facts (`dl.plan-summary`, each label `dt.label` over its figure, `dd.plan-figure`, at 650): when it finishes, and under it how far that has moved against its baseline, in words (`dd.plan-says`: "3 days later than its baseline, 15 Dec"; with none, "No baseline", in `--muted`, `.plan-none`); how many tasks are late, with a `bad` badge, its cross and its words ("2 tasks late"), or "None" in `--muted`; how many are on the critical path, a plain count; and the next milestone. Moving against a baseline is a plain fact in words, not a colour: only what's late is `--bad`.
- **By project**, for a portfolio: the same facts a row each (`table.figures.plan-figures`, in a `.figures-scroll` frame of its own): the project, a link to its plan; when it finishes (Plex Mono); against its baseline; late; critical; and its next milestones (`ul.plan-milestones`), each a diamond as the Gantt draws one (`path.gantt-milestone`), its id, a link with a 24px target, its summary and its date (`.plan-when`), and a `bad` badge where it's planned after its due date ("3 days late"). The widget asks to be wide (`.widget.full`); half as wide, the facts stack and the table scrolls in its frame.
- **Earned value by currency** (`evm`): a saved search and its baseline, each currency measured on its own and never converted, a row each in CostPanel's figures (`table.figures.cost-figures`): CPI, SPI and EAC, each a figure with its words beneath (`.cost-sub`: "14% more than planned", "3 days behind", "On time"); an EAC over the budget is a `bad` badge with its cross and how much, under it a plain "$2,000 under budget". What the indices mean is folded beneath (`details.chart-more`). With no baseline there's nothing to earn against: CostPanel's ask (`.cost-index.ask`), with "Save the plan as a baseline" for those who may.
- Each viewer sees what they may: a guest sees no money and no widget of earned value; a project someone can't see is left out of the rows, and its figures out of the totals.

**Takes**, per widget, beyond the above: `plan` (`search`, `finish`, `baseline` with its finish and how far it moved, `late`, `critical`, `next` milestones, and `projects`, each the same with its `href`); `evm` (`search`, `baseline`, and per currency `cpi`, `spi`, `eac`, `budget`, each with its words).

**Markup:**

```html
<section class="card widget full" aria-labelledby="w-plan">
  <div class="widget-head"><h2 id="w-plan">Q4 infrastructure</h2><a href="…">Open the plan</a></div>
  <dl class="plan-summary">
    <div><dt class="label">Finishes</dt><dd class="plan-figure">18 Dec</dd><dd class="plan-says">3 days later than its baseline, 15 Dec</dd></div>
    <div><dt class="label">Late</dt><dd class="plan-figure">2<span class="hidden"> tasks</span></dd><dd><span class="badge bad"><svg class="icon" aria-hidden="true"><!-- cross --></svg>2 tasks late</span></dd></div>
    <div><dt class="label">Critical</dt><dd class="plan-figure">11<span class="hidden"> tasks</span></dd><dd class="plan-says">tasks on the critical path</dd></div>
    <div><dt class="label">Next milestone</dt><dd><ul class="plan-milestones">…</ul></dd></div>
  </dl>
  <div class="figures-scroll" tabindex="0" role="group" aria-label="Q4 infrastructure, by project">
    <table class="figures plan-figures"><caption class="hidden">Q4 infrastructure, by project</caption>
      <thead><tr><th scope="col">Project</th><th scope="col" class="num">Finishes</th><th scope="col">Against its baseline</th><th scope="col" class="num">Late</th><th scope="col" class="num">Critical</th><th scope="col">Next milestones</th></tr></thead>
      <tbody><tr>
        <th scope="row"><a href="…">Customer portal 3.0</a></th><td class="num mono">4 Dec</td><td>On its baseline</td>
        <td class="num"><span class="badge bad"><svg class="icon" aria-hidden="true"><!-- cross --></svg>1 late</span></td><td class="num">2</td>
        <td><ul class="plan-milestones"><li><svg viewBox="0 0 16 16" aria-hidden="true"><path class="gantt-milestone" d="M8 1.5l6.5 6.5-6.5 6.5-6.5-6.5z"/></svg><a class="issue-id" href="…">WEB-41</a><span>Portal goes live</span><span class="plan-when">7 Dec</span><span class="badge bad"><svg class="icon" aria-hidden="true"><!-- cross --></svg>3 days late</span></li></ul></td>
      </tr></tbody>
    </table>
  </div>
</section>

<section class="card widget" aria-labelledby="w-evm">
  <div class="widget-head"><h2 id="w-evm">Q4 infrastructure: earned value</h2><span class="note">Against the baseline of 2 Nov</span></div>
  <div class="figures-scroll" tabindex="0" role="group" aria-label="Earned value, by currency">
    <table class="figures cost-figures"><caption class="hidden">Earned value, by currency</caption>
      <thead><tr><th scope="col">In</th><th scope="col" class="num">CPI</th><th scope="col" class="num">SPI</th><th scope="col" class="num">EAC</th></tr></thead>
      <tbody><tr><th scope="row">Euros</th><td class="num">0.88<span class="cost-sub">14% more than planned</span></td><td class="num">0.93<span class="cost-sub">3 days behind</span></td>
        <td class="num">€545,000<span class="cost-sub"><span class="badge bad"><svg class="icon" aria-hidden="true"><!-- cross --></svg>€65,000 over budget</span></span></td></tr></tbody>
    </table>
  </div>
  <details class="chart-more"><summary>What these say</summary><p class="note">…</p></details>
</section>
```

**In a4a:** the `plan` and `evm` widgets, fed by `GET /plans/summary` and the baseline's earned value. The preview's last part: a portfolio of three projects, its earned value in euros and dollars, and a plan with no baseline yet.
