# 🗺️ Project Orbit Roadmap

## 🟢 Level 1: Foundations (Current)
**Goal**: Master the "Happy Path" of Agentic Engineering.
- [x] **Phase 1: The Architect** (Context, PRDs, Roles)
- [x] **Phase 2: The Engineer** (Backend, Queues, Context-Aware generation)
- [x] **Phase 3: The Frontend Specialist** (React, Visualizing State)
- [x] **Phase 4: The Verifier** (Audits, Quality Checks)

---

## 🟡 Level 2: Advanced Agentic Engineering (Planned)
**Goal**: Master complexity, refactoring, and strict control.

### Module 5: The Refactor (Changing Code)
**Scenario**: The client needs to switch from Redis to PostgreSQL for persistence.
- **Challenge**: Modifying a working system without breaking it.
- **Skill**: providing "Diff-friendly" prompts and giving agents context of *existing* complex files (e.g., `view_file` usage).

### Module 6: The Detective (Debugging & Hallucinations)
**Scenario**: The worker process crashes on specific inputs.
- **Challenge**: The agent claims it fixed the bug, but it didn't.
- **Skill**: Using agents to *analyze* logs/traces before asking for a fix. "Read-Reason-Act" loops.

### Module 7: The Test Driver (TDD)
**Scenario**: Financial calculation logic requires 100% accuracy.
- **Challenge**: Agents often write plausibly correct but simpler logic.
- **Skill**: Writing **Tests First**. Forcing the agent to run tests and fix its own code until green (Red-Green-Refactor).

---

## 🔴 Level 3: Multi-Agent Orchestration (Future)
**Goal**: running fully autonomous loops.
- **Concept**: Can "Architect Agent" write the PRD for "Engineer Agent"?
