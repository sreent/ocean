# WorkWeek

A person's working week: hours on each weekday, for part time or a weekday off. Ocean's Settings, put together, on a person's own page beside their days away. Proposed, for a4a (D43).

- **Seven fields in a row** (`.work-week`), Monday first, each labelled by its day; four to a row where it's narrow.
- **Under them**, the week's total in words (`.field-help`), and before anyone saves one, that the plan's working days at their capacity are what's used.
- **Saving** says what it does after it (`p.outcome`): "Saved. Plans and your timesheet use it." A quiet link goes back to the plan's working days.

**Takes:** `week` (seven hours, Sunday first, or none), `capacity`, `canChange`, `onSave`.

**Markup:**

```html
<section class="card" aria-labelledby="week">
<div class="section-head"><h2 id="week">Working week</h2><span class="note">Your hours each day</span></div>
<p class="section-note">Part time, or a weekday off: plans give you work on the days you work, those hours each, and your timesheet measures each day against them.</p>
<form class="form">
<div class="work-week">
<div class="form-field"><label for="d1">Mon</label><input id="d1" inputmode="decimal" value="8"></div>
<div class="form-field"><label for="d2">Tue</label><input id="d2" inputmode="decimal" value="8"></div>
<div class="form-field"><label for="d3">Wed</label><input id="d3" inputmode="decimal" value="0"></div>
<div class="form-field"><label for="d4">Thu</label><input id="d4" inputmode="decimal" value="8"></div>
<div class="form-field"><label for="d5">Fri</label><input id="d5" inputmode="decimal" value="4"></div>
<div class="form-field"><label for="d6">Sat</label><input id="d6" inputmode="decimal" value="0"></div>
<div class="form-field"><label for="d0">Sun</label><input id="d0" inputmode="decimal" value="0"></div>
</div>
<p class="field-help">28 hours a week.</p>
<div class="cluster"><button type="submit" class="primary">Save my week</button><button type="button" class="link">Use the plan’s working days</button><p role="status" class="outcome">Saved. Plans and your timesheet use it.</p></div>
</form>
</section>
```
