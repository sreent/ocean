# Traced

A value an agent used, which opens to show where it comes from: its record, when it was read, by which run and for whom, and whether it still holds.

- Use it wherever an agent's answer or a decision rests on a value read from a record.
- The value sits on `--accent-soft` with a dashed `--accent` edge, which turns solid under the pointer, and the trace mark.
- Opened, it lists where the value comes from, in order, each step a ring in `--accent`.
- In a7c the same piece shows a finding's evidence; in a3t, a field's history.

**Takes:** `value` and `trail`, a list of lines.

**In a5s:** `studio/src/design/agentic.tsx`, on Radix's popover: it opens with Enter, closes with Escape, and puts the focus back on the value. The preview is a static rendition, shown open.
