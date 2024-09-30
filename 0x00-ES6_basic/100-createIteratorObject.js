// Default export function to create an iterator object from a report of employees
export default function createIteratorObject(report) {
  // Create and return a generator function that yields employees from all departments
  return (function* _() {
    // Iterate over each department in the report's allEmployees object
    for (const department of Object.values(report.allEmployees)) {
      // Iterate over each employee in the current department
      for (const employee of department) {
        yield employee; // Yield the current employee, making it available to the iterator
      }
    }
  }()); // Immediately invoke the generator function to return the iterator
}
