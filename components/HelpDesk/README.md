# HelpDesk

A help desk's pages, for people outside the team: a form to ask for help, which needs no sign-in, the page after it, and a page for each request, where its requester follows the team's replies and answers them. Proposed, for a4a.

- **Lone pages.** Each is one card in the middle of the page, as signing in is (Layout): `body.lone` holding `main.card.lone-card`, wide enough for a conversation (`.wide`, 42rem at most). Nothing of the product's frame: the person isn't one of its users.
- **Whose help desk** is said first, in the label style: "Backend platform · help desk". Then the page's one h1: "Ask Backend platform for help", or the request's own summary with how it stands as a badge (resolved, a tick in `--good`; otherwise a plain fact).
- **The form** is Ocean's form: their name and email side by side where there's room, what it's about, and the details, each field saying what it's for. The project's own words sit above it, as prose. A field for bots sits off the page (`.hidden`) and out of reach (`aria-hidden`, `tabindex="-1"`), named "Leave this empty".
- **After sending**, the page says what happens next in plain words: where the link went. Where the product sends no email, it shows the link once instead, with Copy, and says it's the only way back.
- **A request's page** is the history's grammar (IssueHistory), for one person: what they asked, as "You asked", then each public reply by the person who wrote it, and their own as "You". Nothing internal is ever on it. Their reply field is under it, saying whether email will tell them of the next reply.
- **Nothing leads inside.** Issue ids and people's names in what the team wrote stay as written: a link into the product means nothing to someone who can't sign in.

**Takes:** the project's `name`, `intro`; for a request, `summary`, `state` (`name`, `resolved`), `asked` (`at`, `text`), `messages` (each `from: "you" | "team"`, `name`, `at`, `text`) and whether email will tell them.

**Markup:**

```html
<body class="lone">
  <main class="card lone-card wide stack">
    <p class="label">Backend platform · help desk</p>
    <div class="title-row"><h1>I can't reset my password</h1><span class="badge">Open</span></div>
    <p class="note">You asked on <time datetime="2026-11-16">16 Nov 2026</time>, as Jane Doe (jane@example.org).</p>
    <ol class="history" aria-label="Your request, and the replies to it">
      <li><span class="avatar small" aria-hidden="true">AS</span><div class="history-body">
        <p class="history-head"><strong class="who-name">Anna Schmidt</strong> replied · <time datetime="2026-11-16T09:02">09:02</time></p>
        <div class="history-comment"><div class="prose"><p>Thanks, Jane. We found it…</p></div></div>
      </div></li>
    </ol>
    <form class="form">
      <div class="form-field"><label for="reply">Your reply</label><textarea id="reply" aria-describedby="reply-help"></textarea>
        <small class="field-help" id="reply-help">We'll email you when the team replies.</small></div>
      <div class="cluster end"><button type="submit" class="primary">Send the reply</button></div>
    </form>
  </main>
</body>
```

The team's side, where a comment is internal or public, is IssueHistory's.

**In a4a:** `/help/<KEY>`, a project's form, and `/request#<token>`, a request's page. The preview is a static rendition of the form, the page after it and a request's page.
