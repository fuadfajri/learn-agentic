# Project Cosmos Workflow 🌌

Welcome to the **Agentic Workspace**.
This project is structured to support **Multi-Device Sync** and **Automated Verification**.

## 📂 Structure
*   **`orbit_app/`**: Your workspace. All code (`client`, `server`) goes here.
*   **`guide/`**: The Mission Control dashboard logic.
*   **`.agent/`**: Brain files for the AI (Context & Workflows).

## 🤖 Slash Commands
We have configured specific Agent commands:

*   **/sync**: Automatically stages, commits, and pushes your work to GitHub.
    *   *Use this before switching devices.*
*   **/verify**: (Legacy) Triggers the verification check, but prefer using the Browser Dashboard.

## 🚀 How to Resume Work
1.  **Pull Changes**: `git pull`
2.  **Start Guide**: `node guide/server.js`
3.  **Open Dashboard**: `http://localhost:3333`
4.  **Tell Agent**: "I am resuming Project Cosmos. Read `.agent/context.md`."

Happy coding!
