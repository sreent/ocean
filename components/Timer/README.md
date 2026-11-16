# Timer

A person's timer on an issue: start, pause, stop, and the time it has counted, which becomes a work item when it's stopped. One runs at a time per person. Proposed, for a4a (D43), where it sits in an issue's Time spent.

- **The time** (`.timer-time`) in hours, minutes and seconds, in mono with tabular figures so it doesn't jitter; in `--accent` while it runs (`.timer.running`). Its ticking isn't read out: what changes is said in words beside it (`.note`): "Running", "Paused", or where your timer is now ("Your timer is on BACK-12").
- **Its buttons:** Start timer, or Pause / Resume; Stop and log, the primary one, which logs what it counted, with the work type chosen in the form beside it; and Discard, quiet (`.link`), which logs nothing.
- It's a group (`role="group"`, "Your timer"), so its buttons are heard as one control's.

**Takes:** `seconds`, `running`, `elsewhere` (the issue your running timer is on, if not this one), `onStart`, `onPause`, `onStop`, `onDiscard`.

**Markup:**

```html
<section class="card stack" aria-labelledby="time">
<div class="cluster"><h2 id="time" class="grow">Time spent</h2><span class="note"><span class="mono">3h 20m</span> of <span class="mono">2d</span> estimated</span></div>
<div class="timer running" role="group" aria-label="Your timer"><span class="timer-time">0:42:07</span><span class="note">Running</span><button type="button">Pause</button><button type="button" class="primary">Stop and log</button><button type="button" class="link">Discard</button></div>
<div class="timer" role="group" aria-label="Your timer"><span class="timer-time">1:05:00</span><span class="note">Paused</span><button type="button">Resume</button><button type="button" class="primary">Stop and log</button><button type="button" class="link">Discard</button></div>
<div class="timer" role="group" aria-label="Your timer"><span class="timer-time">0:00:00</span><span class="note">Your timer is on BACK-12</span><button type="button">Start timer</button></div>
</section>
```
