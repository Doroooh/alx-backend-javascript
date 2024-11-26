import fs from 'fs';

/**
 * Reads and processes student data from a CSV file.
 * @param {string} filePath Path to the CSV file.
 * @returns {Promise<object>} A promise resolving to an object grouping students by their fields of study.
 */
export const fetchStudentData = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (error, fileContent) => {
    // Handle any file reading errors
    if (error) {
      return reject(new Error('Cannot load the database'));
    }

    const records = fileContent.trim().split('\n'); // Split file into lines
    const studentGroups = {}; // Object to store students grouped by field

    records.forEach((record, index) => {
      // Skip the header row
      if (index === 0) {
        return;
      }

      // Destructure the relevant fields from the line
      const [firstName, lastName, age, field] = record.split(',');

      // Initialize the group if it doesn't exist
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      // Add the full name of the student to the appropriate group
      studentGroups[field].push(`${firstName.trim()} ${lastName.trim()}`);
    });

    resolve(studentGroups); // Resolve the promise with the grouped data
  });
});
