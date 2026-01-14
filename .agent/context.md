# Project Context: Cosmos 🌌

## Overview
We are building a **Knowledge Graph Application**.
The goal is to verify "Agentic Engineering" concepts (Levels 1 & 2).

## Directory Structure
- **orbit_app/**: The actual application source code (Client + Server).
    - `client/`: React + Vite Frontend.
    - `server/`: Node.js + Express Backend.
    - `notes/`: The raw markdown data.
- **guide/**: The Educational Interface (Mission Control).
    - `index.html`: The Dashboard.
    - `server.js`: The Verification Logic.

## Current Phase
We are in **Phase 1 (The Builder)**.
Level 2 (The Operator) includes advanced tasks like mass ingestion and error recovery.

## Workflow rules
- Always run verifiction via the Dashboard (`http://localhost:3333`) after completing a step.
- Use `/sync` to push changes to GitHub.
