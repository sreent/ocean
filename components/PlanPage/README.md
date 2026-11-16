# PlanPage

A plan's page, around its pieces: its views as a choice of three, the plan at a glance in one line of facts, a what-if that changes one task and says where the finish would go, and what the plan assumed to draw itself, folded until it's opened. Proposed.

- The views are a choice (`.modes.plan-views`, as wide as their words): Timeline (Gantt), Resources (LoadGrid) and Costs (CostPanel). Each has its own address, and the timeline and the costs share the baseline the plan is compared with, chosen above them.
- The plan at a glance (`.plan-facts`): when it ends, in ink, and how that stands against its baseline; how many tasks are on the critical path; what's late, as a `bad` badge, or "Nothing is late"; and a due date with little to spare, as a `warn` badge: "MIG-14 has 1 day to spare before it's due, 15 Dec".
- A what-if (`.whatif`, a card) changes one task: it starts later, it has a new estimate, or someone else does it. The fields sit side by side (`.whatif-form`, of `.form-field`s), the task's the widest, with one button, "Show what changes".
- Its answer (`.whatif-result`), beneath a line: in bold, where the finish would go; the finish, and how it stands against the baseline, in the grammar of a change; a due date it would miss, as a `bad` badge; and the tasks it would move, in levelling's list of moves (LoadGrid). It says plainly that nothing is saved, with a way to clear it. On the Gantt, each task it moves is dashed where it would go (`.gantt-whatif`).
- What the plan assumed to draw itself (a task with no estimate, planned as a day), or what its figures leave out (someone with no hourly rate), is folded until it's opened (`<details class="plan-notes">`), its summary saying how many.

**Takes:** `views` (and the one shown), `facts`, `whatIf` (the tasks to choose from, the change asked, and its answer), `assumed`.

**Markup:**

```html
<div class="stack">
  <div class="modes plan-views" role="group" aria-label="Data center migration's plan"><button type="button" aria-pressed="true">Timeline</button>…</div>
  <ul class="plan-facts">
    <li>Ends <strong>17 Dec</strong>, 7 days later than Plan of record (8 Dec)</li>
    <li>8 tasks on the critical path</li>
    <li>Nothing is late</li>
    <li><span class="badge warn"><!-- clock -->MIG-14 has 1 day to spare before it's due, 15 Dec</span></li>
  </ul>
  <section class="card whatif" aria-labelledby="w-title">
    <h2 id="w-title">What if…</h2>
    <p class="note">Change one task and see where the finish would go. Nothing is saved.</p>
    <form class="whatif-form">
      <div class="form-field"><label for="w-task">Task</label><select id="w-task">…</select></div>
      <div class="form-field"><label for="w-kind">What changes</label><select id="w-kind">…</select></div>
      <div class="form-field"><label for="w-days">Working days later</label><input id="w-days" type="number" min="1"></div>
      <button type="submit" class="primary">Show what changes</button>
    </form>
    <div aria-live="polite"><div class="whatif-result">
      <p class="whatif-lead">If MIG-7 starts 2 days later, the plan ends 2 days later.</p>
      <ul class="change-lines"><li><span class="change-field">Ends:</span> <del>17 Dec</del> → <ins>21 Dec</ins></li></ul>
      <div class="badges"><span class="badge bad"><!-- cross -->MIG-14 would be 1 day late: it's due 15 Dec</span></div>
      <h3>9 tasks would move</h3>
      <ul class="levelling-list">…</ul>
      <p class="note cluster">Nothing is saved: this only shows what would happen.<button type="button" class="link">Clear the what-if</button></p>
    </div></div>
  </section>
  <!-- the Gantt -->
  <details class="plan-notes"><summary>3 things a4a assumed to draw this plan</summary><ul><li>BACK-5 has no estimate; planned as 1 day</li></ul></details>
</div>
```

**In a4a:** Plan, around the Gantt, LoadGrid and CostPanel. The preview is a static rendition of the timeline's, with a what-if asked.
