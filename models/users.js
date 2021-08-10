const { client } = require('../utils/mongoClient');
const {db_name}=require('../utils/config')
const db = client.db(db_name);

// used to post(create) new user object in mongo collection.

async function postAsync(payload) {
    try {
        return await db.collection("users").insertOne(payload)
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
        return await db.collection("users").findOne({ name: name});
    } catch (e) {
        console.log(`e ==> `, e );
        throw e;
    } 
}

module.exports.getAsync = getAsync;
module.exports.postAsync = postAsync;