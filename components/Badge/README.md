# Badge

What a tool does, or how something stands, in the colour that means it.

- What a tool does: `reads`, `writes` (what nobody relies on yet, such as a draft), `changes` (a record), `outside` (across the organisation's edge, in or out), and `own` (the product's own doing).
- How something stands, with its shape before its word: a tick for `good` (going well), a clock for `warn` (waiting on someone), a cross for `bad` (failed), a pause for `idle` (paused). The shape tells them apart where colour can't, as for colour-blind readers.
- Every badge carries its word ("changes due dates", "waiting on you"), so colour is never the only sign.
- A badge with no tone is a plain fact that needs no colour, such as "hands over billing". Chips (`.chip`) are plain facts beside badges: a model, a level.
- Coral is a change to a record or a failure, and nothing else.

**Takes:** `tone`, `shape`, and its word.

**In a5s:** `studio/src/design/controls.tsx`; the badges the studio draws for tools and states come from `studio/src/ui.tsx`. The preview is a static rendition.
