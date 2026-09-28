const jwt = require('jsonwebtoken');
const env = require('../config/env');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: env.nodeEnv === 'production',
  sameSite: env.nodeEnv === 'production' ? 'none' : 'lax',
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

function signAdminToken() {
  return jwt.sign({ role: 'admin', email: env.adminEmail }, env.jwtSecret, { expiresIn: env.jwtExpiresIn });
}

const requireAdmin = asyncHandler(async (req, res, next) => {
  const bearer = req.headers.authorization?.startsWith('Bearer ') ? req.headers.authorization.slice(7) : null;
  const token = req.cookies?.token || bearer;
  if (!token) throw ApiError.unauthorized('Please log in to continue');
  try {
    const payload = jwt.verify(token, env.jwtSecret);
    if (payload.role !== 'admin') throw new Error('Invalid role');
    req.adminEmail = payload.email;
    next();
  } catch {
    throw ApiError.unauthorized('Your session has expired. Please log in again');
  }
});

module.exports = { requireAdmin, signAdminToken, COOKIE_OPTIONS };
