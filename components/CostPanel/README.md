# CostPanel

Cost against plan: what was planned, earned and spent by now, the budget and the forecast, as bars on one scale with their figures; the indices in plain words; and the curves over time, with their figures beside them as a table. Proposed.

- The bars share one scale, the largest figure across. Each carries its name and its figure, in tabular numbers, so a bar is never the only sign.
- The series take css/charts.css's colours in order, and keep them across the bars and the curves: planned value `--chart-1`, earned value `--chart-2`, actual cost `--chart-3`. The budget is the plan's total, in the plan's colour. The forecast is the actual cost as it's forecast to end, dashed, as what isn't so yet.
- A forecast over the budget says so, as a `bad` badge with its cross and its words: "€65,000 over budget". Under it, a note says so plainly: "€48,500 under budget". With no budget set, a note beneath the bars says what setting one would show (`.cost > .note`).
- Each index is a figure with plain words, worked out from the figures: CPI 0.88, "The work done so far cost 14% more than planned", and SPI 0.93, "3 days behind", each with the figures it comes from. A CPI of 0.88 is 1 ÷ 0.88, or 14% more; days behind are counted from when the plan reached what's been earned.
- With no baseline there's nothing to earn against: the indices' place says what a baseline would add, and offers to save one, or to choose one where there are some (`.cost-index.ask`). The bars to date are the actual cost alone.
- The curves: lines 2px, with a ring of the card's colour around each end; gridlines are hairlines in `--line`; today in `--accent`. Each line's end has its name and figure in `--text`, never the series' colour, and a key names each line by its stroke.
- The figures beside the chart, as a table, as Ocean's charts keep them. On a phone the chart scales down and its words less so.
- Where there are no weeks to draw, as when a product keeps no history of its figures, the curves are left out, never made up. The figures are tables alone, side by side where there's room (`.cost-tables`): earned value's figures, each with what it says (`td.cost-says`), and the costs by person and by task, each figure with its hours beneath (`.cost-sub`). Each table scrolls sideways in its own frame (`.figures-scroll`, components/Layout).
- Both the bars and the curves are SVG, drawn from attributes alone and styled by classes: a bar's width is a percentage of its line.

**Takes:** `asOf`, `planned`, `earned`, `actual`, `budget`, `forecast`, `cpi`, `spi` (each with its words), `weeks` (each week's `planned`, `earned`, `actual`; none, and there are no curves), `baseline` (none, and it asks for one), `byPerson` and `byTask` (each `planned` and `spent`, with their hours).

**Markup:**

```html
<section class="card cost-box" aria-labelledby="cost-title"><div class="cost">
  <div class="cost-head"><h2 id="cost-title">Cost against plan</h2><p class="note">Customer portal 3.0 · as of 13 Nov, week 11 of 16</p></div>
  <div class="cost-top">
    <div class="cost-bars">
      <p class="label" id="to-date">To date</p>
      <dl aria-labelledby="to-date">
        <div class="cost-row"><dt>Planned</dt><dd class="cost-bar"><svg aria-hidden="true"><rect class="cost-fill s1" width="71%" height="100%" rx="3"/></svg></dd><dd class="cost-figure">€387,000</dd></div>
      </dl>
      <p class="label" id="at-end">At completion</p>
      <dl aria-labelledby="at-end">
        <div class="cost-row"><dt>Forecast</dt><dd class="cost-bar"><svg aria-hidden="true"><rect class="cost-fill forecast" x="0.75" y="0.75" width="100%" height="10.5" rx="3"/></svg></dd><dd class="cost-figure">€545,000</dd></div>
      </dl>
      <div class="cost-over"><span class="badge bad"><!-- cross -->€65,000 over budget</span></div>
    </div>
    <div class="cost-indices">
      <div class="cost-index"><p class="label">Cost performance, CPI</p><strong>0.88</strong><p>The work done so far cost 14% more than planned.</p><p class="note">€360,000 earned for €409,000 spent</p></div>
    </div>
  </div>
  <div class="cost-curve-box">
    <figure class="cost-curve">
      <svg viewBox="0 0 420 250" role="img" aria-labelledby="curve-title"><title id="curve-title">…</title>
        <line class="cost-grid-line" …/><text …>€100k</text><line class="cost-axis" …/>
        <path class="cost-line s1" d="…"/><path class="cost-line s3 forecast" d="…"/><circle class="cost-dot s2" r="4" …/>
        <text class="cost-label" …>Earned €360k</text><line class="cost-today" …/><text class="cost-today-label" …>Today</text>
      </svg>
      <figcaption><ul class="cost-key"><li><svg width="22" height="10" aria-hidden="true"><path class="cost-line s1" d="M1 5H21"/></svg>Planned value</li>…</ul></figcaption>
    </figure>
    <table class="figures cost-figures"><caption>Week by week, to date and as planned</caption>…<td class="num">€387k</td>…</table>
  </div>
</div></section>
```

Without a baseline, in the indices' place: `<div class="cost-index ask"><p class="label">Earned value</p><p>With a baseline, a4a measures…</p><button type="button">Save the plan as a baseline</button></div>`. The figures as tables alone: `<div class="cost-tables"><div class="figures-scroll" tabindex="0" role="group" aria-label="By person"><table class="figures cost-figures"><caption>By person</caption>…<td class="num">€152,000<span class="cost-sub">1,600h</span></td>…</table></div>…</div>`, and in earned value's table, `<td class="cost-says">EV ÷ AC</td>`.

**In a4a:** Time and cost, for a plan's cost against its baseline. Load css/charts.css with it. The preview is a static rendition.
