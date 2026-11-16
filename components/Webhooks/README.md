# Webhooks

Where a product sends each change as it happens, signed, so other systems can act on it: each address in a card of its own, what it sends and how it stands, its test and its log; and how deliveries work, as terms over what each says. Proposed.

- **Each address** is a card in a list (`ul.hooks`, `li.card.hook`), flat on its section: its address in mono (`.hook-url`), and under it what it sends, from where, and when it was added, in `--muted` (`.hook-what`). How it stands is a badge at the head's end: sends, or paused (`.hook-head`).
- **Its actions** follow in a row: Send a test, Pause it, and Show its deliveries; Delete it goes to the row's end, and asks first (Confirm).
- **What happened** is said under the actions: "The test arrived." (an outcome), or an error note when it didn't.
- **Its log** (`.hook-log`) is a table of its latest deliveries: when, the event and its id in mono, how it went as a badge (delivered, 200; failed, 500) with the error under it, which try it was, and how long it took.
- **How deliveries work** is a list of terms (`dl.facts-list`): each term at 600, and what it means under it in `--muted`, its headers in mono on `--text`.
- A new address's secret is shown once, as AgentSetup shows a token.

**Takes:** nothing of its own: these are classes, on Ocean's card, badges, buttons, table and Confirm.

**Markup:**

```html
<ul class="hooks">
  <li class="card hook">
    <div class="hook-head">
      <div class="hook-what"><span class="mono hook-url">https://ci.example.com/a4a</span>
        <span class="item-about">When an issue is created, or an issue changes · in every project · added 2 hours ago</span></div>
      <span class="badge good">…sends</span>
    </div>
    <div class="cluster"><button type="button">Send a test</button><button type="button">Pause it</button>
      <button type="button" class="link" aria-expanded="true">Hide its deliveries</button><span class="grow"></span><button type="button" class="danger small">Delete it</button></div>
    <p class="outcome" role="status">The test arrived.</p>
    <div class="hook-log"><h3>Recent deliveries</h3><div class="figures-scroll" …><table class="figures">…</table></div></div>
  </li>
</ul>

<dl class="facts-list">
  <div class="pair"><dt>Signed</dt><dd><code>X-A4A-Signature: sha256=…</code>: an HMAC-SHA256 of the raw body, with the webhook's secret.</dd></div>
</dl>
```

**In a4a:** Webhooks; and Integrations, where deliveries come in from GitHub and GitLab, in the same cards: each integration's webhook URL, a secret shown once, its test, and what each delivery did. The preview is a static rendition.
