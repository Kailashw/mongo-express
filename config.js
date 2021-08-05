// external imports
const dotenv = require('dotenv');

// Declaration
dotenv.config();

module.exports = {
    mongoUri: process.env.MONGO_URL,
    port : process.env.PORT
};