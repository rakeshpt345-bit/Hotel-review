const HotelStats = require('../models/HotelStats');
const asyncHandler = require('../utils/asyncHandler');

const recordScan = asyncHandler(async (req, res) => {
  const stats = await HotelStats.findOneAndUpdate(
    { key: 'main' },
    { $inc: { totalScans: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  ).lean();
  res.json({ success: true, totalScans: stats.totalScans });
});

const getStats = asyncHandler(async (req, res) => {
  const stats = await HotelStats.findOne({ key: 'main' }).lean();
  res.json({ totalScans: stats?.totalScans || 0 });
});

module.exports = { recordScan, getStats };
