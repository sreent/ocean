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
