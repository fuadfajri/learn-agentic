const fs = require('fs');
const path = require('path');

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';

function check(label, condition) {
    if (condition) {
        console.log(`${GREEN}[✓] ${label}${RESET}`);
    } else {
        console.log(`${RED}[x] ${label}${RESET}`);
    }
    return condition;
}

function checkFileExists(filePath) {
    return fs.existsSync(filePath);
}

console.log("=== Orbit Mastery Verification ===\n");

// Phase 1: Planning
check("PRD exists (PRD.md)", checkFileExists("PRD.md"));
check("Roles defined (.agent/active_context/roles.md)", checkFileExists(".agent/active_context/roles.md"));

// Phase 2: Server
check("Server directory exists", checkFileExists("server"));
check("Server package.json exists", checkFileExists("server/package.json"));
check("Worker script exists (server/worker.js)", checkFileExists("server/worker.js"));

// Phase 3: Client
check("Client directory exists", checkFileExists("client"));
check("Client package.json exists", checkFileExists("client/package.json"));

// Phase 4: Artifacts
check("Security Policy exists (SECURITY.md)", checkFileExists("SECURITY.md"));
check("Changelog exists (CHANGELOG.md)", checkFileExists("CHANGELOG.md"));

console.log("\nIf all checks are green, you are ready for the next level!");
