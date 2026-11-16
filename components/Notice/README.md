# Notice

A word about the app itself, above every page: that it's offline, or that a new version of it is ready. Not about the page's work, which says what it has to say where it happens.

- A strip across the top of the page, under the bar of pages, at `--text-sm`, with a `--line` under it.
- Offline: `--sunken` and `--muted`, with the sync icon: out of the app's hands, so nothing to press. What the person sees may be out of date, and the app catches up when it's back.
- A new version ready: `--accent-soft` behind `--text`, and the one button that takes it ("Reload") at the strip's end. Never a dialog, never by itself: the person finishes what they're doing first.
- Both may show at once, offline first.
- It's a status (`role="status"`), so a screen reader hears it when it comes, without moving the focus.
- On a phone it keeps clear of the screen's rounded corners, as the page does (Shell).

**Takes:** whether the app is offline; whether a new version waits, and what takes it.

**In a4a:** the installed app's (its D47): `Shell` draws `.app-notices` inside `.page`, before `main`, while either holds.

```html
<div class="app-notices">
  <p class="app-notice offline" role="status"><svg class="icon" aria-hidden="true">…</svg><span>You're offline. What's here may be out of date, and a4a catches up when you're back.</span></p>
  <p class="app-notice" role="status"><span>A new version of a4a is ready.</span><button type="button" class="small">Reload</button></p>
</div>
```
