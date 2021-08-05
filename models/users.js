const { client } = require('../mongoClient');
const db = client.db('sample_airbnb');

async function postAsync(payload) {
    try {
        let cursor = await db.collection("users").insertOne(payload)
        return cursor;
    } catch (e) {
       throw e;
    } 
}

async function getAsync(name) {
    try {
        if (!name) {
            return await db.collection("users").find().toArray()
        }
        return await db.collection("users").findOne({ name: name });
    } catch (e) {
        throw e;
    } 
}

module.exports.getAsync = getAsync;
module.exports.postAsync = postAsync;