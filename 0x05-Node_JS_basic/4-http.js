const http = require('http');

/**
 * A simple HTTP server that sends "Hello Holberton School!" as a response to any request.
 * @module simpleHttpServer
 */

/**
 * Function that handles HTTP requests and provide appropriate responses.
 * @param {http.IncomingMessage} req Represents the incoming HTTP request.
 * @param {http.ServerResponse} res Represents the response object sent back to the client.
 */
const requestHandler = (req, res) => {
  // Set the response status and specify the content type as plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Return the response body to the client
  res.end('Hello Holberton School!');
};

// Creating the HTTP server and bind it to the request handler
const server = http.createServer(requestHandler);

// Configuring server to listen for connections on port 1245
server.listen(1245, () => {
  console.log('Server is running on port 1245'); // Log that the server has started
});

// Exporting the server instance for use in other modules
module.exports = server;
