# EnvironmentBand

Which deployment this is, across the top of every page, in every product: so nobody does in production what they meant for a test, or the other way round.

- A band over the sidebar and the page (`.env-band`), 2rem high, that stays as the page scrolls. The sidebar sits below it. On a page before the frame, such as signing in, it's across the top of the window too.
- **Production** (`.production`): the change's colour, filled (`--changes`, with `--surface` words), since what's done there reaches people, and records others rely on. With the people icon.
- **A test, a staging, or someone's own machine**: the amber of what's written but not yet relied on, at its well (`--writes-bg`, with a `--writes` edge under it), with the tool's icon, or the code's on someone's own machine.
- It says the deployment's name, in bold, and what that means, in a few words: "Production. Real people and records: what you do here reaches them." "Pilot test. Made-up people and records: nothing here reaches anyone." The product chooses the words; the name is the deployment's own, as whoever runs it sets it.
- Every page, whoever's signed in: it's about where you are, not who you are. A product has no administrator's mode, and this isn't one.
- A landmark of its own (`section`, named "Which deployment this is"), so it's never content outside one, and a screen reader can go to it.
- A name too long for its line ends in an ellipsis rather than wrapping: the band stays one line high.

**Takes:** `kind`, one of `production`, `staging`, `test` or `development`; `name`; `about`, what it means here.

**Markup:**

```html
<section class="env-band production" aria-label="Which deployment this is">
  <svg class="icon" aria-hidden="true">…</svg>
  <strong>Production</strong>
  <span>Real people and records: what you do here reaches them.</span>
</section>
```

First in the page, before the sidebar: `body.app`'s first child, or its frame's, where a product draws its frame inside an element of its own that the page's grid passes through (`display: contents`), as a5s's studio does. **In a5s:** `A5S_ENVIRONMENT` names it, and both the studio and the plain pages draw it. The preview is a static rendition.
