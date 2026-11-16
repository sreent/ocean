# AttachmentList

Files on something: an issue, a comment or an article. Each is a row with its picture or its kind, its name, its size, who added it and when; files on their way show how far they've come; and a place to drop more is dashed, as what isn't there yet is. Proposed.

- An image (PNG, JPEG, GIF or WebP) shows as its own thumbnail, which opens it. Any other file, SVG and HTML among them, shows the attach mark and its kind from its name ("LOG", "PDF") in Plex Mono, and downloads: nothing anyone uploads runs in the page.
- The name is the link, at 500. Under it, in `--muted`: its size as people read sizes ("120 KB"), who added it by their mark (a person, an agent or a service, as Who draws them) and when, as people read times.
- Deleting asks first, with Confirm in the row's own actions (`button.small`): "Delete report.log?", and that nobody can bring it back. Only who may delete it sees the button.
- A file on its way is a row with a bar of how far it has come, in `--accent` on `--sunken`, and its words beside it ("1.2 MB of 3 MB"), never the bar alone; Stop beside it. One that failed says why, as an error note under its name, which turns `--muted`.
- More files go in by dropping them on the dashed place, or with its button, which opens the browser's own picker (a real button, so the keyboard reaches it; the file input itself is `hidden`). Under a file dragged over it, the place is solid, in `--accent` on `--accent-soft`. Its note says what may go.
- Beside the section's heading, how many there are and the room they take: "3 files, 2.4 MB of 100 MB".
- Under a comment's words the list is compact (`.compact`): smaller marks, no kind, and no who or when, which the comment already says.
- Where it's narrow, a row's actions go under its name.

In a comment's composer, files chosen to go with it are chips that can be taken away (`.chip.removable`), each with the attach mark, its name and size, before the one thing to do, Comment.

**Takes:** `label`, `about`, `files` (each `id`, `name`, `href`, `size`, `image`, `kind`, `who`, `at`, `note`, `onDelete`), `uploading` (each `name`, `done`, `words`, `error`, `onStop`), `onAdd`, `addAbout`, `compact`.

**Markup:**

```html
<section class="card attachments" aria-labelledby="files-title">
  <div class="section-head"><h2 id="files-title">Files</h2><p class="note">3 files, 2.4 MB of 100 MB</p></div>
  <ul class="attachment-list">
    <li class="attachment">
      <a class="attachment-thumb" href="/api/v1/attachments/a1/content" target="_blank" rel="noopener"><img src="/api/v1/attachments/a1/content" alt="" loading="lazy"><span class="hidden">Open screenshot.png</span></a>
      <div class="attachment-what">
        <a class="attachment-name" href="/api/v1/attachments/a1/content" target="_blank" rel="noopener">screenshot.png</a>
        <span class="attachment-about"><span>120 KB</span><span class="who" data-kind="person"><span class="avatar small" aria-hidden="true">AS</span><span class="who-name">Anna Schmidt</span></span><time datetime="2026-11-09T10:02">Mon 9 Nov, 10:02</time></span>
      </div>
      <div class="attachment-actions"><button type="button" class="danger small">Delete</button></div>
    </li>
    <li class="attachment">
      <span class="attachment-thumb" aria-hidden="true"><svg class="icon"><!-- attach --></svg><span class="attachment-kind">log</span></span>
      <div class="attachment-what"><a class="attachment-name" href="/api/v1/attachments/a2/content?download=1" download>server.log</a>…</div>
    </li>
    <li class="attachment uploading">
      <span class="attachment-thumb" aria-hidden="true"><svg class="icon"><!-- attach --></svg><span class="attachment-kind">zip</span></span>
      <div class="attachment-what"><span class="attachment-name">trace.zip</span>
        <progress class="attachment-progress" max="100" value="40" aria-label="trace.zip">40%</progress>
        <span class="attachment-about">1.2 MB of 3 MB</span></div>
      <div class="attachment-actions"><button type="button" class="small">Stop</button></div>
    </li>
  </ul>
  <div class="attachment-drop">
    <svg class="icon" aria-hidden="true"><!-- attach --></svg>
    <p>Drop files here, or <button type="button" class="link">choose them</button></p>
    <p class="note">Up to 20 MB each. Images show here; everything else downloads.</p>
    <input type="file" multiple hidden>
  </div>
</section>
```

Under a comment: `<ul class="attachment-list compact">…</ul>`, each row as above without its `.attachment-about`'s who and when.

**In a4a:** an issue's files, under its description, its comments' files included; a comment's own files under its words in the history; and an article's files. The preview is a static rendition.
