export default function getBudgetObject(income, gdp, capita) {
  // Creating object budget with properties 'income', 'gdp', and 'capita'
  // The property names and the variable names are the same
  const budget = {
    income, // Represents income for the budget
    gdp,    // Represents GDP for the budget
    capita, // Represents per capita income for the budget
  };

  // Return the budget object with the specified properties
  return budget;
}
