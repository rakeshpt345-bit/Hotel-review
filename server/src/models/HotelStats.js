const mongoose = require('mongoose');

const hotelStatsSchema = new mongoose.Schema({
  key: { type: String, unique: true, default: 'main' },
  totalScans: { type: Number, default: 0, min: 0 },
}, { timestamps: true });

module.exports = mongoose.model('HotelStats', hotelStatsSchema);
