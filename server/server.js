const express = require('express');
let app = express();
const port = 4000;
const path = require('path');

app.use(express.static(path.join(__dirname, '.')));

app.listen(port, () => {
  console.log(`proxy server listening on port ${port}`);
});
