const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  email: { type: String, required: true },  // Email address of the recipient
  message: { type: String, required: true }, // Message content of the notification
  sent_at: { type: Date, default: Date.now }, // Timestamp when the notification is sent
});

module.exports = mongoose.model('Notification', NotificationSchema);
