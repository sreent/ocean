# Rule

A workflow rule, read as a sentence: when something happens to an issue (or on a schedule), if the issue matches a query, then a command changes it; or, as a guard, a change that would make an issue match a query must leave it matching another, or it is refused. Each rule's card, the form that makes one, and what rules did. Proposed.

- **The sentence** (`.rule-sentence`) is the rule: "**When** an issue is created, **if** it matches `Type: Bug Priority: Critical`, **then** apply `Assignee anna tag urgent`." Its three words (`.rule-word`) are in `--text` at 650, the words between them in `--muted`, and the query and the command in mono, as they are written. A scheduled rule starts with how often: "**Every day at 09:00**, **if** an issue matches …". A guard: "**When** a change would make an issue match `State: {Won't fix}`, **if** it doesn't also match `has: comments`, **then** refuse the change: “Say why in a comment.”"
- **Its head** (`.rule-head`): its name, then badges for what it does and how it stands. What it does is in the grammar: a rule that changes issues is `changes`; a guard, which only refuses, is the product's own check, `own`. How it stands has its shape: on (`good`), off (`idle`), or needs fixing (`bad`), when something it names is gone, such as a value renamed since. Off, the whole card is `--muted` (`.rule-card.off`).
- **Under it**, what it did last, or when it next runs (`.rule-said`), then what no longer reads in it, as error notes, then its actions: Preview it, Edit it, Turn it off (or back on), and Delete it, which asks first.
- **The form** (`.rule-form`) says the rule the same way, a row for each word (`.rule-clause`): the word in its column and, beside it, what fills it in (`.rule-clause-body`): what sets it off, a choice; the query and the command, each Ocean's QueryBar field with its problems underlined and its suggestions; a guard's message. Where it's narrow, as on a phone, each word sits over its fields.
- **Its preview** is the command bar's (`.command-preview`): how many issues match it now, and what its command would change on a few of them, as a dry run gives it; for a guard, the issues that already break it.
- **What rules did** is a table (`table.figures.rule-runs`): when, which rule, the issue, how it went as a badge with its shape (applied `good`; nothing to change and skipped `idle`; failed and refused `bad`), and what it changed in the grammar of a change, or why not. It is too much to squeeze onto a phone, so there it scrolls sideways in its frame.
- **Across issues, and beyond a change.** A rule can ask something of related issues, act on them, tell people, and call out. The sentence says each where it falls, in the same words:
  - a further condition follows the query, with its query in mono: "**if** it matches `#Resolved` and all of its parent's subtasks match `#Resolved`" (or its parent, any of its subtasks, the issues it depends on);
  - the issues it acts on follow the command: "**then** apply `State Fixed` to its parent";
  - whom it tells, then its words in quotes: "tell its parent's watchers and @anna “All its subtasks are done.”" (no full stop after a quote that ends one);
  - where it calls, by the address's origin alone, in mono: "call `https://pager.example.com`".
- **Their badges**, beside "changes issues": "tells people", a plain fact; and "calls out", `outside`, since what it knows of an issue leaves the product. A rule that calls out is an administrator's: anyone else who manages it sees Preview it and Turn it off, and a note that says why.
- **Their rows in the form**, each in the clause it belongs to: under **if**, "and" with a choice of the related issues (and, for a link, which one) and their own query field; under **then**, "acting on" with a choice of the issues, the command, "And tell" as a `choice-group` of who, people by login, and the words they're told; and, for administrators, "And call a webhook".
- **Their preview**: each issue it would act on, "· for" the issue that set it off, and whom it would tell, under what it would change.

**Takes:** `name`, `kind` (`change`, `schedule` or `guard`), `sentence` (its words, and the query, command or requirement in them), `on`, `problems` (each `part` and `what`), `said` (what it did last, or when it next runs), `onPreview`, `onEdit`, `onToggle`, `onDelete`; the form takes the same, with `preview` (`matching`, `sample` of `{ id, summary, changes }`, `note`).

**Markup:**

```html
<ul class="rules">
  <li class="card rule-card">                                       <!-- .off when it's turned off -->
    <div class="rule-head">
      <h3 class="rule-name">Critical bugs go to Anna</h3>
      <span class="badges"><span class="badge changes">changes issues</span><span class="badge good"><!-- tick -->on</span></span>
    </div>
    <p class="rule-sentence"><span class="rule-word">When</span> an issue is created, <span class="rule-word">if</span> it matches <code>Type: Bug Priority: Critical</code>, <span class="rule-word">then</span> apply <code>Assignee anna tag urgent</code>.</p>
    <p class="rule-said">Last acted 2 minutes ago, on <a class="issue-id" href="…">BACK-12</a>: Assignee, Tags.</p>
    <div class="cluster"><button type="button">Preview it</button><button type="button">Edit it</button><button type="button">Turn it off</button><span class="grow"></span><button type="button" class="danger small">Delete it</button></div>
  </li>
</ul>

<form class="card form">
  <div class="form-field"><label for="r-name">Name</label><input id="r-name" value="Critical bugs go to Anna"></div>
  <fieldset class="unframed rule-form">
    <legend class="hidden">The rule</legend>
    <div class="rule-clause">
      <span class="rule-word" id="r-when">When</span>
      <div class="rule-clause-body"><div class="cluster"><select aria-labelledby="r-when" …><option selected>an issue is created</option>…</select></div></div>
    </div>
    <div class="rule-clause">
      <span class="rule-word" id="r-if">if</span>
      <div class="rule-clause-body"><span>it matches</span><div class="query"><!-- QueryBar's row and its problems --></div></div>
    </div>
    <div class="rule-clause">
      <span class="rule-word" id="r-then">then</span>
      <div class="rule-clause-body"><span>apply</span><div class="query"><!-- the command's row --></div></div>
    </div>
  </fieldset>
  <div class="command-preview" role="group" aria-label="What it would do"><p class="label">What it would do now</p>…</div>
  <div class="cluster end"><button type="button">Cancel</button><button type="submit" class="primary">Save the rule</button></div>
</form>

<div class="figures-scroll" role="region" aria-label="Table of what rules did" tabindex="0"><table class="figures rule-runs">…</table></div>
```

**In a4a:** the Rules page, under Build, for each project. The preview is a static rendition.

## On what the plan says

A scheduled project rule can ask what the plan says of an issue, as well as whether it matches a query: planned to finish after its due date, its assignee booked for more hours than they work, or a milestone at risk (D72). Each run plans the project once, as the workflow agent, and keeps the issues that also match the rule's query; then the rule applies its command, tells people, or asks for an update. On a schedule only, at most every hour. Proposed, for a4a.

- **In the sentence**, the condition follows the query, after "and", in the product's words, on a well as the query and the command are, but in Plex Sans, since it's chosen, not written (`span.rule-plan`): "**Every weekday at 08:00**, **if** an issue matches `project: MIG #Unresolved` and *is planned to finish after its due date*, **then** apply `tag late`." With a number of days, the number is part of its words: "is planned to finish more than 2 days after its due date", "is a milestone at risk, planned to finish less than 2 days before its due date". Off, it's `--muted` with the rest of the card.
- **Asking for an update** is an action of its own, said as telling is, with its words in quotes: "**then** ask its assignee to confirm its dates: “Is this milestone still on track?”" Its badge is a plain fact, "asks for an update", beside how it stands, as "tells people" is ([Inbox](../Inbox/README.md) draws the request).
- **In the form**, under **if**, after the query: "and", a choice of the planning conditions with "nothing more" first, and where the condition takes one, the days (`input.rule-days`, a number), with a note that says when it runs and what it plans. The choice is there only for a scheduled rule; a rule that runs on a change has none.
- **Its preview** is the command bar's, as for any rule: the issues the plan and the query give now, each with why, in words, as a line of its change (`li.same`: "Planned to finish 18 Nov; due 13 Nov: 3 days late"), then what it would change. What rules did says the same in its table.
- **What a screen reader hears**: the sentence as written; the condition is words in it, nothing more. In the form, the choice is named by its clause ("if and"), and described by the note.

**Takes**, beyond the above: `plan` (`when`: `late`, `overbooked` or `milestone_at_risk`; `days`; and its words), and for an action `ask` (whom, which fields, its words); the form, the planning conditions with their words.

**Markup:**

```html
<p class="rule-sentence"><span class="rule-word">Every weekday at 08:00</span>, <span class="rule-word">if</span> an issue matches <code>project: MIG #Unresolved</code> and <span class="rule-plan">is planned to finish after its due date</span>, <span class="rule-word">then</span> apply <code>tag late</code>.</p>

<div class="rule-clause">
  <span class="rule-word" id="rp-if">if</span>
  <div class="rule-clause-body"><span id="rp-if-about">it matches</span>
    <div class="query"><!-- QueryBar's row --></div>
    <div class="cluster"><span id="rp-and">and</span>
      <select aria-labelledby="rp-if rp-and" aria-describedby="rp-plan-note"><option>nothing more</option><option selected>it's planned to finish after its due date</option><option>its assignee is booked for more hours than they work</option><option>it's a milestone at risk</option></select>
      <label for="rp-days">by more than</label><input id="rp-days" class="rule-days" type="number" min="0" value="0"><span>days</span></div>
    <p class="note" id="rp-plan-note">On a schedule only, at most every hour: each run plans the project once, as the workflow agent, and keeps the issues that also match the query.</p>
  </div>
</div>
```

**In a4a:** a project's scheduled rules (`plan: {when, days}`) and the `ask` action. The preview's three scheduled rules on the plan, and a form making one.
