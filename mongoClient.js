const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:admin@shreya.ig9nc.mongodb.net";
const client = new MongoClient(uri)
module.exports.client = client;