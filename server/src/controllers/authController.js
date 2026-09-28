const bcrypt = require('bcryptjs');
const env = require('../config/env');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { signAdminToken, COOKIE_OPTIONS } = require('../middleware/auth');

const passwordHashPromise = env.adminPassword ? bcrypt.hash(env.adminPassword, 12) : Promise.resolve('');

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (email?.toLowerCase() !== env.adminEmail?.toLowerCase()) throw ApiError.unauthorized('Invalid email or password');
  const hash = await passwordHashPromise;
  if (!hash || !(await bcrypt.compare(password || '', hash))) throw ApiError.unauthorized('Invalid email or password');
  const token = signAdminToken();
  res.cookie('token', token, COOKIE_OPTIONS);
  res.json({ admin: { email: env.adminEmail } });
});

const me = asyncHandler(async (req, res) => res.json({ admin: { email: req.adminEmail } }));

const logout = asyncHandler(async (req, res) => {
  res.clearCookie('token', COOKIE_OPTIONS);
  res.json({ success: true });
});

module.exports = { login, me, logout };
