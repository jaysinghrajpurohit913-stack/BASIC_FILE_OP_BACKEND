const express = require('express');
const router  = require('./routes/file.routes');
const app = express();

app.use(express.json());


app.use('/files', router);

module.exports = app;