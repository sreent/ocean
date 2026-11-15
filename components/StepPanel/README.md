# StepPanel

A step of a7c's skill, opened: what came in, its settings, and what went out, side by side, from the last test, as n8n opens a node. A showcase page, proposed.

- On the left, what came into the step in the last test; on the right, what went out. Values are in Plex Mono, as data people compare.
- In the middle, the step's settings, in a7c's own words: its connector and operation, its connection reference (which each tier binds to a connection of the organisation), the condition it runs only when, and its input, one expression of CEL for each field.
- Each expression shows a chip for what it reads, in `--accent`, and what it gave in the last test, so a person sets a step with its data in view.
- A step that changes a record says plainly who decides in production: here, a person approves each order before it's placed.
- The one thing to do is Run the tests; Back to the canvas sits beside it.

The words are a7c's own (`apps/web/src/messages.ts`). The preview is a static rendition, at a desktop's size.
