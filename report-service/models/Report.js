const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  email: { type: String, required: true },
  location_lat: { type: Number, required: true },
  location_lng: { type: Number, required: true },
  water_level: { type: Number, required: true },
  description: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', ReportSchema);
