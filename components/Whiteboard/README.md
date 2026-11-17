# Whiteboard

A team's canvas beside its issues: sections that group what lies in them, notes in a tone, text, issue and article cards, and arrows between them; who is looking; and its outline, the same elements as a list in reading order. Proposed; a4a draws it (D58).

- **It's SVG drawn from attributes alone** (`x`, `y`, `width`, `height`, `transform`, a path's `d`, the `viewBox`) and styled by classes, so it runs under a policy with no inline style. Pan and zoom are the `viewBox`. What a note, a text or a card says is HTML inside a `foreignObject`, which takes the same attributes, so it wraps as text does.
- **A note's tone is a meaning, never a colour**: plain on `--surface`; an idea in `writes` (what nobody relies on yet); agreed in `good`; a question in `warn` (waiting on someone); a problem in `bad`; parked in `idle`. Each sits on its `-bg`, with a band in its tone along its top and a badge with its word, so colour is never the only sign. The palette stays closed.
- **A section** is a frame on `--page` edged in `--line-strong`, its title on its top edge in `--muted`, drawn under everything. What lies in it is what its centre lies in.
- **A card** shows an issue as its reader may see it now: its id in mono and `--muted`, its summary at 600 (two lines at most), its state as a Badge and its assignee as a person or an agent. A resolved one's summary turns `--muted`. A card its reader may not see, for whatever reason (limited to others, a project they aren't in, deleted), is dashed in `--line-control` on `--sunken`, with one line saying so, the same for every reason: nothing of what it holds is drawn, nor sent.
- **An arrow** is a line in `--faint`, as a canvas's edges are, with its head. One made into a link between its issues is in ink, with the link's words. Its label sits on it in a pill. A wide, unseen stroke (`.whiteboard-arrow-hit`) is what a pointer takes.
- **Chosen and focused:** each element is a `g` the keyboard reaches (`tabindex="0"`, `role="button"`, `aria-pressed` for chosen), in reading order. Its `.whiteboard-ring` is drawn 4 units off it: `--accent` when it's chosen, `--focus` when the keyboard is on it, dashed `--accent` where a new arrow starts.
- **The outline** (`.whiteboard-outline`) is what screen readers read, and where a narrow screen starts: sections, each with what lies in it, then what lies in none, then the arrows (from what, to what, with their words). Each row is a button that chooses its element on the canvas too, pressed while it's chosen. Beside the canvas where there's room (`.with-outline`), under it where it's narrow (a container query at 44rem).
- **Who is looking** is a row of people and agents (`.whiteboard-viewers`), each by their mark and name.

**Takes:** `label`, `items` (each `kind`: `note`, `text`, `section`, `issue`, `article` or `arrow`, with `x`, `y`, `w`, `h`; a note's `text` and `tone`; a section's `title`; a card's `card`, or null; an arrow's `from`, `to`, `label` and `linked`), `viewBox`, `chosen`, `viewers`, `outline`, `words`.

**Markup:**

```html
<section class="whiteboard" aria-labelledby="wb-title">
  <div class="whiteboard-tools" role="toolbar" aria-label="Whiteboard">
    <button type="button">Add a note</button> <button type="button">Connect</button> <button type="button">Make issues</button>
    <div class="modes" role="group" aria-label="Zoom"><button type="button">−</button><button type="button">100%</button><button type="button">+</button></div>
    <button type="button" aria-pressed="true">Outline</button>
  </div>
  <ul class="whiteboard-viewers" aria-label="Looking now"><li><span class="avatar small" aria-hidden="true">AS</span>Anna Schmidt</li></ul>
  <div class="whiteboard-body with-outline">
    <div class="whiteboard-frame">
      <svg class="whiteboard-canvas" viewBox="0 0 1200 760" role="group" aria-label="Q3 planning, 6 elements">
        <defs><pattern id="wb-dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle class="whiteboard-dot" cx="1" cy="1" r="1"/></pattern>
          <marker …/></defs>
        <rect x="-100000" y="-100000" width="200000" height="200000" fill="url(#wb-dots)"/>
        <g class="whiteboard-element whiteboard-section" transform="translate(40 40)" tabindex="0" role="button" aria-pressed="false" aria-label="Section: Ideas, 3 elements">
          <rect class="whiteboard-ring" x="-4" y="-4" width="528" height="368" rx="12"/>
          <rect class="whiteboard-box" width="520" height="360" rx="10"/>
          <text class="whiteboard-section-title" x="14" y="24">Ideas</text>
        </g>
        <g class="whiteboard-element whiteboard-note writes" transform="translate(64 72)" tabindex="0" role="button" aria-pressed="true" aria-label="Note, idea: Cache the session">
          <rect class="whiteboard-ring" x="-4" y="-4" width="208" height="148" rx="8"/>
          <rect class="whiteboard-box" width="200" height="140" rx="6"/>
          <rect class="whiteboard-band" width="200" height="6" rx="3"/>
          <foreignObject width="200" height="140"><div xmlns="http://www.w3.org/1999/xhtml" class="whiteboard-words"><span class="badge writes">Idea</span>Cache the session</div></foreignObject>
        </g>
        <g class="whiteboard-element whiteboard-card" transform="translate(300 72)" tabindex="0" role="button" aria-pressed="false" aria-label="Issue BACK-12: Login is slow, In Progress, Anna Schmidt">
          <rect class="whiteboard-ring" …/><rect class="whiteboard-box" width="240" height="112" rx="10"/>
          <foreignObject width="240" height="112"><div xmlns="http://www.w3.org/1999/xhtml" class="whiteboard-card-body">
            <span class="whiteboard-card-id">BACK-12</span><span class="whiteboard-card-summary">Login is slow</span>
            <span class="whiteboard-card-facts"><span class="badge">In Progress</span><span class="who"><span class="avatar small">AS</span><span class="who-name">Anna Schmidt</span></span></span>
          </div></foreignObject>
        </g>
        <g class="whiteboard-element whiteboard-card hidden-card" …><rect class="whiteboard-box" …/><foreignObject …><div class="whiteboard-card-body">Hidden: you can't see what this card holds</div></foreignObject></g>
        <g class="whiteboard-element whiteboard-arrow linked" tabindex="0" role="button" aria-pressed="false" aria-label="Arrow from Cache the session to BACK-12, linked: relates to">
          <path class="whiteboard-arrow-hit" d="M264 142 L296 128"/><path class="whiteboard-ring" d="…"/>
          <path class="whiteboard-arrow-line" d="M264 142 L296 128"/><path class="whiteboard-arrow-head" d="M296 128 l-11 -5 v10 z" transform="rotate(-24 296 128)"/>
          <foreignObject x="200" y="122" width="160" height="24"><div xmlns="http://www.w3.org/1999/xhtml" class="whiteboard-arrow-label"><span>relates to</span></div></foreignObject>
        </g>
      </svg>
    </div>
    <nav class="whiteboard-outline" aria-labelledby="wb-outline">
      <h2 id="wb-outline">Outline</h2>
      <ol>
        <li><button type="button" class="whiteboard-row" aria-pressed="false"><svg class="icon" …/><span class="whiteboard-row-text"><span class="whiteboard-row-kind">Section</span><span class="whiteboard-row-words">Ideas</span></span></button>
          <ol><li><button type="button" class="whiteboard-row" aria-pressed="true">…Note, idea · Cache the session…</button></li></ol></li>
      </ol>
    </nav>
  </div>
</section>
```

Draw in this order, so each sits on the last: the dots; sections; arrows; then notes, text and cards by their stacking order. The keyboard's order is the outline's, which a page keeps in its `tabindex` order: the element `g`s in reading order where they don't overlap, or each `g`'s focus handed on by the page.

**In a4a:** a project's whiteboards (D58). The preview is a static rendition of a planning whiteboard: a section of ideas, a note of each tone, an issue card and a hidden one, and an arrow made into a link.
