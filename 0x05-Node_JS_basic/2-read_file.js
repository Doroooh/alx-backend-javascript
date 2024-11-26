const fs = require('fs');

function countStudents(filepath) {
  try {
    const csv = fs.readFileSync(filepath, { encoding: 'utf8' }); // Reading the CSV file content as a string
    const headerArray = csv.split(/\r?\n|\n/); // Splitting the content into lines
    const headers = headerArray[0].split(','); // Extracting the headers from the first line

    // Transforming the remaining lines into a list of objects based on headers
    const dictList = [];
    const noHeaderArray = headerArray.slice(1); // Skip the header line
    for (let r = 0; r < noHeaderArray.length; r += 1) {
      const data = noHeaderArray[r].split(','); // Split each line into columns
      if (data.length === headers.length) { // Ensure data matches the number of headers
        const row = {};
        for (let l = 0; l < headers.length; l += 1) {
          row[headers[l].trim()] = data[l].trim(); // Mapping headers to the corresponding values
        }
        dictList.push(row);
      }
    }

    // Initializing variables to count and categorize students by field of study
    let countCS = 0;
    let countSWE = 0;
    const studentsCS = [];
    const studentsSWE = [];

    // Iterating through the list and organize students by their field
    dictList.forEach((element) => {
      if (element.field === 'CS') {
        countCS += 1; // Increment CS student count
        studentsCS.push(element.firstname); // Collect CS student names
      } else if (element.field === 'SWE') {
        countSWE += 1; // Increment SWE student count
        studentsSWE.push(element.firstname); // Collect SWE student names
      }
    });

    const countStudents = countCS + countSWE; // Total number of students

    // Display the results
    console.log(`Number of students: ${countStudents}`);
    console.log(`Number of students in CS: ${countCS}. List: ${studentsCS.toString().split(',').join(', ')}`);
    console.log(`Number of students in SWE: ${countSWE}. List: ${studentsSWE.toString().split(',').join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database'); // Handle errors, such as file not found
  }
}

module.exports = countStudents;
