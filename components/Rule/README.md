# Rule

A workflow rule, read as a sentence: when something happens to an issue (or on a schedule), if the issue matches a query, then a command changes it; or, as a guard, a change that would make an issue match a query must leave it matching another, or it is refused. Each rule's card, the form that makes one, and what rules did. Proposed.

- **The sentence** (`.rule-sentence`) is the rule: "**When** an issue is created, **if** it matches `Type: Bug Priority: Critical`, **then** apply `Assignee anna tag urgent`." Its three words (`.rule-word`) are in `--text` at 650, the words between them in `--muted`, and the query and the command in mono, as they are written. A scheduled rule starts with how often: "**Every day at 09:00**, **if** an issue matches …". A guard: "**When** a change would make an issue match `State: {Won't fix}`, **if** it doesn't also match `has: comments`, **then** refuse the change: “Say why in a comment.”"
- **Its head** (`.rule-head`): its name, then badges for what it does and how it stands. What it does is in the grammar: a rule that changes issues is `changes`; a guard, which only refuses, is the product's own check, `own`. How it stands has its shape: on (`good`), off (`idle`), or needs fixing (`bad`), when something it names is gone, such as a value renamed since. Off, the whole card is `--muted` (`.rule-card.off`).
- **Under it**, what it did last, or when it next runs (`.rule-said`), then what no longer reads in it, as error notes, then its actions: Preview it, Edit it, Turn it off (or back on), and Delete it, which asks first.
- **The form** (`.rule-form`) says the rule the same way, a row for each word (`.rule-clause`): the word in its column and, beside it, what fills it in (`.rule-clause-body`): what sets it off, a choice; the query and the command, each Ocean's QueryBar field with its problems underlined and its suggestions; a guard's message. Where it's narrow, as on a phone, each word sits over its fields.
- **Its preview** is the command bar's (`.command-preview`): how many issues match it now, and what its command would change on a few of them, as a dry run gives it; for a guard, the issues that already break it.
- **What rules did** is a table (`table.figures.rule-runs`): when, which rule, the issue, how it went as a badge with its shape (applied `good`; nothing to change and skipped `idle`; failed and refused `bad`), and what it changed in the grammar of a change, or why not. It is too much to squeeze onto a phone, so there it scrolls sideways in its frame.

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
