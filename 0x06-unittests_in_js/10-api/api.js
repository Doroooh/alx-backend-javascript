// Import the express library to create the app
const express = require('express');

// Initialize the Express application
const app = express();

// Define the port on which the server will listen
const port = 7865;

// Use express middleware to parse JSON bodies in request
app.use(express.json());

// Define the root route for GET requests
app.get('/', (req, res) => {
  // Respond with a simple welcome message when the root route is accessed
  res.end('Welcome to the payment system');
});

// Define a dynamic route for GET requests that expects a cart ID (only numeric)
app.get('/cart/:id([0-9]+)', (req, res) => {
  // Extract the cart ID from the URL parameters and return a response with the payment methods for that cart
  res.end(`Payment methods for cart ${req.params.id}`);
});

// Define a route for GET requests to fetch available payment methods
app.get('/available_payments', (req, res) => {
  // Create an object with available payment methods and send it as a JSON response
  const obj = {
    payment_methods: {
      credit_cards: true,  // Credit cards are accepted
      paypal: false,       // PayPal is not accepted
    },
  };
  res.json(obj);
});

// Define a route for POST requests to handle user login
app.post('/login', (req, res) => {
  // Extract the username from the JSON body of the request
  const username = req.body.userName;
  // Respond with a personalized message using the extracted username
  res.end(`Welcome ${username}`);
});

// Start the server and listen on the defined port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log('API available on localhost port 7865');
});
