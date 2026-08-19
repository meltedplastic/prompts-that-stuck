---
name: doc-pack
description: Use when creating, reviewing, or re-rendering a stakeholder document pack (design mandate, PRD, architecture spec, support doc, or similar governance documents) — or when someone asks for Word/HTML/PDF outputs of markdown drafts.
---

# Building stakeholder doc packs

## Overview

Markdown is the source of truth. Word, HTML, and PDF are disposable renders of it. All drafting, reviewing, and editing happens in the markdown; every output format regenerates from it, so nothing is ever edited in an output file. Review with the human happens on the markdown, not the renders — send renders only to people outside the loop.

## The flow

1. **Research first, on disk.** Evidence goes into `research/*.md` files before any drafting. Every claim in a document must trace to a research file, a source system, or the code. Verify claims against the current branch — stale checkouts propagate errors silently.
2. **Start from the per-document recipes in `recipes.md`** (in this skill folder — mandate, PRD, architecture, support doc, with the hard-won additions marked ★). For a document type not covered there, derive an outline from a recognised standard (Atlassian charter/PID, arc42 + C4, Google PRR / GOV.UK service manual). Either way, record the agreed outlines in the pack's `formats.md` before drafting.
3. **Draft in markdown** in `drafts/`, one file per document, numbered (`01-…`, `02-…`).
4. **Review passes, in order:** (a) fact-check against source code — every status claim re-verified, not trusted from research digests; (b) audience-persona reviews (the delivery lead, the security reviewer — whoever will actually read it); (c) prose pass per the writing-prose-like-a-human skill; (d) human review of the markdown.
5. **Build outputs** only after the markdown settles (see Build commands).

## House style — non-negotiable

- **Never use the § symbol. Write "section 3.2" (capitalise at sentence start).** The section sign reads as legal jargon and confuses non-lawyers.
- UK spelling (-ise). Understated, conservative tone; no superlatives, no sales language. Arrow Editorial Style Guide v2 is the tone reference.
- **Never expand an acronym unless a source document expands it.** An invented expansion (e.g. guessing what "CPS" stands for) is a factual error waiting to embarrass someone.
- Build-status taxonomy on every claim about what exists: **Live / Partial / Stub / Absent / Decision needed**, set to the weakest true state. Declare it as a house convention in each document.
- Vision vs built: where a source describes intent, say so — never present intent as current state.
- Risks and observations are stated as facts, never attributed to named individuals. Ownership facts (sponsor, delivery lead) are fine.
- Header block per document: `**Version:** V0.1 | **Status:** Draft for alignment – internal review` plus owner and date.

## Folder layout

```
<pack>/
  research/     evidence digests (never shipped)
  formats.md    agreed outlines
  drafts/       markdown source + screenshots/
  docx/  html/  pdf/   generated outputs
```

## Build commands

Word (per document; the Obsidian-branded reference lives in this skill folder):

```bash
pandoc drafts/01-doc.md -o docx/01-doc.docx --from gfm --toc --toc-depth=2 \
  --resource-path=drafts --reference-doc=~/.claude-shared/skills/doc-pack/obsidian-reference.docx
```

HTML: match the conventions of `_deliverables/uw-docs-vs-code-digest/index.html` (Obsidian tokens, 860px reading width, self-hosted woff2 fonts from `cps-app/demo-companion/obsidian/fonts/`, status words badged only in table cells). Zip with the folder renamed to the pack name so it unzips cleanly.

PDF: run `topdf.mjs` (in this skill folder) from inside a repo that has Playwright installed (`cp` it in, `bun` it, delete it) — it prints each HTML page to A4 with the TOC sidebar hidden.

Teams/Outlook block HTML attachments: send PDFs directly, share HTML zips via OneDrive link.

## Common mistakes

- Editing an output file instead of the markdown (the next regeneration silently reverts it).
- Trusting research digests during fact-check instead of re-reading the code on the current branch.
- Marking something Live because a demo showed it — the badge reflects the code.
- § anywhere. Screenshots referenced but not captured. Fonts assumed installed on the reader's machine.
