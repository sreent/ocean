# TimeReport

The time people logged: by person, by project or by week, as bars on one scale with their figures; each issue's time against its estimate; and each person's weeks. Proposed.

- One measure, so one colour: each bar is the first series (`.time-fill`), on one scale, its figure beside it in `--text`: "44h". The bar is never the only sign.
- How the time is grouped is a choice of views (`.modes`): by person, by project, by week.
- Each issue's time against its estimate is a meter (`.spent-meter`): the estimate's track in `--sunken`, what's spent in the first series with its words, "75% of 8h"; past the estimate, the part past it in `--warn` and a `warn` badge, "2h over". An issue with no estimate says "No estimate".
- Each person's weeks are a table, a column for each week (weeks begin on Monday) and one for all.
- Its facts at a glance: how much was logged and when, how many entries, how many people.
- Everything here is a table or a list with its figures, so it downloads as CSV: entries, or the totals by person, issue, project or week.

**Takes:** `totalMinutes`, `entries`, `byPerson`, `byProject`, `byWeek` (each `label`, `minutes`), `byIssue` (each `issue`, `summary`, `minutes`, `spentMinutes`, `estimateMinutes`, `overMinutes`), `weeks`, `matrix` (each person's minutes per week).

**Markup:** a bar's `width` and a meter's are SVG attributes, so the page needs no inline style.

```html
<section class="card" aria-label="Time"><div class="report">
  <dl class="report-facts"><div><dt>Logged</dt><dd>92h <small>26 Oct to 16 Nov</small></dd></div><div><dt>Entries</dt><dd>23</dd></div><div><dt>People</dt><dd>3</dd></div></dl>
  <div class="modes" role="group" aria-label="Group the time"><button type="button" aria-pressed="true">By person</button><button type="button" aria-pressed="false">By project</button><button type="button" aria-pressed="false">By week</button></div>
  <dl class="time-bars" aria-label="Time logged, by person">
    <div class="time-row"><dt>Chloé Martin</dt><dd class="time-bar"><svg aria-hidden="true"><rect class="time-fill" width="100%" height="100%" rx="3"/></svg></dd><dd class="time-figure">44h</dd></div>
    <div class="time-row"><dt>Anna Schmidt</dt><dd class="time-bar"><svg aria-hidden="true"><rect class="time-fill" width="72.7%" height="100%" rx="3"/></svg></dd><dd class="time-figure">32h</dd></div>
  </dl>
  <div class="figures-scroll" tabindex="0" role="group" aria-label="Time against estimates, by issue">
    <table class="figures chart-figures"><caption>Each issue: time logged here, all told, and against its estimate</caption>
      <thead><tr><th scope="col">Issue</th><th scope="col" class="num">Here</th><th scope="col" class="num">All told</th><th scope="col">Against its estimate</th></tr></thead>
      <tbody><tr><th scope="row"><a class="issue-id" href="…">MIG-6</a> Target network design</th><td class="num">32h</td><td class="num">40h</td>
        <td><span class="spent-meter"><svg aria-hidden="true"><rect class="spent-track" width="100%" height="100%" rx="3"/><rect class="spent-fill" width="100%" height="100%" rx="3"/></svg><span class="muted">100% of 40h</span></span></td></tr>
      <tr>…<td><span class="spent-meter"><svg aria-hidden="true"><rect class="spent-track" width="100%" height="100%" rx="3"/><rect class="spent-fill" width="80%" height="100%" rx="3"/><rect class="spent-over" x="80%" width="20%" height="100%" rx="3"/></svg><span class="badge warn">2h over</span></span></td></tr></tbody>
    </table>
  </div>
  <div class="figures-scroll" tabindex="0" role="group" aria-label="Each person's weeks"><table class="figures chart-figures"><caption>Each person, week by week (weeks begin on Monday)</caption>…</table></div>
</div></section>
```

**In a4a:** Reports → Time, for a project, a query or a person, with its CSV, and a dashboard's widget. The preview is rendered from a4a's own component, three weeks of a team's time.
