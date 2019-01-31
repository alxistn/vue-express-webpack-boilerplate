require('dotenv').config();

const config = {};

config.PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
  config.MONGODB_URI = process.env.MONGODB_URI_DEV;
}

if (process.env.NODE_ENV === 'production') {
  config.MONGODB_URI = process.env.MONGODB_URI_PROD;
}

if (process.env.NODE_ENV === 'test') {
  config.MONGODB_URI = process.env.MONGODB_URI_TEST;
}

module.exports = config;
