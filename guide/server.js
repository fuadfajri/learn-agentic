const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3333;
const ROOT_DIR = path.resolve(__dirname, '..');

// Verification Logic (Borrowed from verify_orbit.js)
function checkFileExists(relPath) {
    const fullPath = path.join(ROOT_DIR, relPath);
    const exists = fs.existsSync(fullPath);
    console.log(`[VERIFY] Checking: ${fullPath} -> ${exists ? '✅' : '❌'}`);
    return exists;
}

const CHECKS = {
    'phase1': [
        { id: 'prd', label: 'PRD exists (PRD.md)', check: () => checkFileExists('PRD.md') },
        { id: 'roles', label: 'Roles defined (.agent/active_context/roles.md)', check: () => checkFileExists('.agent/active_context/roles.md') }
    ],
    'phase2': [
        { id: 'server_dir', label: 'Server directory exists', check: () => checkFileExists('server') },
        { id: 'server_pkg', label: 'Server package.json', check: () => checkFileExists('server/package.json') },
        { id: 'worker_js', label: 'Worker script (server/worker.js)', check: () => checkFileExists('server/worker.js') }
    ],
    'phase3': [
        { id: 'client_dir', label: 'Client directory exists', check: () => checkFileExists('client') },
        { id: 'client_pkg', label: 'Client package.json', check: () => checkFileExists('client/package.json') }
    ],
    'phase4': [
        { id: 'security', label: 'Security Policy (server/SECURITY.md)', check: () => checkFileExists('server/SECURITY.md') },
        { id: 'changelog', label: 'Changelog (CHANGELOG.md)', check: () => checkFileExists('CHANGELOG.md') }
    ]
};

const server = http.createServer((req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

    if (req.method === 'GET' && req.url === '/') {
        // Serve HTML
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading guide');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.method === 'GET' && req.url === '/api/verify') {
        // Run Checks
        const results = {};
        for (const [phase, items] of Object.entries(CHECKS)) {
            results[phase] = items.map(item => ({
                id: item.id,
                label: item.label,
                passed: item.check()
            }));
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(results));
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`\n🚀 Orbit Guide Dashboard running at: http://localhost:${PORT}`);
    console.log(`Open this URL in your browser to start your mission!\n`);
});
