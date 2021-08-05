const express = require('express')
const app = express();
const { client } = require('./mongoClient')

app.use(express.static(__dirname + '/static'));
app.use(express.json());

client.connect(async () => {
    app.listen(8000, () => {
        console.log(`your server is running at http://localhost:8000`)
    });
})

module.exports.app = app;