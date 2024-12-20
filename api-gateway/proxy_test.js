const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create the first server (port 3000)
const app1 = express();
app1.get('/', (req, res) => {
    res.send('Hello from server 1 (port 3000)');
});
app1.get('/proxy', (req, res) => {
    res.send('Hello from server 1 (port 3000) with proxy');
});
app1.listen(3000, () => {
    console.log('Server 1 is running on http://localhost:3000');
});

// Create the second server (port 4000)
const app2 = express();
app2.use(
    '/proxy',
    createProxyMiddleware({
        target: 'http://localhost:3000/proxy', // Proxy requests to the first server
        changeOrigin: true,
    })
);
app2.get('/', (req, res) => {
    res.send('Hello from server 2 (port 4000)');
});
app2.listen(4000, () => {
    console.log('Server 2 is running on http://localhost:4000');
});
