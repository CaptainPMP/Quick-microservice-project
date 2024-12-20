const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const notificationRoutes = require('./routes/notificationRoutes');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
// app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Notification Service DB Connected"))
  .catch(err => console.error("DB Error: ", err));

// Routes
app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Notification Service running on port ${PORT}`));
