const express = require('express'); // Import Express framework
const fs = require('fs'); // Import File System module for file operations

/**
 * Reads and analyzes student data from a CSV file.
 * @param {string} filePath Path to the CSV file.
 * @returns {Promise<object>} A promise that resolves with the processed student data.
 */
function analyzeStudentData(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, content) => {
      // Handle file read errors
      if (error) return reject(new Error('Cannot load the database'));

      const lines = content.trim().split(/\r?\n|\n/); // Split content into lines
      const headers = lines[0].split(','); // Extract column headers

      const studentRecords = [];
      const dataLines = lines.slice(1); // Exclude header row
      dataLines.forEach((line) => {
        const values = line.split(',');
        if (values.length === headers.length) {
          const student = {};
          headers.forEach((header, idx) => {
            student[header.trim()] = values[idx].trim();
          });
          studentRecords.push(student);
        }
      });

      // Categorize students by field and count them
      const studentGroups = { CS: [], SWE: [] };
      studentRecords.forEach((student) => {
        if (student.field === 'CS') studentGroups.CS.push(student.firstname);
        if (student.field === 'SWE') studentGroups.SWE.push(student.firstname);
      });

      const totalStudents = studentRecords.length;
      resolve({
        totalStudents,
        countCS: studentGroups.CS.length,
        countSWE: studentGroups.SWE.length,
        studentsCS: studentGroups.CS,
        studentsSWE: studentGroups.SWE,
      });
    });
  });
}

// Define the file path and initialize the Express application
const databasePath = process.argv[2];
const app = express();
const port = 1245;

// Route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!'); // Send a simple greeting
});

// Route for retrieving student data
app.get('/students', async (req, res) => {
  try {
    const {
      totalStudents,
      countCS,
      countSWE,
      studentsCS,
      studentsSWE,
    } = await analyzeStudentData(databasePath);

    // Build the response string
    const responseText = [
      'This is the list of our students',
      `Number of students: ${totalStudents}`,
      `Number of students in CS: ${countCS}. List: ${studentsCS.join(', ')}`,
      `Number of students in SWE: ${countSWE}. List: ${studentsSWE.join(', ')}`,
    ].join('\n');

    res.status(200).send(responseText);
  } catch {
    res.status(404).send('Cannot load the database'); // Handle errors gracefully
  }
});

// Start the server and log its address
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Export the application instance for testing or further use
module.exports = app;
