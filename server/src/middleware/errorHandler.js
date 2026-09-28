const ApiError = require('../utils/ApiError');

function notFoundHandler(req, res) {
  res.status(404).json({ message: 'Route not found' });
}

function errorHandler(err, req, res, next) {
  console.error(err);
  const status = err.statusCode || 500;
  res.status(status).json({ message: status === 500 ? 'Something went wrong. Please try again.' : err.message });
}

module.exports = { notFoundHandler, errorHandler };
