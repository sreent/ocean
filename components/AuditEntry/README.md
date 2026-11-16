# AuditEntry

A line of the ledger, the same in every product: when, who and through what, for whom, what it did in the colour of what it did, and its seal. Proposed.

- When, to the second, in UTC, in Plex Mono and `--faint`: the ledger's times are compared, not read.
- Who, with their mark: a person, an agent or a service.
- What it did in words, with a badge in the colour of what it did.
- Through what (the web, the API, the command line), for whom, and where, in `--muted`.
- Its seal: the batch it's sealed in and its digest, in Plex Mono, after the shield and its tick.
- All three products keep a sealed ledger: a5s anchors its copies, and a3t seals Merkle batches. The line reads the same in each.

**Takes:** `at`, `who`, `did`, `tone`, `toneWord`, `by`, `seal`.

The preview is a static rendition of the proposed piece; a5s's audit trail draws its own lines today.

**In a4a:** the activity is the ledger as a card of its own, its lines to its edges (`.card.ledger-box`). What a line did is its own words (`.ledger-did`), and what came with it sits under it (`.ledger-more`): a change in a change's grammar (`.change-lines`), what someone said, quoted beside a line (`.ledger-quote`), or a note, such as what triage suggested and where to decide on it (`.ledger-note`). Its id is in mono, in `.ledger-by`.
