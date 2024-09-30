// Import the function getBudgetObject from the specified module
import getBudgetObject from './7-getBudgetObject';

// Default export function to create a full budget object
export default function getFullBudgetObject(income, gdp, capita) {
  // Call getBudgetObject to create a budget object with income, gdp, and capita
  const budget = getBudgetObject(income, gdp, capita);

  // Creating new object called fullBudget that combines the budget object with additional methods
  const fullBudget = {
    ...budget, // Spreading operator to include all properties from the budget object

    // Method to get income formatted in dollars
    getIncomeInDollars(income) {
      return `$${income}`; // Returning income prefixed with a dollar sign
    },

    // Method to get income formatted in euros
    getIncomeInEuros(income) {
      return `${income} euros`; // Returning income suffixed with 'euros'
    },
  };

  return fullBudget; // Returning full budget object with methods
}
