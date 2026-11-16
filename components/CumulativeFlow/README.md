# CumulativeFlow

How many issues were in each state at the end of each day: a band for each state, stacked with the resolved ones at the foot, so a band that widens is work piling up there. Proposed.

- A band takes the colour of how its state stands, never a series colour: resolved `--chart-done`, waiting on someone `--chart-short` (a state a4a marks `warn`, such as In Review or Blocked), failed `--chart-failed`, and every other state `--chart-open`. So no state reads as something it isn't: nothing open is coral, nothing waiting is green.
- States that stand alike share a colour, and are told apart by the card's colour between them (a 2px `--surface` stroke) and by their names at their ends, in `--text`, with how many are in each now: "In Progress 6". A band too thin for its name is named in the key and the table.
- The key names each colour and the states in it: "Waiting on someone: In Review, Blocked".
- Stacked in the workflow's order from the foot: the resolved states, then the last open state, up to the first. A state no issue was in on any of the days is left out.
- Today is as it is now; days to come aren't drawn. A deleted issue counts on the days it existed.
- Its facts at a glance: open now, resolved, and how many issues it counted, "41, with deleted ones on their days".
- The figures are a table beside it, a column for each state and one for all, newest day first, today's row in the name's weight.

**Takes:** `states` (each `name`, `resolved`, and its `tone`), `days` (each `date`, `counts` in the order of `states`, and `total`), `today`.

**Markup:** `data-standing` is `done`, `waiting`, `failed` or `open`, on each band and its swatch.

```html
<section class="card" aria-label="Cumulative flow"><div class="report">
  <dl class="report-facts"><div><dt>Open now</dt><dd>17</dd></div><div><dt>Resolved</dt><dd>17</dd></div><div><dt>Counted</dt><dd>41 <small>with deleted ones on their days</small></dd></div></dl>
  <div class="chart-box">
    <figure class="chart">
      <svg viewBox="0 0 640 260" role="img" aria-labelledby="f-title"><title id="f-title">Issues in each state at the end of each day, 3 Nov to 16 Nov; the figures are in the table</title>
        <g><line class="chart-grid" x1="40" x2="522" y1="120" y2="120"/><text x="32" y="124" text-anchor="end">20</text></g>
        <path class="cfd-band" data-standing="done" d="M40 211.8L77.1 211.8…L522 228L40 228Z"/>
        <path class="cfd-band" data-standing="waiting" d="…Z"/>
        <path class="cfd-band" data-standing="open" d="…Z"/>
        <line class="chart-axis" x1="40" x2="522" y1="228" y2="228"/>
        <text class="chart-label" x="530" y="150">In Progress 6</text>
      </svg>
      <figcaption><ul class="chart-key">
        <li><span class="chart-swatch" data-standing="done" aria-hidden="true"></span>Resolved: Fixed, Done</li>
        <li><span class="chart-swatch" data-standing="waiting" aria-hidden="true"></span>Waiting on someone: In Review, Blocked</li>
        <li><span class="chart-swatch" data-standing="open" aria-hidden="true"></span>Open: Submitted, Open, In Progress</li>
      </ul></figcaption>
    </figure>
    <div class="figures-scroll" tabindex="0" role="group" aria-label="Issues in each state, day by day">
      <table class="figures chart-figures"><caption>At the end of each day (today as it is now)</caption>
        <thead><tr><th scope="col">Day</th><th scope="col" class="num">Open</th>…<th scope="col" class="num">All</th></tr></thead>
        <tbody><tr class="today"><th scope="row">16 Nov, today</th><td class="num">5</td>…</tr>…</tbody>
      </table>
    </div>
  </div>
</div></section>
```

**In a4a:** Reports → Cumulative flow, for a project or a query, and a dashboard's widget. Load css/charts.css with it. The preview is rendered from a4a's own component, two weeks of a project's seven states.
