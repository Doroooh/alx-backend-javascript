// Import the router from the specified routes module
import apiRoutes from './routes';

const express = require('express'); // Load the Express framework
const server = express(); // Initialize an Express application

// Attach the router to handle requests starting from the root URL
server.use('/', apiRoutes);

// Define the port where the server will listen for incoming requests
const SERVER_PORT = 1245;

// Start the server and log a message indicating it is running
server.listen(SERVER_PORT, () => {
  console.log(`Application is live and listening on port ${SERVER_PORT}`);
});

// Export the server instance for external use
export default server;
