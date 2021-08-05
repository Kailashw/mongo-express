const express = require('express');
const app = express();

const { client } = require('./mongoClient')
const config = require('./config');

const PORT = config.port;

app.use(express.static(__dirname + '/static'));
app.use(express.json());

client.connect(async () => {
    app.listen(PORT, (port=PORT) => {
        console.log(`your server is running at http://localhost:${port}`)
    });
})

module.exports.app = app;