---
name: nudge-fix-report
description: "Post a structured bug-fix/resolution report to the #nudge Discord channel as Nudge. Use when a bug, workflow failure, or system issue has just been fixed and needs to be reported to the team channel — trigger phrases like 'report the fix', 'post the fix to nudge', 'let the team know it's resolved', or right after fixing something that broke a Nudge/Front Desk/n8n system. Not for casual updates or emails (see nudge-notify for email)."
---

# Nudge Fix Report

Posts a consistent, structured "Resolved" card to `#nudge` as the Nudge bot, instead of
free-styling a plain-text message. One format, every time, so the channel reads as a log
of resolved issues rather than a mix of casual notes and structured cards.

## When to use

Right after fixing something that broke a Nudge-adjacent system (n8n workflow, Notion
integration, Discord bot, Front Desk automation, etc.) and the fix should be reported to
the team. If the user just says "tell the team" / "post it" / "report the fix" after a
debugging session, this is the format to use — don't improvise a plain-text summary.

## The format

Discord embeds render a colored left border + bold title above a description block —
that's the "card" look. Build it as one embed:

- **Title**: `✅ Resolved — {SYSTEM} — {AREA}` (e.g. `✅ Resolved — NUDGE — Front Desk`).
  `SYSTEM` is the bot/product (usually `NUDGE`), `AREA` is the specific workflow/board/feature.
- **Color**: `0x2ecc71` (green, matches the ✅).
- **Description**: exactly three paragraphs, in this order, separated by a blank line:
  1. `Root cause: ` — what actually broke and why, in plain language. Bold the proper
     noun/system name involved (e.g. `**2fifty Admin**`). Wrap field names, property
     names, or identifiers in inline code (`` `Status` ``, `` `Query Tasks` ``).
  2. `Fixed: ` — what you changed to resolve it, same formatting conventions.
  3. `Verified: ` — the concrete evidence it works now (a test run, a scheduled run
     succeeding, a re-check of the data). Never skip this paragraph — a fix without
     verification isn't done per [[verification-before-completion]].
- No bullet points, no headers beyond the title — just three short paragraphs.

Do not add a rotating casual intro line above the embed (that pattern belongs to the
front-desk-nudge task-card format, not fix reports) — the embed alone is the message.

## Before sending

Show the user the drafted title + three paragraphs as a preview and get a go-ahead
("send", "post it", "looks good") before posting — same rule as `nudge-notify` for
emails. Skip the preview only if the user's own message already fully dictated the
content (e.g. they pasted the exact text to post).

## Sending it

Look up the current webhook URL in Notion (`EL FIN (HQ) → Front Desk → Operational
Webhooks`, entry **"NUDGE Error Alerts"** — its stated purpose covers both automated
alerts and manual status/resolution posts) rather than hardcoding it here, since it can
rotate. Then:

```bash
curl -s -X POST "<webhook URL from Operational Webhooks>" \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "embeds": [{
    "color": 3066993,
    "title": "✅ Resolved — NUDGE — Front Desk",
    "description": "Root cause: ...\n\nFixed: ...\n\nVerified: ..."
  }]
}
EOF
```

(`3066993` is `0x2ecc71` in decimal — Discord's embed `color` field takes a decimal int.)

## Non-"Resolved" variants

If the user wants to report something other than a clean resolution, keep the same
three-paragraph skeleton and swap only the icon/title/color to match status — e.g.
`🔧 In Progress — …` (color `0xf1c40f` / `15844367`) or `⚠️ Regression — …` (color
`0xe74c3c` / `15158332`). Root cause / Fixed / Verified still apply where they make
sense (an in-progress post may not have a Verified paragraph yet — say so rather than
omitting it silently).
