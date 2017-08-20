const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '../public');

var app = express();

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log('Server is up and listening on port 3000.');
});