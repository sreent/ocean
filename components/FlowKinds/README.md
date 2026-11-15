# FlowKinds

Every kind of node a canvas draws for a7c and a5s, each as FlowNode draws it. The set is small and closed: it comes from each product's own definitions, a7c's workflow format (`packages/workflow-kit`) and a5s's agent definition (`src/a5s/definitions.py`). A showcase card, proposed.

- a7c's runs start three ways: a schedule, a webhook, or a connector's event.
- a7c's steps are six kinds: an operation of a7c's own modules, a connector's operation, a sync into the world model, a wait, a model, and code in the sandbox. They run in order, and each can carry a condition it runs only when.
- a5s's runs start six ways: a message, a schedule, what people owe, reminders, a report, and a long task.
- a5s's agent hangs what it works with from three slots: its model, a5s's checks, and its tools. a5s's own tools hang as one, and a tool a run called that isn't the agent's is refused.
- A connector is one kind, whichever system it reaches. Its logo stays small and in one ink, and its icon takes the colour of its operation.
- A step's icon takes the colour of what it does: an operation's or a connector's, its operation's risk; a sync reads. A wait, a model and code do nothing outside the run, so they stay neutral, but a model whose provider is outside the organisation is `--outside`.

A new kind comes from a product's definitions, never from a canvas alone, and Ocean draws it here before a product does.
