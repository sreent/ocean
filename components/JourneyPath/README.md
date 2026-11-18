# JourneyPath

The way from a draft to work, as a path: each stage done, the one to do now, or later, who does it, and the one thing to do next.

- Done stages are ticked in `--good`; the one to do now is filled with `--accent`; later ones are numbered, their names in `--muted`.
- Each stage says what it needs and who does it, in a line under its name.
- The one thing to do next is the primary button under the path, and takes someone straight to it.
- The stages sit side by side where there's room for them, else one above the next, by container query.
- Each product's way to work is a path: a5s's draft to an agent at work; a7c's draft up its tiers; a3t's working copy to Prod.

**Takes:** `stages` (each `name`, `about`, `state`), `next` and `label`.

**In a5s:** `studio/src/design/agentic.tsx`. The a7c and a3t paths are proposed. The preview is a static rendition.

**In a3t:** a form in steps is a path too (`apps/studio/src/screens/Use.tsx`): each section a stage, named by its title, with the fields it asks for under it. The step to fill in now is filled with `--accent`, and the steps done are ticked. The one thing to do is Next, named by the next step, or Submit on the last; Back sits before it. Each step is checked before the next, and the server checks all of it again.
