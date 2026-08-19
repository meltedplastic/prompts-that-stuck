# Prompts That Stuck

A growing collection of AI prompts and skills I use every day. Each one is small, practical, and works in any AI — ChatGPT, Claude, Gemini, whatever you use.

Pick one. Paste it. See what happens.

Some entries are **full skills** rather than one-paste prompts — they carry supporting files and branching logic. Those are marked, and each one ships a `claude.skill.md` you can drop straight into Claude Code.

Some of these I wrote. Some I borrowed from people who write better skills than I do, and kept because they earned it — those are credited in full, MIT-licensed, and linked back to the original. Go star the originals.

---

## 🧠 When you need to think

Prompts for the part before the work — deciding, framing, stress-testing, and noticing your own patterns.

| Prompt | What it does | Source |
|--------|--------------|--------|
| [Brainstorming](thinking/brainstorming) | Explore intent, requirements and design properly before a single line of code gets written | [obra](https://github.com/obra/superpowers) |
| [Grill Me](thinking/grill-me) | Interview the user relentlessly about a plan or design until reaching shared understanding, resolving each branch of the decision tree | Mine |
| [Learn](thinking/learn) | Session reflection and memory capture | Mine |
| [Systematic Debugging](thinking/systematic-debugging) | Random fixes waste time and create new bugs | [obra](https://github.com/obra/superpowers) |
| [Writing Plans](thinking/writing-plans) | Write comprehensive implementation plans assuming the engineer has zero context for our codebase and questionable taste | [obra](https://github.com/obra/superpowers) |

---

## 🔨 When you're building something

The loop I actually run: plan it, test it first, delegate it, verify it, ship it.

| Prompt | What it does | Source |
|--------|--------------|--------|
| [Bookaudit](building/bookaudit) | Run any idea through 11 business-book lenses before you build it — and get a GO / KILL verdict instead of a vibe | Mine |
| [Deploy](building/deploy) | Deploy a local project folder to Railway with optional password protection | Mine |
| [Dispatching Parallel Agents](building/dispatching-parallel-agents) | You delegate tasks to specialized agents with isolated context | [obra](https://github.com/obra/superpowers) |
| [Executing Plans](building/executing-plans) | Load plan, review critically, execute all tasks, report when complete | [obra](https://github.com/obra/superpowers) |
| [Finishing A Development Branch](building/finishing-a-development-branch) | Guide completion of development work by presenting clear options and handling chosen workflow | [obra](https://github.com/obra/superpowers) |
| [Receiving Code Review](building/receiving-code-review) | Code review requires technical evaluation, not emotional performance | [obra](https://github.com/obra/superpowers) |
| [Requesting Code Review](building/requesting-code-review) | Dispatch superpowers:code-reviewer subagent to catch issues before they cascade | [obra](https://github.com/obra/superpowers) |
| [Subagent Driven Development](building/subagent-driven-development) | Execute plan by dispatching fresh subagent per task, with two-stage review after each: spec compliance review first, then code quality review | [obra](https://github.com/obra/superpowers) |
| [Test Driven Development](building/test-driven-development) | Write the test first | [obra](https://github.com/obra/superpowers) |
| [Using Git Worktrees](building/using-git-worktrees) | Git worktrees create isolated workspaces sharing the same repository, allowing work on multiple branches simultaneously without switching | [obra](https://github.com/obra/superpowers) |
| [Using Superpowers](building/using-superpowers) | The meta-skill — teaches your agent to go find the right skill before it answers anything | [obra](https://github.com/obra/superpowers) |
| [Verification Before Completion](building/verification-before-completion) | Claiming work is complete without verification is dishonesty, not efficiency | [obra](https://github.com/obra/superpowers) |
| [Writing Great Skills](building/writing-great-skills) | Reference for writing and editing skills well — the vocabulary and principles that make a skill predictable | [mattpocock](https://github.com/mattpocock/skills) |
| [Writing Skills](building/writing-skills) | Write a skill the way you'd write a test — red, green, refactor, but for agent behavior | [obra](https://github.com/obra/superpowers) |

---

## 🎨 When you're designing an interface

Design-engineering review lenses — the difference between 'it works' and 'it feels right'.

| Prompt | What it does | Source |
|--------|--------------|--------|
| [Better Accessibility](design/better-accessibility) | Accessibility engineering for product interfaces, from focus states and keyboard support to ARIA, forms, and screen readers | [jakubkrehel](https://github.com/jakubkrehel/skills) |
| [Better Colors](design/better-colors) | Color systems for digital products, from building and naming a palette to applying it with meaning and verifying contrast | [jakubkrehel](https://github.com/jakubkrehel/skills) |
| [Better Interface](design/better-interface) | Cross-discipline interface review: routes a screen, flow, feature, or product interface to every `better-*` domain skill and consolidates one ranked verdict | [jakubkrehel](https://github.com/jakubkrehel/skills) |
| [Better Layout](design/better-layout) | Layout structure for web interfaces, from grouping and alignment to reading order, progressive disclosure, and adaptive breakpoints | [jakubkrehel](https://github.com/jakubkrehel/skills) |
| [Better Typography](design/better-typography) | Web typography from choosing fonts to spacing, wrapping and accessibility | [jakubkrehel](https://github.com/jakubkrehel/skills) |
| [Better UI](design/better-ui) | Design engineering principles for making interfaces feel polished | [jakubkrehel](https://github.com/jakubkrehel/skills) |
| [Better Writing](design/better-writing) | UX writing and interface copy, from voice and button labels to error messages and empty states | [jakubkrehel](https://github.com/jakubkrehel/skills) |
| [Interface Review](design/interface-review) | Interface review of a change rather than a screen: uncommitted work, the current branch, or a pull request. Covers interface quality, not correctness, tests, or security | [jakubkrehel](https://github.com/jakubkrehel/skills) |

---

## ✍️ When you're writing

Brand voice, stakeholder docs, and getting AI prose to stop sounding like AI prose.

| Prompt | What it does | Source |
|--------|--------------|--------|
| [Brand Framework](writing/brand-framework) | Build a complete brand foundation in four chapters | Mine |
| [Doc Pack](writing/doc-pack) | Turn markdown drafts into stakeholder-ready Word, HTML and PDF document packs | Mine |
| [Writing Prose Like A Human](writing/writing-prose-like-a-human) | Produces prose that reads as authentically human by avoiding statistical patterns common to LLM output | Mine |

---

## ⚙️ When you're automating something

n8n workflow craft, plus the bots I run day to day.

| Prompt | What it does | Source |
|--------|--------------|--------|
| [n8n Code Javascript](automation/n8n-code-javascript) | Write JavaScript code in n8n Code nodes | [czlonkowski](https://github.com/czlonkowski/n8n-mcp) |
| [n8n Code Python](automation/n8n-code-python) | Write Python code in n8n Code nodes | [czlonkowski](https://github.com/czlonkowski/n8n-mcp) |
| [n8n Expression Syntax](automation/n8n-expression-syntax) | Validate n8n expression syntax and fix common errors | [czlonkowski](https://github.com/czlonkowski/n8n-mcp) |
| [n8n MCP Tools Expert](automation/n8n-mcp-tools-expert) | Expert guide for using n8n-mcp MCP tools effectively | [czlonkowski](https://github.com/czlonkowski/n8n-mcp) |
| [n8n Node Configuration](automation/n8n-node-configuration) | Operation-aware node configuration guidance | [czlonkowski](https://github.com/czlonkowski/n8n-mcp) |
| [n8n Validation Expert](automation/n8n-validation-expert) | Interpret validation errors and guide fixing them | [czlonkowski](https://github.com/czlonkowski/n8n-mcp) |
| [n8n Workflow Patterns](automation/n8n-workflow-patterns) | Proven workflow architectural patterns from real n8n workflows | [czlonkowski](https://github.com/czlonkowski/n8n-mcp) |
| [Nudge Fix Report](automation/nudge-fix-report) | Post a structured, readable fix report to a team Discord channel the moment something is resolved | Mine |
| [Nudge Notify](automation/nudge-notify) | Send branded emails as Nudge (nudge@eselfin.com) via n8n workflow | Mine |

---

## How to use

1. Open a prompt
2. Copy the text block
3. Paste it into your AI at the right moment
4. That's it

Entries marked as full skills work best in **Claude Code**: copy the folder's `claude.skill.md` to `~/.claude/skills/<name>/SKILL.md`, bring its supporting files along, and invoke it with `/<name>`.

---

## Credits

This collection stands on other people's work. Every borrowed skill is included **unchanged**, under its original MIT license:

- **[czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp)** — 7 skills: n8n Code Javascript, n8n Code Python, n8n Expression Syntax, n8n MCP Tools Expert, n8n Node Configuration, n8n Validation Expert, n8n Workflow Patterns
- **[jakubkrehel/skills](https://github.com/jakubkrehel/skills)** — 8 skills: Better Accessibility, Better Colors, Better Interface, Better Layout, Better Typography, Better UI, Better Writing, Interface Review
- **[mattpocock/skills](https://github.com/mattpocock/skills)** — 1 skill: Writing Great Skills
- **[obra/superpowers](https://github.com/obra/superpowers)** — 14 skills: Brainstorming, Systematic Debugging, Writing Plans, Dispatching Parallel Agents, Executing Plans, Finishing A Development Branch, Receiving Code Review, Requesting Code Review, Subagent Driven Development, Test Driven Development, Using Git Worktrees, Using Superpowers, Verification Before Completion, Writing Skills

Full license texts live in [`licenses/`](licenses).

---

## License

- **Prompts and writing by me** — [CC BY-NC 4.0](LICENSE).
- **Borrowed skills** — remain under their original **MIT** license, held by their authors. MIT permits commercial use; the NonCommercial term above does **not** apply to them.

---

## Who is Sam

I'm the design mind founders rely on to co-create, clarify ideas, and build systems that work in the real world. Based in Berlin. Currently building at [EL FIN](https://linkedin.com/in/samportillo/).

These are the prompts that actually stuck — the ones I kept coming back to because they changed how I think, build, and operate with AI.
