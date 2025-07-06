const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
process.env.TZ = 'America/Sao_Paulo';
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

module.exports = app;