const mongoose = require('mongoose');
const env = require('./env');

async function connectDB() {
  mongoose.set('strictQuery', true);
  await mongoose.connect(env.mongoUri);
  console.log(`[db] Connected to MongoDB: ${maskUri(env.mongoUri)}`);
  return mongoose.connection;
}

function maskUri(uri) {
  return uri.replace(/:\/\/([^:]+):([^@]+)@/, '://$1:****@');
}

module.exports = { connectDB };
