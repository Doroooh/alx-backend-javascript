const fs = require('fs');

async function countStudents(filepath) {
  try {
    // Read the content of the CSV file asynchronously
    const csv = await fs.promises.readFile(filepath, { encoding: 'utf8' });
    const lines = csv.split(/\r?\n|\n/); // Break the content into individual lines
    const headers = lines[0].split(','); // Extract column headers from the first line

    // Parse the remaining lines into an array of objects using headers as keys
    const records = [];
    const dataLines = lines.slice(1); // Exclude the header line
    for (let r = 0; r < dataLines.length; r += 1) {
      const columns = dataLines[r].split(','); // Split a line into individual fields
      if (columns.length === headers.length) { // Ensure data aligns with headers
        const record = {};
        for (let l = 0; l < headers.length; l += 1) {
          record[headers[l].trim()] = columns[l].trim(); // Map fields to corresponding headers
        }
        records.push(record);
      }
    }

    // Initialize variables to count students and group their names by field of study
    let csCount = 0;
    let sweCount = 0;
    const csStudents = [];
    const sweStudents = [];

    // Categorize students by their field and tally their counts
    records.forEach((student) => {
      if (student.field === 'CS') {
        csCount += 1; // Increment count for CS students
        csStudents.push(student.firstname); // Add student name to CS list
      } else if (student.field === 'SWE') {
        sweCount += 1; // Increment count for SWE students
        sweStudents.push(student.firstname); // Add student name to SWE list
      }
    });

    const totalStudents = csCount + sweCount; // Calculate total number of students

    // Output the summary of student data
    console.log(`Number of students: ${totalStudents}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweStudents.join(', ')}`);
  } catch (err) {
    // Handle errors gracefully, e.g., missing or unreadable file
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
