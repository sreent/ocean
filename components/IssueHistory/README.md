# IssueHistory

An issue's history, in the ledger's spirit: who did each thing, for whom and through what, when, and what it changed, in the grammar of a change; comments in their place. Proposed.

- Who, by their mark: a person round, an agent its lagoon square, a service its slate one. An agent goes by its lower-case id ("triage", "claude-code", "assistant"), and acting for a person says so: "claude-code for Anna Schmidt". A script with an API token is a service.
- Through what, in words: "via the web", "via MCP", "via the API", "via the assistant, asked in words". On its own, when an agent did it by itself: "triage … on its own".
- When, as people read times: today's alone, older ones with their day, "Mon 9 Nov, 10:02". The ledger, AuditEntry, keeps the same to the second, in UTC.
- What it changed, a line for each field: "State: ~~Open~~ → **In Progress**", what it was struck through, what it became in `--changes`, at 650; "Fix versions: **2.4.1** added".
- A value an agent worked out is no change until a person accepts it. The history says both: "triage worked out 3 fields, for a person to accept", then "Anna Schmidt accepted 2 of them", with what changed.
- Comments sit in their place, framed, in the order things happened.
- A thread joins each mark to the next.

**Takes:** `entries` (each `who` (`name`, `kind`), `for`, `via`, `at` (the moment, and as people read it), `did`, `changes` (each `{ field, from, to }` or `{ field, added }`), `comment`).

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

**In a4a:** an issue's page, as its history and comments. The preview is a static rendition.
