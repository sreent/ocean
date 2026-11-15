# Who

Who did something: a person, an agent, a service, or the product itself, by name, with a line about them.

- People are round, with their initials, on `--sunken`.
- Agents are rounded squares in `--agent-tone`, with the agent's mark. People never are, so a page shows at a glance whether a person or an agent did something.
- The product's own doing is a rounded square in `--own`, with the shield and its tick.
- Services, such as a7c's skills' identities and a3t's service accounts, are rounded squares in `--service-tone`, with the tool. They act, but they don't decide for themselves, so they're never the agent colour. (Proposed.)
- The name is at 600; the line about them is `--text-sm` in `--muted`.

**Takes:** `name`, `kind` (`person`, `agent`, or the proposed `service`), and `about`.

**In a5s:** `studio/src/design/people.tsx`, and the chat's marks in `app.js`. The preview is a static rendition.
