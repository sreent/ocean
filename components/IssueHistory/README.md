# IssueHistory

An issue's history, in the ledger's spirit: who did each thing, for whom and through what, when, and what it changed, in the grammar of a change; comments in their place. Proposed.

- Who, by their mark: a person round, an agent its lagoon square, a service its slate one. An agent goes by its lower-case id ("triage", "claude-code", "assistant"), and acting for a person says so: "claude-code for Anna Schmidt". A script with an API token is a service.
- Through what, in words: "via the web", "via MCP", "via the API", "via the assistant, asked in words". On its own, when an agent did it by itself: "triage … on its own".
- When, as people read times: today's alone, older ones with their day, "Mon 9 Nov, 10:02". The ledger, AuditEntry, keeps the same to the second, in UTC.
- What it changed, a line for each field: "State: ~~Open~~ → **In Progress**", what it was struck through, what it became in `--changes`, at 650; "Fix versions: **2.4.1** added".
- A value an agent worked out is no change until a person accepts it. The history says both: "triage worked out 3 fields, for a person to accept", then "Anna Schmidt accepted 2 of them", with what changed.
- Comments sit in their place, framed, in the order things happened.
- A thread joins each mark to the next.

- A person named in a comment ("@anna") reads as their name, a link to them (`a.mention`), in `--accent` at 500.

**On a help desk request**, what the team says among itself and what it says to the person who asked are told apart:

- A public comment, which the requester sees on their page and gets by email, is framed in `--outside`, as what leaves for outside is, with its words beside who said it: a badge in `outside`, "public: sent to Jane Doe". What the requester wrote is public too, by them, "via the help desk", by the name they gave. An internal comment keeps the history's frame, and nothing more: internal is how a comment starts.
- The composer says which it's writing before anything is sent: a choice of two modes over it, "Internal note" and "Reply to Jane Doe", and under them, in a field's help, what that does ("Jane Doe gets it by email, and sees it on their request's page" or "Only the team sees it"). Its label and its button say it again: "A reply to Jane Doe", "Send to Jane Doe"; "Add the internal note".

**An agent acting as itself**, with a token of its own, goes by its id and its square, and acts for no one: "claude · via MCP", where an agent acting for a person says so ("claude-code for Anna Schmidt").

**What an agent changed on its own, a person can undo**, while nobody has changed it since:

- Its head ends with a quiet action, `button.history-undo`: "Undo", in `--accent`, at least 24px tall, named for whose change it is ("Undo claude's change"). It is there only for someone who may change the issue, and only while undoing it overwrites nobody; once someone changed what it changed, it isn't offered.
- Undone, the change keeps its place in the order things happened (`li.undone`): its lines in `--muted`, and an `idle` badge, "undone", whose title says who undid it. The undo follows as the change it is, by its person: "Anna Schmidt undid claude's change", with what it put back.
- What happened when it was asked says so under the change: "Undone: Priority as before", or, if someone changed it meanwhile, what changed since, as an error line.

**The composer** offers people after an "@" (`.composer`): those whose login or name starts with what's typed, in a popover under the field, from its start, each by their mark, name and login; the arrows choose, Enter or Tab takes one, as "@login ", and Escape puts them away. The field keeps the focus, points at the chosen one (`aria-activedescendant`), and a screen reader hears how many there are. It sits under the field, not at the caret: placing it there would take a style of its own, which pages under a strict CSP don't have.

**Takes:** `entries` (each `who` (`name`, `kind`), `for`, `via`, `at` (the moment, and as people read it), `did`, `changes` (each `{ field, from, to }` or `{ field, added }`), `comment`, `public` (`"reply"` or `"theirs"`), `undo` (`"possible"` with `onUndo`, or `"undone"` with who undid it)); and for the composer, `visibility` and `onVisibility` where there's a requester, and the people to offer.

**Markup:**

```html
<ol class="history">
  <li><span class="avatar agent small" aria-hidden="true"><!-- agent --></span><div class="history-body">
    <p class="history-head"><strong class="who-name">claude-code</strong> for Anna Schmidt · via MCP · <time datetime="2026-11-12T16:40">Thu 12 Nov, 16:40</time></p>
    <ul class="change-lines"><li><span class="change-field">State:</span> <del>Open</del> → <ins>In Progress</ins></li></ul>
    <div class="history-comment"><p>Reproduced it on a network throttled to 3G…</p></div>
  </div></li>
  <li><span class="avatar service small" aria-hidden="true"><!-- tool --></span><div class="history-body">
    <p class="history-head"><strong class="who-name">ci-release</strong> · via the API · <time datetime="2026-11-13T18:05">Fri 13 Nov, 18:05</time></p>
    <ul class="change-lines"><li><span class="change-field">Fixed in build:</span> <ins><span class="mono">2.4.1-rc.3</span></ins> <span class="same">added</span></li></ul>
  </div></li>
</ol>
```

```html
<li><span class="avatar agent small" aria-hidden="true"><!-- agent --></span><div class="history-body">
  <p class="history-head"><strong class="who-name">claude</strong> · via MCP · <time datetime="2026-11-16T10:12">10:12</time>
    <button type="button" class="history-undo" aria-label="Undo claude’s change">Undo</button></p>
  <ul class="change-lines"><li><span class="change-field">Priority:</span> <del>Normal</del> → <ins>Critical</ins></li></ul>
</div></li>
<li class="undone"><span class="avatar agent small" aria-hidden="true"><!-- agent --></span><div class="history-body">
  <p class="history-head"><strong class="who-name">workflow</strong> applied the rule “Critical work is urgent” · on its own · <time datetime="2026-11-16T10:13">10:13</time>
    <span class="badge idle" title="Anna Schmidt undid it"><!-- pause -->undone</span></p>
  <ul class="change-lines"><li><span class="change-field">Tags:</span> <ins>urgent</ins> <span class="same">added</span></li></ul>
</div></li>
<li><span class="avatar small" aria-hidden="true">AS</span><div class="history-body">
  <p class="history-head"><strong class="who-name">Anna Schmidt</strong> undid workflow’s change · via the web · <time datetime="2026-11-16T10:20">10:20</time></p>
  <ul class="change-lines"><li><span class="change-field">Tags:</span> <del>urgent</del> <span class="same">removed</span></li></ul>
</div></li>
```

```html
<li><span class="avatar small" aria-hidden="true">AS</span><div class="history-body">
  <p class="history-head"><strong class="who-name">Anna Schmidt</strong> · via the web · <time datetime="2026-11-16T09:02">09:02</time>
    <span class="badge outside">public: sent to Jane Doe</span></p>
  <div class="history-comment public"><div class="prose"><p>Thanks, Jane. <a class="mention" href="…">Ben Okafor</a> is resending them now.</p></div></div>
</div></li>

<form class="form">
  <div class="stack tight">
    <div class="modes" role="group" aria-label="Who sees this comment">
      <button type="button" aria-pressed="false">Internal note</button><button type="button" aria-pressed="true">Reply to Jane Doe</button></div>
    <p class="field-help" id="visibility-help">Jane Doe gets it by email, and sees it on their request's page.</p>
  </div>
  <div class="form-field"><label for="c">A reply to Jane Doe, as Anna Schmidt</label>
    <div class="composer">
      <textarea id="c" aria-describedby="visibility-help" aria-autocomplete="list" aria-controls="people" aria-activedescendant="people-0">… @be</textarea>
      <ul class="popover options" id="people" role="listbox" aria-label="People to mention">
        <li id="people-0" role="option" aria-selected="true"><span class="who"><span class="avatar small" aria-hidden="true">BO</span><span class="who-name">Ben Okafor</span></span><span class="option-kind mono">@ben</span></li>
      </ul>
      <span class="hidden" role="status">1 person to mention: up and down to choose, Enter to take one.</span>
    </div></div>
  <div class="cluster end"><button type="submit" class="primary">Send to Jane Doe</button></div>
</form>
```

**In a4a:** an issue's page, as its history and comments. The preview is a static rendition, and below it a help desk request's: a public reply, the requester's own, and the composer offering people.
