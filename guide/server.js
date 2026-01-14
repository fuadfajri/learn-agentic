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
        {
            id: 'shell',
            label: 'React Shell (client/package.json)',
            check: () => checkFileExists('client/package.json')
        },
        {
            id: 'datalayer',
            label: 'Data Layer (server/index.js)',
            check: () => checkFileExists('server/index.js')
        },
        {
            id: 'graphlib',
            label: 'Graph Library Installed',
            check: () => {
                const pkgPath = path.join(ROOT_DIR, 'client/package.json');
                if (!fs.existsSync(pkgPath)) return false;
                try {
                    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
                    return !!(pkg.dependencies && pkg.dependencies['react-force-graph-2d']);
                } catch (e) { return false; }
            }
        },
        {
            id: 'pivot',
            label: 'The Pivot (Graph in App.jsx)',
            check: () => {
                const appPath = path.join(ROOT_DIR, 'client/src/App.jsx');
                if (!fs.existsSync(appPath)) return false;
                const content = fs.readFileSync(appPath, 'utf8');
                return content.includes('ForceGraph');
            }
        }
    ],
    'phase2': []
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
