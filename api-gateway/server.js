const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Proxy to User Service
app.use('/api/users', createProxyMiddleware({ target: process.env.USER_SERVICE_URL, changeOrigin: true }));

// Proxy to Report Service
app.use('/api/reports', createProxyMiddleware({ target: process.env.REPORT_SERVICE_URL, changeOrigin: true }));

// Proxy to Notification Service
app.use('/api/notifications', createProxyMiddleware({ target: process.env.NOTIFICATION_SERVICE_URL, changeOrigin: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
