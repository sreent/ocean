# NavList

A list of things to open, in a card beside the one that's open: your conversations with an agent, or a product's fields. Each is a link with its name and a line about it; the open one is chosen as the sidebar's current page is. Proposed.

- It sits in a page's side column, in a card padded less than a page's own (`.card.side-card`). Its heading says what's listed, or how many (`.nav-card`).
- Each line is a link: its name at 500 (`.nav-list-name`), and under it what it is and when, in `--muted` (`.nav-list-about`), with an issue's or a project's id as people quote it, and a badge where it waits on someone.
- The open one has `aria-current="page"`: on `--accent-soft`, in `--accent`, its name at 600. Under the pointer, a line is on `--sunken`.
- What's still going on says so in words beside a small turning mark (`.nav-list-busy`): "answering".
- A long list, such as conversations, scrolls in its card after 22rem (`.scrolls`); a short one, such as fields, shows whole.
- The page's own card beside it does the work; on a phone, that card comes first and the list after it.

**Takes:** nothing of its own: links in a list, in a card.

**Markup:**

```html
<nav class="card side-card nav-card" aria-label="Your conversations">
  <h2>Your conversations</h2>
  <ul class="nav-list scrolls">
    <li><a href="/assistant/c1" aria-current="page">
      <span class="nav-list-name">Take BACK-6 and start on it</span>
      <span class="nav-list-about"><span class="issue-id">BACK</span><span>12 minutes ago</span><span class="badge warn">…waiting on you</span></span></a></li>
    <li><a href="/assistant/c2">
      <span class="nav-list-name">Which critical bugs are open in BACK?</span>
      <span class="nav-list-about"><span>1 day ago</span><span class="nav-list-busy"><span class="spin" aria-hidden="true"></span>answering</span></span></a></li>
  </ul>
</nav>
```

**In a4a:** the assistant's conversations, beside the one you're in; and Fields, beside the field you're changing. The preview is a static rendition of both.
