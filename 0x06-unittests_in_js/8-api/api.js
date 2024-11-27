const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {
  res.send('Welcome to our payment gateway');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
