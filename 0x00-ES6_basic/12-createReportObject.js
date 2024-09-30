// Default export function to create a report object based on a list of employees
export default function createReportObject(employeesList) {
  // Return an object with two properties: allEmployees and a method to get the number of departments
  return {
    allEmployees: { ...employeesList }, // Use the spread operator to create a copy of employeesList

    // Method to get the number of departments in the provided list
    getNumberOfDepartments(list) {
      return Object.keys(list).length; // Return the number of keys (departments) in the list
    },
  };
}
