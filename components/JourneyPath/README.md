# JourneyPath

The way from a draft to work, as a path: each stage done, the one to do now, or later, who does it, and the one thing to do next.

- Done stages are ticked in `--good`; the one to do now is filled with `--accent`; later ones are numbered, their names in `--muted`.
- Each stage says what it needs and who does it, in a line under its name.
- The one thing to do next is the primary button under the path, and takes someone straight to it.
- The stages sit side by side where there's room for them, else one above the next, by container query.
- Each product's way to work is a path: a5s's draft to an agent at work; a7c's draft up its tiers; a3t's working copy to Prod.

**Takes:** `stages` (each `name`, `about`, `state`), `next` and `label`.

**In a5s:** `studio/src/design/agentic.tsx`. The a7c and a3t paths are proposed. The preview is a static rendition.
