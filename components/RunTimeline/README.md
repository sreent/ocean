# RunTimeline

A run as time: what started it and for whom, each step in order in the colour of what it did, what the product decided, and how it ended.

- Each step is a ring in its tone: what its tool does (`reads`, `writes`, `changes`, `outside`, `own`), or how it stood (`good`, `warn`, `bad`, `idle`).
- The time is in Plex Mono, `--faint`; today's time alone, to the second.
- Under each step, its detail in words: what it did, how long it took, and what it waits on. A coloured ring is never the only sign.
- A change held for a yes stays in `--changes`, and says who it waits on.
- In a7c, the same timeline is a run's steps; in a3t, a process instance's.

**Takes:** `steps`: each `at`, `tone`, `what` and `detail`.

**In a5s:** `studio/src/design/agentic.tsx`. The a7c run is proposed. The preview is a static rendition.
