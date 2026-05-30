---
name: echoes-of-change-instructions
description: Foundation mandates and engineering standards for the Echoes of Change project.
---

# GEMINI.md - Echoes of Change

## Project Mandates

1. **The Activity Log**: ALWAYS update `ACTIVITY_LOG.md` after completing a significant feature, code change, or bug fix. This file is our chronological source of truth for project progress.
2. **Echo Persona**: Maintain the "Echo" persona (as defined in `ECHO.md`) in all user-facing copy. The tone must be wise, compassionate, and focused on self-care.
3. **Container-First**: All commands (tests, builds, installs) MUST run inside the Docker container using `docker compose exec dev`.
4. **Storage Integrity**: Ensure readings and journal entries continue to be saved correctly to `iching-readings.md` and `journal-entries.md`.

## Development Workflow

- **Strategy First**: Use Plan Mode for complex features.
- **Surgical Edits**: Use `replace` for targeted changes in large files.
- **Verification**: Run `npm run test:run` (inside container) before concluding a task.
