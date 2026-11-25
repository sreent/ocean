# AppFrame

An app's widget on a page (a4a's apps, D48): someone else's code, drawn in a frame of its own, sandboxed, and named as an app's, so nobody takes it for the page. Proposed, for a4a.

- **The head** (`.app-frame-head`) names the widget and its app: the widget's title as the card's heading, and beside it a badge that says it's an app's (`.badge`, "App"), with the app's name under the pointer and to a screen reader ("Time by person, an app").
- **The frame** (`.app-frame iframe`) fills the card's width, without a border of its own, and takes the height the widget asks for, between 80 and 800 pixels, as the page allows. Its title is the widget's, so a screen reader names what it enters. It's sandboxed: scripts and forms, no origin of its own, no reaching the page.
- **What it said** (`.app-frame-said`, a status line) is where a widget's words go: text only, the page's type, so a widget can't dress a message up as the page's.
- **An ask** (`.app-frame-ask`) is how a widget moves the page: it asks, and the page says what it wants to open and who asks, with a button to open it and one to stay. It never navigates on its own.
- **When it can't load**, the card says so in the page's words (`.error-line`), with the app's name: whoever installed it knows what to look at.

In the admin's list of apps, an app's card (`.app-card`) has its icon, title, version and vendor, what it may do as a plain list of permissions in the words its consent showed, and where it runs.

**Takes:** `app`, `title`, `src`, `height`; `said`, `ask` (`{ to, onOpen, onStay }`).

**Markup:**

```html
<section class="card app-frame" aria-labelledby="w-title">
  <div class="app-frame-head">
    <h2 id="w-title">Time by person</h2>
    <span class="badge" title="Time by person is an app">App<span class="hidden">: Time by person, an app</span></span>
  </div>
  <iframe title="Time by person" src="…" sandbox="allow-scripts allow-forms" height="160"></iframe>
  <p class="app-frame-said" role="status">2h 30m in all.</p>
  <div class="app-frame-ask" role="group" aria-label="Time by person asks">
    <p>Time by person asks to open <strong>BACK-14</strong>.</p>
    <div class="cluster"><button type="button" class="small primary">Open it</button><button type="button" class="small">Stay here</button></div>
  </div>
</section>
```

**In a4a:** an issue's side column and below its summary, a project's page, an article's side, a dashboard, and a page of its own from the main menu. The preview is a static rendition.
