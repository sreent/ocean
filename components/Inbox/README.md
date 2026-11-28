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

## An update asked

Anyone who may change an issue can ask its assignee to confirm or change its dates and its progress; the assignee answers as themselves, from the inbox, by email or in chat, and the request closes when they answer or when they change what was asked (D72). Ocean draws the item in the inbox, the small form in place, and the issue's own mark. a4a supplies every word. Proposed, for a4a.

- **In the inbox**, it's a notification like any other, under its issue (`.inbox-group`): who asks and for what in its words (`.inbox-what`: "Anna Schmidt asks you to confirm its dates and the time left"), when, and what they wrote, as a comment is shown (`.history-comment`). Unread, it has the dot and the weight; it's always told, whatever the person chose to hear of.
- **The form in place** (`form.update-ask`), on a well (`--sunken`): the asked fields as they stand (`dl.update-now`: each field's name in `--muted`, its value in Plex Mono; the time left with what it's of, `.update-of`: "of 24h, 12h spent"), then **Confirm them**, the primary, and **Change them**. Changing (`fieldset.update-fields`, which Change them opens and gives the focus): a field for each asked value, typed as the sheet's cells are, with what a time left does beneath it (`.form-hint`: "Its estimate becomes 14h: 8h spent and 6h left."), then **Send the changes**, the primary, and Cancel, which gives the focus back to Change them. Refused, the field is `aria-invalid="true"` and why is said under the fields (`p.error-note`, `role="alert"`), which the field names.
- **Answered**: the form gives way to what was said, in its status line (`p.update-said`, `role="status"`, there and empty from the first render, so what lands in it is heard): a `good` badge with its tick, "Answered", and what they did ("You confirmed them." "You changed its due date at 16:20:"), then the change in its grammar (`.change-lines`). A request closed because the person changed the asked fields elsewhere says so the same way ("You changed its due date on the timeline.").
- **On the issue's side** (`section.card.side-card.update-asked`), for everyone who can see the issue: "Update asked" as its label; how it stands as a badge with its shape: waiting, `warn` with the clock and on whom ("Waiting on Ben Okafor"), answered, `good` with the tick, or withdrawn, `idle` with the pause; who asked whom, for what, and when, the names at 600 (`.who-name`); what they wrote (`.update-why`, edged in `--line`); and, while it waits, Ask again and Withdraw it, small, for those who may. Answered, what changed, in the grammar of a change. The issue's history keeps each step.
- Asking is a [Confirm](../Confirm/README.md)-sized `dialog.dialog` with ticks for the fields to ask about (dates, time left), the person asked (the assignee, chosen), and a message; nothing new to draw.

**Keyboard**: it's a form: Tab through its buttons and fields; Enter in a field sends; Change them is `aria-expanded` and `aria-controls` its fields; Escape in a field cancels. **What a screen reader hears**: the notification's words, then the form by its name ("Update MIG-7"), each value with its field's name, the buttons; a refusal from its note; the answer from the status line. **Touch**: its buttons and fields are 44px, as everywhere.

**Takes:** per notification of kind `update`: `asked` (`by`, `at`, `message`, `fields`: each `name`, `value`, and for the time left `spent` and `of`), `answer` (none, or `confirmed` or `changed` with its `changes`, `at`), `invalid` (a field and its words), `onConfirm`, `onChange`; on the issue's side, `requests` (each `by`, `of`, `fields`, `at`, `message`, `state` as `waiting`, `answered` or `withdrawn`, its `changes`), `onAskAgain`, `onWithdraw`.

**Markup:**

```html
<li class="unread"><span class="avatar small" aria-hidden="true">AS</span><div class="history-body">
  <p class="history-head"><span class="hidden">Unread: </span><strong class="inbox-what">Anna Schmidt asks you to confirm its dates and the time left</strong> · <time datetime="2026-11-16T10:14">10:14</time></p>
  <div class="history-comment"><div class="prose"><p>The racks arrive a day late. Does Wednesday still hold?</p></div></div>
  <form class="update-ask" aria-label="Update MIG-7">
    <dl class="update-now"><div><dt>Start date</dt><dd>23 Nov</dd></div><div><dt>Due date</dt><dd>25 Nov</dd></div><div><dt>Time left</dt><dd>12h<span class="update-of">of 24h, 12h spent</span></dd></div></dl>
    <!-- changing, in place of the values: -->
    <fieldset class="update-fields" id="ua7-fields"><legend class="hidden">MIG-7's dates and time left</legend>
      <div class="form-field"><label for="ua7-due">Due date</label><input id="ua7-due" type="text" value="25 Nov"></div>   <!-- refused: aria-invalid="true" aria-describedby="ua7-err" -->
      <div class="form-field"><label for="ua7-left">Time left</label><input id="ua7-left" type="text" value="12h" aria-describedby="ua7-hint"><p class="form-hint" id="ua7-hint">Its estimate becomes 24h: 12h spent and 12h left.</p></div>
    </fieldset>
    <div class="update-actions"><button type="submit" class="primary">Confirm them</button><button type="button" aria-expanded="false" aria-controls="ua7-fields">Change them</button></div>
    <p class="update-said" role="status"></p>                               <!-- answered: <span class="badge good">…Answered</span>You confirmed them. -->
  </form>
</div></li>

<section class="card side-card update-asked" aria-labelledby="ua-side">
  <h2 id="ua-side" class="label">Update asked</h2>
  <span class="badge warn"><svg class="icon" aria-hidden="true"><!-- clock --></svg>Waiting on Ben Okafor</span>
  <p><span class="who-name">Anna Schmidt</span> asked <span class="who-name">Ben Okafor</span> to confirm its dates and the time left · <time datetime="2026-11-16T10:14">today, 10:14</time></p>
  <p class="update-why">The racks arrive a day late. Does Wednesday still hold?</p>
  <div class="cluster"><button type="button" class="small">Ask again</button><button type="button" class="small">Withdraw it</button></div>
</section>
```

**In a4a:** the inbox's `update` notifications, and the issue page's side column while a request is open or after it closed. The preview's first three issues: one asked, one being changed and refused, one answered; and under the frame, the issue's side in each state.
