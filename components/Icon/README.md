# Icon

Lines on a 24-unit square, in the colour of the text they sit in.

- Stroke 1.8, round caps and joins, no fill, `currentColor`. 1.15rem in the sidebar, 0.9 to 1.1rem in marks and badges.
- The agent's mark is for agents alone. The shield with a tick (`audit`) is for what's signed and kept in the ledger, and for the product's own messages. The tool is for tools and services.
- Always beside words, or hidden from screen readers in a mark whose words are near it (`aria-hidden`).
- No icon font and no emoji. A new icon is drawn the same way, on the same square.

**Takes:** `name` and `className`.

**In a5s:** `studio/src/icons.tsx` and `shell.js`. The files are in `icons/`.
