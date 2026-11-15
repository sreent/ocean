# Badge

What a tool does, or how something stands, in the colour that means it.

- What a tool does: `reads`, `writes` (what nobody relies on yet, such as a draft), `changes` (a record), `outside` (across the organisation's edge, in or out), and `own` (the product's own doing).
- How something stands, with a dot: `good` (going well), `warn` (waiting on someone), `bad` (failed), `idle` (paused).
- Every badge carries its word ("changes due dates", "waiting on you"), so colour is never the only sign.
- A badge with no tone is a plain fact that needs no colour, such as "hands over billing". Chips (`.chip`) are plain facts beside badges: a model, a level.
- Coral is a change to a record or a failure, and nothing else.

**Takes:** `tone`, `dot`, and its word.

**In a5s:** `studio/src/design/controls.tsx`; the badges the studio draws for tools and states come from `studio/src/ui.tsx`. The preview is a static rendition.
