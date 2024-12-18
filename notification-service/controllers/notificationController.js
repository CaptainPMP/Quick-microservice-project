const nodemailer = require('nodemailer');
const Notification = require('../models/Notification'); // Import the Notification model

// Send Notification (Email)
exports.sendNotification = async (req, res) => {
  const { email, message } = req.body;

  // Set up transporter with Ethereal Email configuration
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "ines47@ethereal.email", // Your Ethereal email address
      pass: "E3Mp72uSF5XFQjuQeD", // Your Ethereal email password
    },
  });

  // Email options
  const mailOptions = {
    from: "ines47@ethereal.email", // Sender address (must match the email in the transporter)
    to: email,                      // Recipient email address
    subject: 'Flood Alert Notification', // Subject line
    text: message,                  // Text body of the email
    html: `<b>${message}</b>`,       // HTML body of the email
  };

  try {
    // Send Email via the transporter
    const info = await transporter.sendMail(mailOptions);

    // Log the notification in the database
    const notification = new Notification({ email, message });
    await notification.save();

    // Respond with success message
    res.status(200).json({
      message: 'Notification sent and logged successfully.',
      info: `Message sent: ${info.messageId}`,
    });
  } catch (err) {
    // Error handling
    res.status(500).json({
      message: 'Error sending notification',
      error: err.message,
    });
  }
};

// Get Notification Logs
exports.getNotificationLogs = async (req, res) => {
  try {
    const logs = await Notification.find();
    res.json(logs);
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching logs',
      error: err.message,
    });
  }
};
