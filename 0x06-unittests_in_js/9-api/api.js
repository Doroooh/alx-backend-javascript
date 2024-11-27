const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello! You have reached the payment gateway');
});

app.get('/checkout/:cartId([0-9]+)', (req, res) => {
  res.send(`Available payment methods for cart number ${req.params.cartId}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
