import { readDatabase } from '../utils.js'; // Import utility function to read database file

export class StudentsController {
  // Fetch and return all students, grouped and sorted by their major
  static async getAllStudents(req, res) {
    try {
      const dbFilePath = process.argv[2]; // Extract the file path for the database from command-line arguments
      const fields = await readDatabase(dbFilePath); // Read the database file to get student data

      // Sort the majors alphabetically, ignoring case sensitivity
      const fieldsSorted = Object.keys(fields).sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
      );

      // Create a list that will contain formatted strings about student counts and lists by major
      const lines = [
        'This is the list of our students',
        ...fieldsSorted.map((field) => {
          const students = fields[field].sort(); // Sort the list of students by name
          return `Number of students in ${field}: ${
            students.length
          }. List: ${students.join(', ')}`; // Construct a line for each field with the student names
        }),
      ];

      // Send back the formatted response to the client
      res.status(200).send(lines.join('\n'));
    } catch (err) {
      // In case of an error, send an error message with status 500
      res.status(500).send('Cannot load the database');
    }
  }

  // Fetch and return students from a specific major (CS or SWE)
  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase(); // Get the major from the request parameter and ensure it's uppercase

    // Validate that the major is either 'CS' or 'SWE'
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE'); // If invalid, send an error response
      return;
    }

    try {
      // Read the student data from the database file
      const fields = await readDatabase(req.app.locals.dbFilePath);
      
      // Retrieve the students for the specified major, ensuring only first names are included
      const students = fields[major] ? fields[major].map(name => name.split(" ")[0]) : [];

      // Send the list of student names for the specified major
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (err) {
      // Handle errors by sending a failure response
      res.status(500).send('Cannot load the database');
    }
  }
}
