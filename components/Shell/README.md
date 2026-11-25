# Shell

The frame every page sits in: a sidebar of the pages someone may use, and the page beside it.

- The sidebar names the product, with its mark: the first two characters of its name on the accent square, and its name beside it. That mark and name are the only things that tell the products apart, and they lead to the product's home.
- Pages sit under four headings, the same in every product: Work, Build, Decide and Oversee. A heading with no page this person may use isn't shown. Home, what waits on whoever signed in, is the first page, under Work, and is called Home in every product. Under Build, the things someone builds are listed before the page that starts a new one, which is named for what it makes, such as New agent, so how to build one is never only a button on another page.
- The current page sits on `--accent-soft`, in `--accent`, at 600, with `aria-current="page"`.
- Who's signed in is at the foot: their initials, round, their name, and under it, in `--muted`, the roles they hold, in a few words, or that they hold none (`.me-who`: `.me-name`, `.me-roles`). A product has no administrator's mode to be in or out of: what the sidebar shows someone follows from those roles, and their own page says what each lets them do, and what gave it them. Their mark, name and roles are a link to that page (`.me > a`), and Sign out an icon button after it (`.me > button`, named by its `aria-label`).
- A page before the frame, such as signing in or setting up, is one card in the middle of the page: `body.lone` holding `main.card.lone-card` (Layout).
- The sidebar leaves out only the pages that would refuse someone. Each page still checks for itself who may use it.
- Under 760px the sidebar becomes a row of each page's icon, and screen readers still say each page's name. The foot keeps their initials alone, at the row's end, still the link to their own page, and screen readers still say who they are and their roles.
- A page's head: the way back as crumbs, its title as its one h1 with badges beside it, what it is in `--muted`, and its facts in a row.

**Takes:** the product's name; the pages this person may use, each with its heading, name, address and icon; who's signed in, and the roles they hold, in words; and the page.

**Markup:** `<body class="app">` with `aside.sidebar` (`.brand` with `.mark`, `nav` of `.group` headings and links, `.me` holding a link with `.avatar` and `.me-who`) and `.page` holding `main`. a5s builds it in `shell.js` from what its core says this person may use. A React `Shell` for a7c and a3t is proposed (`index.d.ts`).

The preview is a static rendition, drawn in a box rather than the whole window.
