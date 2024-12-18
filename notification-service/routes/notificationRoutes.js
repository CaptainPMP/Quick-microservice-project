const express = require('express');
const router = express.Router();
const { sendNotification, getNotificationLogs } = require('../controllers/notificationController');

router.post('/send', sendNotification);
router.get('/logs', getNotificationLogs);

module.exports = router;
