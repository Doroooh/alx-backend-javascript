// Function to get  current year
function getCurrentYear() {
  const date = new Date(); // Creating new Date object representing the current date and time
  return date.getFullYear(); // Returning the full year (e.g., 2021)
}

// Default export function to create a budget object for the current year
export default function getBudgetForCurrentYear(income, gdp, capita) {
  // Creaing budget object with dynamic property names based on the current year
  const budget = {
    [`income-${getCurrentYear()}`]: income,  // Key: 'income-YYYY' where YYYY is the current year, value: income
    [`gdp-${getCurrentYear()}`]: gdp,        // Key: 'gdp-YYYY', value: gdp
    [`capita-${getCurrentYear()}`]: capita,  // Key: 'capita-YYYY', value: capita
  };

  return budget; // Return the budget object
}
