# Distribution

How many took how long: columns of a measure's spread, with where its percentiles fall, and the figures. a4a draws cycle time with it, from an issue's first step into work to its resolution. Proposed.

- The columns are one series, the first (`.chart-col.s1`), each with rounded ends at its top and anchored to the baseline, parted from the next by a gap.
- The buckets are equal, as wide as the spread needs, from six hours to half a year, and twenty at most; the axis names their edges ("0", "2d", "4d") and the table each bucket ("0–6h", "2–4 days").
- The half and 85% marks are solid lines in ink (`.dist-mark`, `--text`): a percentile is so, not a plan, so it isn't dashed. Each is named at its top: "Half by 2.9 days", "85% by 7.4 days".
- Its facts at a glance: how many were resolved, half within, 85% within, 95% within, on average. Percentiles are by nearest rank, said in days.
- The figures are tables beside it: how many took how long, then the slowest, each with its id and how long it took. Those resolved without ever starting are left out, and said so in a note, with their ids; one reopened on the way says so in its row.

**Takes:** `buckets` (each `label`, `count`), `percentiles` (`p50`, `p85`, `p95`, each in days), `average`, `issues` (the slowest: each `id`, `summary`, `days`).

**Markup:**

```html
<section class="card" aria-label="Cycle time"><div class="report">
  <dl class="report-facts"><div><dt>Resolved</dt><dd>18</dd></div><div><dt>Half within</dt><dd>2.9 days</dd></div><div><dt>85% within</dt><dd>7.4 days</dd></div><div><dt>95% within</dt><dd>13.2 days</dd></div><div><dt>On average</dt><dd>4 days</dd></div></dl>
  <div class="chart-box">
    <figure class="chart">
      <svg viewBox="0 0 640 240" role="img" aria-labelledby="d-title"><title id="d-title">How many issues took how long from start to resolved; the figures are in the table</title>
        <g><line class="chart-grid" x1="40" x2="620" y1="120" y2="120"/><text x="32" y="124" text-anchor="end">2</text></g>
        <path class="chart-col s1" d="M48.6 206V124Q48.6 120 52.6 120H68.6Q72.6 120 72.6 124V206Z"/>
        <line class="dist-mark" x1="190" x2="190" y1="16" y2="206"/><text class="chart-label" x="195" y="24">Half by 2.9 days</text>
        <line class="chart-axis" x1="40" x2="620" y1="206" y2="206"/>
      </svg>
      <figcaption><ul class="chart-key">
        <li><span class="chart-swatch s1" aria-hidden="true"></span>Issues, by how long they took</li>
        <li><svg width="12" height="12" aria-hidden="true"><path class="dist-mark" d="M6 0V12"/></svg>Where the half and 85% of them were done</li>
      </ul></figcaption>
    </figure>
    <div class="figures-scroll" tabindex="0" role="group" aria-label="Issues by how long they took">
      <table class="figures chart-figures"><caption>How many took how long</caption><thead><tr><th scope="col">Took</th><th scope="col" class="num">Issues</th></tr></thead><tbody><tr><th scope="row">0–24h</th><td class="num">2</td></tr>…</tbody></table>
    </div>
  </div>
  <div class="figures-scroll" tabindex="0" role="group" aria-label="The slowest">
    <table class="figures chart-figures"><caption>The slowest, from first In Progress to resolved</caption>…</table>
  </div>
</div></section>
```

**In a4a:** Reports → Cycle time, for a project or a query, and a dashboard's widget. Load css/charts.css with it. The preview is rendered from a4a's own component, eighteen issues over a quarter.
