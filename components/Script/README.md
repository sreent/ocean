# Script

a4a's scripted workflows: a rule or an action written in JavaScript, which runs in a sandbox on the server; the dry run that shows what it would do to one issue; a state machine's transitions; and, on the issue page, what a person can do to the issue by its workflows. Proposed.

- **The field** (`.script-field`) is a script in mono, with its line numbers in a gutter (`.script-lines`). A problem in it is underlined in `--bad`, as the query's are (`mark.query-problem` in `.script-mirror`), its line number is in `--bad` (`.bad`), and its words are beneath the field, as the query's (`.query-problems`): "Unexpected token ';' (line 2)". The field is a `textarea` (`.script-input`) over a mirror of its text (`.script-mirror`), which draws the underlines and scrolls with it. It sits in the rule form's clause, where the command would be: "**then** run this script", or for a guard, "**if** its script refuses the change".
- **A test run** (`.script-run`) is what the script would do to one issue as it is now, saving nothing: how it ended (it ran, or where it stopped, as an error note), what it logged (`.script-log`, in mono, as it wrote it), what it refused, in its words, and each command it asked for (`.script-applies`): the command in mono, the issue it's for, and what it would change, in the grammar of a change.
- **A state machine** is a list of transitions (`.transitions`), one row each (`.transition`): its name, the states it leaves, the state it reaches, and, if it has them, what the issue must match first (a query) and what it also does (a command), each in the query bar's field. Where it's narrow, the row wraps.
- **On the issue page** (`.workflow-bar`): the moves out of the state the issue is in, each a button that says where it goes ("Start work → In Progress"), and the project's actions, each a button by its name. A move that can't be made now is shown, but can't be pressed, and why is beneath (`.workflow-why`): "Start work needs the issue to match has: Assignee". An action that isn't offered for the issue isn't shown. Someone who can only read sees none of it.

**Takes:** the field takes `text`, `problems` (each `start`, `end`, `message`, `line`), `onText`; a test run takes `ok`, `error` (`kind`, `message`, `line`), `logs`, `refusal`, `applies` (`command`, `issue`, `changes`, `errors`), `note`; the bar takes `transitions` (`name`, `to`, `allowed`, `why`) and `actions` (`name`).

**Markup:**

```html
<div class="script-field">
  <pre class="script-lines" aria-hidden="true">1
<span class="bad">2</span>
3</pre>
  <div class="script-body">
    <pre class="script-mirror" aria-hidden="true">if (issue.fields.Priority === 'Critical')
<mark class="query-problem">  apply('tag urgent';</mark>
comment('Looked at.');</pre>
    <textarea class="script-input" aria-label="Its script, in JavaScript" spellcheck="false">…</textarea>
  </div>
</div>
<p class="query-problems"><!-- cross --><strong>missing ) after argument list (line 2)</strong></p>

<div class="script-run" role="group" aria-label="What it would do to BACK-12">
  <p class="label">What it would do to <a class="issue-id" href="…">BACK-12</a></p>
  <pre class="script-log">was Major</pre>
  <ul class="script-applies"><li><code>Priority Critical tag urgent</code> <!-- ChangeLines --></li></ul>
  <p class="note">It asks for 1 command: 1 would change something. Nothing was saved.</p>
</div>

<div class="workflow-bar" role="group" aria-label="Move it on">
  <p class="label">Move it on</p>
  <button type="button" class="move">Start work <!-- arrow --> In Progress</button>
  <button type="button" class="move" disabled aria-describedby="why-1">Decline <!-- arrow --> Won't fix</button>
  <button type="button">Escalate</button>
  <p class="workflow-why" id="why-1">Decline needs the issue to match has: comments</p>
</div>
```
