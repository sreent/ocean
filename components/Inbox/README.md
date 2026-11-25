# Inbox

What reached someone, and why: issues assigned to them, mentions, a new help desk request in a project they lead, and changes and comments on issues they watch. By issue, the issue with the latest news first. Proposed, for a4a.

- **By issue.** Each issue is a framed group (`.inbox-group`): its id as people quote it, its summary as the link to it (`.inbox-summary`), how it stands as a badge, and its own Mark read, a small button at the line's end. An issue that's gone keeps its id and summary, in `--muted`, with a chip that says "deleted", and no link.
- **What happened** is the history's grammar (IssueHistory) under the issue: who did it by their mark, what it means to this person in words (`.inbox-what`), "Anna Schmidt mentioned you", "Ben Okafor assigned it to you", "claude-code for Anna Schmidt made 2 changes", when, as people read times, and under it the changes and what was said.
- **Changes close together are one.** Several events on one issue within a few minutes read as one notification: its words count them, and its changes are each field from what it was first to what it became last.
- **Unread** has a dot before its words, in `--accent`, and its words at 650; a screen reader hears "Unread:" first. Read, the words are at 400. The dot's colour is never the only sign: the weight is a second.
- **Mark read** marks what was shown and no more: a change that arrived after the page was drawn stays unread. Opening an issue from here marks its group read. "Mark all read" sits in the page's head. A choice of Unread or All sits over the list, as a choice of modes.
- **The count** beside the sidebar's link (`.nav-count`) is what's unread: `--accent-text` on `--accent`, at the line's end; on a phone, where the sidebar shows only icons, on the corner of the bell. Over 99 it reads 99+. With nothing unread there's no count at all. A screen reader hears it as part of the link: "Inbox 3 unread".
- **Live.** The count and the list change as notifications come, without a reload.

**Takes:** `issues`, each with `id`, `summary`, `href` (none once it's deleted), `state` and its notifications (`who`, `what`, `at`, `unread`, `changes`, `said`); and the count for the sidebar.

**Markup:**

```html
<a href="/inbox" aria-current="page"><svg class="icon" aria-hidden="true"><!-- bell --></svg><span>Inbox</span>
  <span class="nav-count">3<span class="hidden"> unread</span></span></a>

<ol class="inbox" aria-label="Unread, by issue">
  <li class="inbox-group">
    <div class="inbox-issue">
      <span class="issue-id" aria-hidden="true">BACK-12</span>
      <a class="inbox-summary" href="/issues/BACK-12"><span class="hidden">BACK-12: </span>Login fails on hotel Wi-Fi</a>
      <span class="badge warn"><svg class="icon" aria-hidden="true"><!-- clock --></svg>In Review</span>
      <button type="button" class="small">Mark read<span class="hidden"> BACK-12</span></button>
    </div>
    <ol class="history">
      <li class="unread"><span class="avatar small" aria-hidden="true">AS</span><div class="history-body">
        <p class="history-head"><span class="hidden">Unread: </span><strong class="inbox-what">Anna Schmidt mentioned you</strong> · <time datetime="2026-11-16T10:02">10:02</time></p>
        <div class="history-comment"><div class="prose"><p>…<a class="mention" href="…">Ada Admin</a>, could you check it?</p></div></div>
      </div></li>
      <li class="read">…</li>
    </ol>
  </li>
  <li class="inbox-group deleted"><div class="inbox-issue"><span class="issue-id">WEB-3</span><span class="inbox-summary">Old banner experiment</span><span class="chip">deleted</span>…</div>…</li>
</ol>
```

On a touch screen an issue's summary, a link, grows its target to 44px without changing its look, as an issue list's does.

**In a4a:** Inbox, under Work, and its count in the sidebar. The preview is a static rendition, in the frame.
