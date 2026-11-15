# FlowNode

A step on a canvas, as workflow builders draw them: a5s's agents, a7c's skills, a3t's processes. It follows n8n's canvas, which has worked these out well, in Ocean's colours. Proposed.

- A square for each step, with its icon, and its name and what it does beneath, so names are never cut short.
- The icon takes the colour of what the step does: `--reads`, `--writes`, `--changes`, `--outside`, `--own`. Risk shows before anything runs, and the canvas stays calm.
- A trigger is rounded on its left, where nothing comes in.
- Steps join at a dot on each side, by curves in `--line-strong`. Where the last run went, the curves are `--good`. Where nothing goes on yet, a short line ends at a button to add the next step.
- How a step stood after the last run is in its corner: a tick on `--good` when it's done, a clock on `--warn` when it waits on someone, and a count on `--bad` for its problems, which a7c finds before the first run.
- The chosen step wears the focus ring. In a7c, the condition a step runs on ("when …") is a label on the curve into it, and a dashed curve in `--accent` shows what the chosen step's expressions read.
- An agent is wide, in the agent colour, with its name inside. Its model, the product's checks and its tools hang below it as circles, from slots along its foot, each tool's icon in the colour of what it does.

**Takes:** `icon`, `title`, `detail`, `tone`, `kind` (`trigger`, `step`, `agent`, `hanging`), `state`, `problems`, `chosen`, `last`.

**On:** React Flow (`@xyflow/react`), which a5s, a7c and a3t all draw their canvases with. The preview is a static rendition, placed by hand.
