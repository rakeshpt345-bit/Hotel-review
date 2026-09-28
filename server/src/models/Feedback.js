const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, trim: true, maxlength: 1000, default: '' },
  googleRedirected: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

feedbackSchema.index({ createdAt: -1 });
module.exports = mongoose.model('Feedback', feedbackSchema);
