const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const reportRoutes = require('./routes/reportRoutes');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
// app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Report Service DB Connected"))
  .catch(err => console.error("DB Error: ", err));

app.use('/api/reports', reportRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Report Service running on port ${PORT}`));
