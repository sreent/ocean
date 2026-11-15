# FlowNode

A step on a canvas, as workflow builders draw them: a5s's agents, a7c's skills, a3t's processes. It follows n8n's canvas, which has worked these out well, in Ocean's colours. Proposed.

- A square for each step, with its icon, and its name and what it does beneath, so names are never cut short.
- The icon takes the colour of what the step does: `--reads`, `--writes`, `--changes`, `--outside`, `--own`. Risk shows before anything runs, and the canvas stays calm.
- A trigger is rounded on its left, where nothing comes in.
- Steps join at a dot on each side, by curves in `--faint`, 3 to 1 on the canvas. Where the last run went, the curves are `--good`. Where nothing goes on yet, a short line ends at a button to add the next step.
- How a step stood after the last run is in its corner: a tick on `--good` when it's done, a clock on `--warn` when it waits on someone, a cross on `--bad` when it failed, and a count on `--bad` for its problems, which a7c finds before the first run.
- What a run didn't use fades, a step its condition skipped among it, but its words stay readable, so why it didn't run can be read. A call the checks refused, or a tool that isn't the agent's, is `--bad`: its box, its curve and its words.
- The chosen step wears the focus ring. In a7c, the condition a step runs on ("when …") is a label on the curve into it, and a dashed curve in `--accent` shows what the chosen step's expressions read.
- An agent is wide, in the agent colour, with its name inside. Its model, the product's checks and its tools hang below it as circles, from slots along its foot, each tool's icon in the colour of what it does. Another agent hanging from it, such as one its instance may ask, is in the agent colour too, as `agent-tone`, since `agent` is the wide agent itself.

- Every canvas has its list, the same steps in order, for the keyboard and for a phone (FlowList). Canvas and List are a choice of views at the right of the canvas's foot.
- Every kind of node each product defines is drawn in FlowKinds, what a flow can do in FlowPatterns, and the parts someone adds in Picker.

**Takes:** `icon`, `title`, `detail`, `tone` (or `agent`, drawn as `agent-tone`), `kind` (`trigger`, `step`, `agent`, `hanging`), `state`, `problems`, `refused`, `dim`, `chosen`, `last`.

**On React Flow** (`@xyflow/react`), as a7c's builder and a5s's designer draw their canvases: load React Flow's `base.css`, never its `style.css`, and put `flow flow-canvas` on the canvas. Each node holds a step as above, and its handles take `at-left`, `at-right`, `at-top`, or an agent's `at-model`, `at-checks` and `at-tools`, so they sit where the dots are drawn. An edge takes `ran`, `hangs`, `refused`, `reads-from` or `dim`. Steps run left to right. The preview is a static rendition, placed by hand.
