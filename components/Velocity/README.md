# Velocity

How much a board's sprints get done: per sprint that has begun, what it held when it started (committed) and what was resolved in it by its end (done), in story points, estimated hours or issues, with the average done over the last three that are over. Drawn as CostPanel's charts are, from its attributes alone, with its figures as a table beside it. Proposed, for a4a (D43).

- **Bars in pairs** (`svg.chart.velocity-chart`): committed in series 1 (`.velocity-committed`), done in series 2 (`.velocity-done`); a sprint still under way has its done bar lighter (`.velocity-done.open`), since it isn't done yet, and its row in the table says "Under way".
- **The average** is a dashed line in `--text` (`.velocity-average`), and the sentence over the chart says it in words (`figcaption`), so the chart is never the only place it is.
- **The key** is Ocean's (`.chart-key`, `.chart-swatch.s1`, `.s2`). The chart scrolls sideways in its own frame (`.velocity-scroll`) when there are many sprints.

**Takes:** `unit`, `sprints` (each `name`, `committed`, `done`, `finished`), `average`.

**Markup:**

```html
<section class="card stack" aria-labelledby="velocity">
<div class="section-head"><h2 id="velocity">Velocity</h2><span class="note">In points</span></div>
<figure class="velocity" aria-labelledby="velocity-says">
<figcaption id="velocity-says" class="note">On average, 21 points done over the last 3 sprints that are over.</figcaption>
<div class="velocity-scroll">
<svg class="chart velocity-chart" viewBox="0 0 232 162" width="232" height="162" aria-hidden="true">
<line class="chart-axis" x1="0" x2="232" y1="140" y2="140"/>
<rect class="velocity-committed" x="8" y="20" width="18" height="120" rx="2"/><rect class="velocity-done" x="28" y="52" width="18" height="88" rx="2"/><text x="27" y="155" text-anchor="middle">S12</text>
<rect class="velocity-committed" x="64" y="36" width="18" height="104" rx="2"/><rect class="velocity-done" x="84" y="44" width="18" height="96" rx="2"/><text x="83" y="155" text-anchor="middle">S13</text>
<rect class="velocity-committed" x="120" y="28" width="18" height="112" rx="2"/><rect class="velocity-done" x="140" y="60" width="18" height="80" rx="2"/><text x="139" y="155" text-anchor="middle">S14</text>
<rect class="velocity-committed" x="176" y="44" width="18" height="96" rx="2"/><rect class="velocity-done open" x="196" y="108" width="18" height="32" rx="2"/><text x="195" y="155" text-anchor="middle">S15</text>
<line class="velocity-average" x1="0" x2="232" y1="52" y2="52"/>
</svg>
</div>
<ul class="chart-key" aria-hidden="true"><li><span class="chart-swatch s1"></span>Committed</li><li><span class="chart-swatch s2"></span>Done</li><li><svg width="16" height="8" aria-hidden="true"><line class="velocity-average" x1="0" x2="16" y1="4" y2="4"/></svg>Average of the last three</li></ul>
<table class="figures"><caption class="hidden">Velocity, in points</caption>
<thead><tr><th scope="col">Sprint</th><th scope="col" class="num">Committed</th><th scope="col" class="num">Done</th></tr></thead>
<tbody><tr><th scope="row">S12</th><td class="num mono">30</td><td class="num mono">22</td></tr><tr><th scope="row">S13</th><td class="num mono">26</td><td class="num mono">24</td></tr><tr><th scope="row">S14</th><td class="num mono">28</td><td class="num mono">20</td></tr><tr><th scope="row">S15<span class="item-about">Under way</span></th><td class="num mono">24</td><td class="num mono">8</td></tr></tbody>
</table>
</figure>
</section>
```
