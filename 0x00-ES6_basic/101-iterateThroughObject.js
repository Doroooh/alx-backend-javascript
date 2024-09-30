// Default export function to iterate through an object that implements the iterator protocol
export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty array to store the employees
  const employees = [];

  // Iterate over each employee in the report using the iterator
  for (const employee of reportWithIterator) {
    employees.push(employee); // Add the current employee to the employees array
  }

  // Return a string of all employees joined by ' | '
  return employees.join(' | ');
}
