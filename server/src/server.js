const app = require('./app');
const env = require('./config/env');
const { connectDB } = require('./config/db');

async function start() {
  if (env.missingRequiredEnv.length) {
    console.warn(`[config] Missing: ${env.missingRequiredEnv.join(', ')}`);
  }
  await connectDB();
  app.listen(env.port, () => console.log(`Shree Ramdev Rajasthani Dhaba server running on http://localhost:${env.port}`));
}

start().catch((error) => {
  console.error('[server] Startup failed:', error.message);
  process.exit(1);
});
