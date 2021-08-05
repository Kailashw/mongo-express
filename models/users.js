const { client } = require('../mongoClient');
const db = client.db('sample_airbnb');

// used to post(create) new user object in mongo collection.
async function postAsync(payload) {
    try {
        let cursor = await db.collection("users").insertOne(payload)
        return cursor;
    } catch (e) {
       throw e;
    } 
}

// returns user details by name if name is passed or
// returns list of users.
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