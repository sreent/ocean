# CreatedResolved

What came in against what got done: for each day, week or month, the issues created and the issues resolved, side by side, and how many were open at its end. Proposed.

- Two series, in their order: created is the first (`.chart-col.s1`), resolved the second (`.s2`). Neither is green nor coral: resolving isn't drawn as a success, nor creating as a failure.
- Each pair of columns shares its period, rounded at their tops and anchored to the baseline, a gap between the two and a wider one between periods.
- By day up to a month, by week up to half a year, by month past that; weeks begin on Monday.
- Its facts at a glance: created, resolved, open now and how that compares with the start ("8 more than at the start"), and reopened, when any were.
- The figures are a table beside it: each period with created, resolved, reopened and open at its end, newest first.

**Takes:** `interval` (`day`, `week` or `month`), `buckets` (each `from`, `to`, `created`, `resolved`, `reopened`, `open`), `totals`.

**Markup:**

```html
<section class="card" aria-label="Created and resolved"><div class="report">
  <dl class="report-facts"><div><dt>Created</dt><dd>52</dd></div><div><dt>Resolved</dt><dd>45</dd></div><div><dt>Open now</dt><dd>30 <small>8 more than at the start</small></dd></div><div><dt>Reopened</dt><dd>1</dd></div></dl>
  <div class="chart-box">
    <figure class="chart">
      <svg viewBox="0 0 640 230" role="img" aria-labelledby="c-title"><title id="c-title">Issues created and issues resolved, by week; the figures are in the table</title>
        <g><line class="chart-grid" x1="40" x2="620" y1="100" y2="100"/><text x="32" y="104" text-anchor="end">10</text></g>
        <g><path class="chart-col s1" d="M343.5 196V66.5Q343.5 62.5 347.5 62.5H363.5Q367.5 62.5 367.5 66.5V196Z"/><path class="chart-col s2" d="M369.5 196V127.2…Z"/></g>
        <line class="chart-axis" x1="40" x2="620" y1="196" y2="196"/>
      </svg>
      <figcaption><ul class="chart-key"><li><span class="chart-swatch s1" aria-hidden="true"></span>Created</li><li><span class="chart-swatch s2" aria-hidden="true"></span>Resolved</li></ul></figcaption>
    </figure>
    <div class="figures-scroll" tabindex="0" role="group" aria-label="Created and resolved, by week">
      <table class="figures chart-figures"><caption>By week</caption>
        <thead><tr><th scope="col">Week</th><th scope="col" class="num">Created</th><th scope="col" class="num">Resolved</th><th scope="col" class="num">Reopened</th><th scope="col" class="num">Open at the end</th></tr></thead>
        <tbody><tr><th scope="row">16 Nov</th><td class="num">2</td><td class="num">1</td><td class="num"></td><td class="num">30</td></tr>…</tbody>
      </table>
    </div>
  </div>
</div></section>
```

**In a4a:** Reports → Created and resolved, for a project or a query, and a dashboard's widget. Load css/charts.css with it. The preview is rendered from a4a's own component, a quarter by week.
