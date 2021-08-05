const { MongoClient } = require('mongodb');
const { mongoUri } = require('./config');
const uri = mongoUri;
const client = new MongoClient(uri)
module.exports.client = client;