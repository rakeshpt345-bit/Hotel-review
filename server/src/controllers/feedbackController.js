const Feedback = require('../models/Feedback');
const HotelStats = require('../models/HotelStats');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const env = require('../config/env');

const createFeedback = asyncHandler(async (req, res) => {
  const { rating, comment = '' } = req.body;
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) throw ApiError.badRequest('Please select a rating from 1 to 5');
  if (typeof comment !== 'string' || comment.length > 1000) throw ApiError.badRequest('Feedback must be 1000 characters or less');

  await Feedback.create({ rating, comment: comment.trim(), googleRedirected: true });
  res.status(201).json({ success: true, googleReviewUrl: env.googleReviewUrl });
});

const listFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.find().sort({ createdAt: -1 }).limit(100).lean();
  res.json({ feedback });
});

module.exports = { createFeedback, listFeedback };
