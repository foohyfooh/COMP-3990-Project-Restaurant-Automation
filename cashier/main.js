const express = require('express');
const app = express();
app.use('/', express.static('/public'));
app.listen(8081, () => {
  console.log('Listening on port 8081');
});