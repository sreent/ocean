# FlowNode

A step on a canvas: a5s's map of how an agent is wired, a skill on a7c's builder, a process in a3t's designer. Proposed for the family, from a5s's map.

- Each step is a card with its icon, its name, and a line of what it does, striped on its left in the colour of what it does: `--reads`, `--writes`, `--changes`, `--outside`, `--own`.
- Agents' steps are in the agent colour. The product's checks are edged in `--own`.
- Edges take the colour of where they lead. An edge dashed is a step that reads another's result, as a7c draws it (`.uses`).
- The step someone has chosen wears the focus ring. A step with problems has a `--bad` edge, its stripe kept, and their count in a bubble on its corner.
- On a run's path, what the run used is bolder, what it didn't is faded, and refusals are counted in `--bad`.
- The canvas is `--sunken`, with a dot grid in `--line-strong`.

**Takes:** `icon`, `title`, `detail`, `tone`, `chosen`, `problems`, `calls`, `refused`, `dim`.

**In a5s:** `studio/src/AgentMap.tsx` on React Flow, which a7c and a3t use too. The preview is a static rendition, placed by hand.
