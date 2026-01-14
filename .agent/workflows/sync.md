---
description: Sync changes to the verified repo (Auto-Commit & Push)
---

1. Check the git status to see what changed.
2. Add all changes in `orbit_app/`, `guide/`, and root documentation.
3. Commit with a timestamped message "chore: auto-sync".
4. Push to the `main` branch.

// turbo
5. Run: `git status && git add . && git commit -m "chore: auto-sync $(date)" && git push`
