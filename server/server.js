const express = require('express');
let app = express();
const port = 4000;
const path = require('path');
var proxy = require('http-proxy-middleware');

app.use(express.static(path.join(__dirname, './')));

app.use('/', proxy({ target: 'http://127.0.0.1:8081/', changeOrigin: true }));

app.listen(port, () => {
  console.log(`proxy server listening on port ${port}`);
});
