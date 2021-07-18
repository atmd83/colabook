const compression = require('compression');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const server = require('http').Server(app);

app.use(express.json());
app.use(compression());

app.use(cors());

app.get('/health', (req, res) => res.send('ok'));

app.use('/availability', require('./availability'));
app.use('/bookings', require('./booking'));

app.use(express.static(path.join(__dirname, '../../', 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../', 'build', 'index.html'));
});

module.exports = server;
