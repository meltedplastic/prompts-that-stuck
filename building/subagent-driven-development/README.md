# Subagent Driven Development

**Execute plan by dispatching fresh subagent per task, with two-stage review after each: spec compliance review first, then code quality review.**

---

## What it does

This one is a full skill rather than a one-paste prompt — it carries 3 supporting file(s) and branching instructions. Read [`claude.skill.md`](claude.skill.md) for the complete text.

**Files:** `code-quality-reviewer-prompt.md` · `implementer-prompt.md` · `spec-reviewer-prompt.md`

---

## When to use this

Use when executing implementation plans with independent tasks in the current session

## Credit

Originally by **Jesse Vincent** in [obra/superpowers](https://github.com/obra/superpowers), MIT-licensed. Included here unchanged because it earned a permanent spot in my setup — the original is the canonical version, go star it. License text: [`/licenses/MIT-obra.txt`](../../licenses/MIT-obra.txt).

---

## Works with

Claude Code · Any agentic coding tool that reads skill files

---

⚡ **Claude Code user?** Drop [`claude.skill.md`](claude.skill.md) into `~/.claude/skills/subagent-driven-development/SKILL.md` (with its supporting files) and type `/subagent-driven-development`.
