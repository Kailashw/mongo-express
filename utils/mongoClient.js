// library imports
const { MongoClient } = require('mongodb');

// internal imports
const { mongoUri } = require('./config');

// Declrations
const client = new MongoClient(mongoUri, { useUnifiedTopology: true}, { useNewUrlParser: true }, { connectTimeoutMS: 30000 }, { keepAlive: 1})

// Exports
module.exports.client = client;