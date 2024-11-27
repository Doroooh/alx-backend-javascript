// Import required modules
const assert = require('assert'); // Assertion library for testing
const mocha = require('mocha'); // Testing framework (not used directly here)

// Import the calculateNumber function to be tested
const calculateNumber = require('./0-calcul');

// Describe the test suite for the 'calculateNumber' function
describe('calculateNumber', () => {
  // Test case: Function should return the sum of integers
  it('should return sum of integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4); // Both numbers are integers
    assert.strictEqual(calculateNumber(1, -1), 0); // Includes a negative integer
    assert.strictEqual(calculateNumber(1, -3), -2); // Sum of a positive and a negative integer
  });

  // Test case: Function should round floats before summing
  it('should round floats', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5); // Second parameter rounds up
    assert.strictEqual(calculateNumber(1.2, 3.7), 5); // Both parameters round to integers
    assert.strictEqual(calculateNumber(1.5, 3.7), 6); // First parameter rounds up
    assert.strictEqual(calculateNumber(0.1, 0), 0); // First parameter rounds down to zero
    assert.strictEqual(calculateNumber(1.4, -4.5), -3); // Handles mixed positive and negative floats
  });

  // Test case: Function should handle cases where only one parameter is provided
  it('should return the rounded number if only one is provided', () => {
    assert.strictEqual(calculateNumber(2), 2); // Single integer input
    assert.strictEqual(calculateNumber(2.7), 3); // Single float input rounds up
  });

  // Test case: Function should cast non-number inputs to numbers if possible
  it('should cast non-numbers into numbers', () => {
    assert.strictEqual(calculateNumber(true, '3'), 4); // Boolean and string are coerced to numbers
    assert.strictEqual(calculateNumber(1, '3.7'), 5); // String float is converted to a number
    assert.strictEqual(calculateNumber('1.2', 3.7), 5); // String float and float are converted
  });

  // Test case: Function should throw an error if inputs cannot be coerced to numbers
  it('should throw typeerror if either param cannot be coerced to a number', () => {
    assert.throws(
      () => calculateNumber('hello'), // Non-numeric string input
      {
        name: 'TypeError', // Expected error type
        message: 'Parameters must be numbers', // Expected error message
      }
    );
    assert.throws(
      () => calculateNumber(1.2, 'dog'), // Mixed valid and invalid inputs
      {
        name: 'TypeError',
        message: 'Parameters must be numbers',
      }
    );
  });
});
