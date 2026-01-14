import React from 'react';
import ForceGraph2D from 'react-force-graph-2d';

function App() {
    const data = {
        nodes: [{ id: 'Hello' }, { id: 'Cosmos' }],
        links: [{ source: 'Hello', target: 'Cosmos' }]
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <h1>Project Cosmos</h1>
            <ForceGraph2D
                graphData={data}
                nodeLabel="id"
            />
        </div>
    );
}

export default App;
