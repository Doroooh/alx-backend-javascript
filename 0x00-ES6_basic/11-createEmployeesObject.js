// Default export function to create an object representing a department and its employees
export default function createEmployeesObject(departmentName, employees) {
  // Return an object with a dynamic key based on departmentName
  return {
    [departmentName]: [ // The key is the department name, and its value is an array of employees
      ...employees, // Spread operator to create a new array that includes all employees
    ],
  };
}
