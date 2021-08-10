// library imports
const express = require('express');
const app = express();

// internal imports
const { client } = require('./utils/mongoClient')
const config = require('./utils/config');
const router = require('./routes/index');

// Declarations
const PORT = config.port;

app.use(express.static(__dirname + '/static'));
app.use(express.json());

app.use(router);

// connect to mongo and listen to the server.
client.connect(() => {
    app.listen(PORT, (port = PORT) => {
        console.log(`your server is running at http://localhost:${port}`)
    });
})