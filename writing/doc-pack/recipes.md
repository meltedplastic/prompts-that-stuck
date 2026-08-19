# Per-document recipes

One recipe per document type. Sections in order; one line on what earns its place. Items marked ★ are hard-won — they came out of persona reviews, not the textbooks — don't drop them.

## 01 · Design mandate (Atlassian charter / PRINCE2 PID blend — sponsor-facing)

1. Purpose & background — what the team does today, what replaces it, one paragraph each.
2. Business case — why this, why now. Bolded claim + evidence paragraphs. ★ State cost caveats in-place: what the headline saving is net of, and any contract notice period that moves the real decision date.
3. Objectives — the destination as things the team *will do*, numbered, plain language.
4. Users & audiences — table; include who explicitly has *no* access.
5. Scope — phase-1 product in depth as a user-outcome table **with build-status badges**; later services at job-statement level; cross-cutting obligations last.
   ★ If replacing an incumbent tool: an **acceptance-conditions traceability table** — every condition the business stated, mapped to where it's evidenced, its status, and what closes the gap. Add the cut-line paragraph: a Partial only blocks the decision where it's a *regression* against the incumbent; improvements the incumbent never had can close after the decision.
6. Out of scope / decide later — two explicit lists; the anti-scope-creep device.
7. Success measures — table tracing each measure to an objective. ★ Baselines are captured from work done the old way, *before* rollout.
8. Phasing — phase table, then ★ the gate decomposed into numbered pass/fail lines (binary, auditable, dated). A gate that can be argued both ways protects nobody.
9. Stakeholders & ownership — table. ★ For an AI product, name an accountable owner for AI-output risk, distinct from the delivery lead.
10. Assumptions, dependencies, risks — ★ assumptions as a test table: assumption → cheapest test → by when → what a failure changes. An untested assumption list is a wish list.
11. Sign-off block — roles, blank name/date columns.

## 02 · PRD / functional spec (Atlassian PRD + user stories — the deep document)

1. Metadata header + change log.
2. Overview & problem statement, incl. the status-badge convention declared as a house rule. ★ If extending someone's baseline spec: keep their numbering, credit them, and state that badges measure distance from the requirement, "never a fault in it" — a requirements doc describes a target, as it should.
3. Goals & metrics (point at the mandate; don't duplicate).
4. Non-goals / out of scope.
5. Assumptions & constraints — incl. regulatory/audit constraints that bind because of the domain.
6. Roles & permissions, spec vs reality — the intended role table, then the blunt current state.
7. Feature areas — per area: story table ("As a… I want… so that…" + UR ref + badge) → behaviour notes only where the code told you something non-obvious → Given/When/Then only where behaviour isn't self-evident → 1–3 screenshots at the point they support. New stories continue the baseline numbering.
8. Engineering cross-references — pointers, not a tech spec.
9. Open questions — table with owner and target date.
10. Release / rollout position.
11. Appendix — sources and prior docs.

## 03 · Architecture spec (arc42-lite + C4 — engineer/reviewer-facing)

1. Introduction & goals — stakeholder table (what each needs answered), quality goals in priority order. ★ If a goal is unmet, say so in the goal itself.
2. Constraints — technical, organisational, regulatory. ★ A missing control (e.g. no authorisation model) is a constraint, stated here and again in section 10.
3. System context — C4 L1 ASCII diagram + external-systems table (protocol, purpose).
4. Solution strategy — the shaping decisions, one bullet each with the trade-off.
5. Building blocks — C4 L2 containers; L3 only for the subsystems that matter.
6. AI/RAG pipeline (if an AI system) — ingestion → retrieval → generation → citation model; model bindings and timeouts. Never reproduce prompt text.
7. Data model — entity tree, binding rules, where vectors live, source-of-truth rules.
8. Runtime view — 2–3 end-to-end scenarios in numbered steps, with known failure modes inline.
9. Deployment view — topology, environments, CI/CD incl. what actually gates production (verify it, don't assume).
10. Security posture — authN, authZ (absences stated plainly), trust boundaries, data classification. ★ For AI: data residency + processing terms per provider leg, prompt-injection surface, retrieval leakage, output handling — as open items if unresolved.
11. Crosscutting — observability, latency/cost, error handling.
12. ★ Current state vs target — a table reconciling any vision document against built reality; vision labelled as vision, never as roadmap.
13. Risks & technical debt — what the team would flag; for RAG: embedding staleness, untested prompt regressions, retrieval access control.
14. Glossary — domain + AI terms.

## 04 · Production support doc (Google PRR / ops-manual blend)

Intro declares the honesty model: each section states **what exists today**, the **gap** against standard practice, and a **recommended posture**. Gaps are findings to act on, not failures to apologise for.

1. Service overview & business context — the two facts an operator needs (exposure, dependency).
2. Architecture & dependencies — the operator's short version; point at doc 03.
3. Environments & deployment — migration model and its consequences; ★ rollback position stated honestly (has it ever been tested?).
4. Monitoring & alerting — what exists / what doesn't; the health-check's blind spots; config traps.
5. Incident response — nothing defined? Propose a minimal severity model and escalation path; a proposal beats a blank.
6. Support model & ownership — ★ a RACI skeleton with *decision needed* in the load-bearing cells; the doc's job is to force the decision, not fake one.
7. Routine operations — every recurring task and whether a human or a machine runs it.
8. Failure modes & recovery — table: failure → symptom → cause → what to do today → gap.
9. Capacity & performance — current sizing, what breaks on scale-out.
10. Security & access control — restate the access gaps operationally.
11. Backup & DR — RPO/RTO if defined (say if not); ★ name cross-service dependencies where the canonical data lives elsewhere.
12. Change management — the actual path to production, verified.
13. ★ Known gaps table — the centrepiece: gap → operational consequence → recommended remediation → suggested owner. Close with which gaps gate production versus merely deserve scheduling.
14. Contacts & document maintenance — placeholders until section 6 is decided; note the runbook "last tested" convention.
