const express = require('express');
const { login, me, logout } = require('../controllers/authController');
const { createFeedback, listFeedback } = require('../controllers/feedbackController');
const { recordScan, getStats } = require('../controllers/scanController');
const { getQr } = require('../controllers/qrController');
const { requireAdmin } = require('../middleware/auth');
const asyncHandler = require('../utils/asyncHandler');
const env = require('../config/env');

const router = express.Router();
router.get('/health', (req, res) => res.json({ status: 'ok', database: 'mongodb' }));

router.post('/auth/login', login);
router.get('/auth/me', requireAdmin, me);
router.post('/auth/logout', requireAdmin, logout);

router.post('/scan', recordScan);
router.post('/feedback', createFeedback);

router.get('/admin/stats', requireAdmin, getStats);
router.get('/admin/feedback', requireAdmin, listFeedback);
router.get('/admin/qr', requireAdmin, getQr);
router.get('/public/config', asyncHandler(async (req, res) => {
  res.json({ hotelName: 'Shree Ramdev Rajasthani Dhaba', googleReviewConfigured: Boolean(env.googleReviewUrl) });
}));

module.exports = router;
