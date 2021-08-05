const { MongoClient } = require('mongodb');
const { mongoUri } = require('./config');
const client = new MongoClient(mongoUri)
module.exports.client = client;