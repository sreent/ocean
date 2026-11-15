# GateList

What a promotion or a change request must pass before it goes on: each check with its state, what it checks, and who or what it waits on. Proposed.

- One row per check: its state as a badge with its shape (passed, failed, waiting, running), or a plain one (not needed), its name at 600, and a line of what it found or waits on.
- Waiting names who: "Waiting on Lena Park, owner of procurement".
- Failed says what failed, never just "failed": "2 of 40 fail: expense-limits".
- Put it on a promotion (a7c), a change request (a3t) or a draft's release (a5s's "what stops its release"), above the one thing to do.

**Takes:** `gates` (each `name`, `about`, `state`) and `label`.

The preview is a static rendition of the proposed piece.
