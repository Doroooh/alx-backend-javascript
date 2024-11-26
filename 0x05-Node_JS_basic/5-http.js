const http = require('http'); // Import HTTP module to create the server
const fs = require('fs'); // Import File System module for file operations

// Define constants for server configuration
const PORT = 1245; // Port the server will listen on
const HOST = 'localhost'; // Host address for the server
const app = http.createServer(); // Create an HTTP server instance
const DB_FILE = process.argv[2] || ''; // Database file path from command-line arguments

/**
 * Reads and processes a CSV file to count students and group them by field.
 * @param {string} dataPath Path to the CSV file containing student data.
 * @returns {Promise<string>} A promise that resolves to a formatted report of student counts.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Check if the file path is provided
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  } else {
    fs.readFile(dataPath, (err, data) => {
      // Handle file read errors
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const reportLines = [];
        const lines = data.toString('utf-8').trim().split('\n'); // Parse file content
        const headers = lines[0].split(','); // Extract column headers
        const studentGroups = {};

        // Process each line of student data
        lines.slice(1).forEach((line) => {
          const details = line.split(',');
          const field = details.pop(); // Get the field (last column)
          if (!studentGroups[field]) {
            studentGroups[field] = [];
          }
          // Map student details to an object using headers
          const student = Object.fromEntries(
            headers.slice(0, -1).map((header, index) => [header, details[index]])
          );
          studentGroups[field].push(student);
        });

        // Compute and format the report
        const totalStudents = Object.values(studentGroups).reduce((sum, group) => sum + group.length, 0);
        reportLines.push(`Number of students: ${totalStudents}`);
        for (const [field, students] of Object.entries(studentGroups)) {
          reportLines.push(`Number of students in ${field}: ${students.length}. List: ${students.map(s => s.firstname).join(', ')}`);
        }

        resolve(reportLines.join('\n')); // Resolve with the formatted report
      }
    });
  }
});

// Define route handlers for the server
const ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const response = 'Hello Holberton School!';
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(response);
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(responseParts.join('\n'));
        })
        .catch((err) => {
          responseParts.push(err.message || 'Error processing student data');
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(responseParts.join('\n'));
        });
    },
  },
];

// Listen for incoming requests and route them appropriately
app.on('request', (req, res) => {
  const handler = ROUTE_HANDLERS.find((route) => route.route === req.url);
  if (handler) {
    handler.handler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Start the server and log its address
app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});

// Export the app instance for testing or further use
module.exports = app;
