# RunTimeline

A run as time: what started it and for whom, each step in order in the colour of what it did, what the product decided, and how it ended.

- Each step is a ring in its tone: what its tool does (`reads`, `writes`, `changes`, `outside`, `own`), or how it stood (`good`, `warn`, `bad`, `idle`).
- The time is in Plex Mono, `--faint`; today's time alone, to the second.
- Under each step, its detail in words: what it did, how long it took, and what it waits on. A coloured ring is never the only sign.
- A change held for a yes stays in `--changes`, and says who it waits on.
- In a7c, the same timeline is a run's steps; in a3t, a process instance's.

**Takes:** `steps`: each `at`, `tone`, `what` and `detail`.

**In a5s:** `studio/src/design/agentic.tsx`. The a7c run is proposed. The preview is a static rendition.

**In a4a:** a run inside the assistant's conversation is the agent's card (`.run-card`), a phone's width at most, its thread drawn the whole length of each step. A step still going turns where its ring would be (`.spin`). Each step's tool is in mono, then what it did, with its issue's id (`.step-what`); under it, what its tool does as a badge, how it stands (waiting on you, failed, you declined it), what's worth knowing ("can overwrite"), and how long it took in mono (`.step-took`).
