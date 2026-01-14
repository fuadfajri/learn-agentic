const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const app = express();
app.use(cors());

app.get('/notes', (req, res) => {
    // Mock implementation for verification
    res.json([{ id: '1', title: 'Hello Cosmos' }]);
});

app.listen(3000, () => console.log('Mock Server Running'));
