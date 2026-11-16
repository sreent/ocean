# Shell

The frame every page sits in: a sidebar of the pages someone may use, and the page beside it.

- The sidebar names the product, with its mark: the first two characters of its name on the accent square, and its name beside it. That mark and name are the only things that tell the products apart.
- Pages sit under four headings, the same in every product: Work, Build, Decide and Oversee. A heading with no page this person may use isn't shown.
- The current page sits on `--accent-soft`, in `--accent`, at 600, with `aria-current="page"`.
- A link may carry a count at its line's end (`.nav-count`), such as what's unread in a4a's inbox: `--accent-text` on `--accent`, as wide as its number. On a phone it sits on the corner of the page's icon. With nothing to count there's no count, and a screen reader hears it as part of the link: "Inbox 3 unread" (Inbox).
- Who's signed in is at the foot: their initials, round, and their name. Their mark and name can be a link to their own page (`.me > a`), and Sign out an icon button after it (`.me > button`, named by its `aria-label`).
- A page before the frame, such as signing in or setting up, is one card in the middle of the page: `body.lone` holding `main.card.lone-card` (Layout).
- The sidebar leaves out only the pages that would refuse someone. Each page still checks for itself who may use it.
- Under 760px the sidebar becomes a row of each page's icon, and screen readers still say each page's name.
- A page's head: the way back as crumbs, its title as its one h1 with badges beside it, what it is in `--muted`, and its facts in a row.

**Takes:** the product's name; the pages this person may use, each with its heading, name, address and icon; who's signed in; and the page.

**Markup:** `<body class="app">` with `aside.sidebar` (`.brand` with `.mark`, `nav` of `.group` headings and links, `.me`) and `.page` holding `main`. a5s builds it in `shell.js` from what its core says this person may use. A React `Shell` for a7c and a3t is proposed (`index.d.ts`).

The preview is a static rendition, drawn in a box rather than the whole window.
