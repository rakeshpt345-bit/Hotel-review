const QRCode = require('qrcode');
const asyncHandler = require('../utils/asyncHandler');
const env = require('../config/env');

const getQr = asyncHandler(async (req, res) => {
  const qrUrl = env.publicReviewUrl;
  const png = await QRCode.toDataURL(qrUrl, { width: 800, margin: 2, errorCorrectionLevel: 'H' });
  const svg = await QRCode.toString(qrUrl, { type: 'svg', width: 800, margin: 2, errorCorrectionLevel: 'H' });
  res.json({ qrUrl, png, svg });
});

module.exports = { getQr };
