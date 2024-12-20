const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());

// Allow cross-origin requests
app.use(cors());

// Example Test Route
app.use('/users', createProxyMiddleware({
    target: 'https://jsonplaceholder.typicode.com',
    changeOrigin: true,
}));

// Proxy to User Service
app.use('/api/users/login', createProxyMiddleware({
    target: process.env.USER_SERVICE_URL, // Target the base service URL
    changeOrigin: true,
    pathRewrite: {
        '^/api/users/login': '/api/users/login', // Rewrite the path correctly
    },
}));

// Proxy to Report Service
app.use('/api/reports', createProxyMiddleware({
    target: process.env.REPORT_SERVICE_URL,
    changeOrigin: true,
}));

// Proxy to Notification Service
app.use('/api/notifications', createProxyMiddleware({
    target: process.env.NOTIFICATION_SERVICE_URL,
    changeOrigin: true,
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
