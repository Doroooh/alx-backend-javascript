// Import required modules
const assert = require('assert'); // Assertion library for testing
const mocha = require('mocha'); // Testing framework (not used directly here)

// Import the calculateNumber function to be tested
const calculateNumber = require('./1-calcul');

// Define constants for operation types
const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';
const INVALID = 'INVALID';

// Describe the main test suite for the 'calculateNumber' function
describe('calculateNumber', () => {
  // Test suite for SUM operation
  describe('type SUM', () => {
    // Test case: Function should return the sum of integers
    it('should return sum of integers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4); // Both integers
      assert.strictEqual(calculateNumber(SUM, 2, -2), 0); // Includes a negative integer
      assert.strictEqual(calculateNumber(SUM, 1, -4), -3); // Positive and negative integer
    });

    // Test case: Function should return the sum of rounded floats
    it('should return sum of rounded floats', () => {
      assert.strictEqual(calculateNumber(SUM, 1.4, 5), 6); // First parameter rounds down
      assert.strictEqual(calculateNumber(SUM, 1, 4.5), 6); // Second parameter rounds up
      assert.strictEqual(calculateNumber(SUM, 1.4, 4.5), 6); // Both parameters round
      assert.strictEqual(calculateNumber(SUM, 8, -8.2), 0); // Mixed positive and negative
      assert.strictEqual(calculateNumber(SUM, 7.8, -8), 0); // Same with reversed rounding
      assert.strictEqual(calculateNumber(SUM, 7.8, -8.2), 0); // Both round
      assert.strictEqual(calculateNumber(SUM, 3, -5.2), -2); // Negative sum
      assert.strictEqual(calculateNumber(SUM, 3.1, -5), -2); // Same result, reversed
      assert.strictEqual(calculateNumber(SUM, 3.1, -5.2), -2); // Both parameters round
    });

    // Test case: Function should return rounded input if only one parameter is provided
    it('should return rounded number if only one is provided', () => {
      assert.strictEqual(calculateNumber(SUM, 8.7), 9); // Rounds up
      assert.strictEqual(calculateNumber(SUM, 0.3), 0); // Rounds down
      assert.strictEqual(calculateNumber(SUM, -8.7), -9); // Rounds negative number
    });
  });

  // Test suite for SUBTRACT operation
  describe('type SUBTRACT', () => {
    // Test case: Function should return the difference of integers
    it('should return difference of integers', () => {
      assert.strictEqual(calculateNumber(SUBTRACT, 5, 1), 4); // Positive difference
      assert.strictEqual(calculateNumber(SUBTRACT, 5, 5), 0); // Zero difference
      assert.strictEqual(calculateNumber(SUBTRACT, 1, 5), -4); // Negative difference
    });

    // Test case: Function should return the difference of rounded floats
    it('should return difference of rounded floats', () => {
      assert.strictEqual(calculateNumber(SUBTRACT, 8.6, 4.1), 5); // Both round
      assert.strictEqual(calculateNumber(SUBTRACT, 10.2, 9.8), 0); // Result rounds to zero
      assert.strictEqual(calculateNumber(SUBTRACT, 8.2, 9.2), -1); // Negative difference
    });

    // Test case: Function should return rounded input if only one parameter is provided
    it('should return rounded number if only one is provided', () => {
      assert.strictEqual(calculateNumber(SUBTRACT, 8.7), 9); // Rounds up
      assert.strictEqual(calculateNumber(SUBTRACT, 0.3), 0); // Rounds down
      assert.strictEqual(calculateNumber(SUBTRACT, -8.7), -9); // Rounds negative number
    });
  });

  // Test suite for DIVIDE operation
  describe('type DIVIDE', () => {
    // Test case: Function should return the quotient of integers
    it('should return quotient of integers', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 9, 4), 2.25); // Positive division
      assert.strictEqual(calculateNumber(DIVIDE, -9, 4), -2.25); // Negative numerator
      assert.strictEqual(calculateNumber(DIVIDE, 9, -4), -2.25); // Negative denominator
      assert.strictEqual(calculateNumber(DIVIDE, -9, -4), 2.25); // Both negative
    });

    // Test case: Function should return the quotient of rounded floats
    it('should return quotient of non-zero rounded floats', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 1.6, 5.2), 0.4); // Both round
      assert.strictEqual(calculateNumber(DIVIDE, -1.6, 5.2), -0.4); // Negative numerator
      assert.strictEqual(calculateNumber(DIVIDE, -2, -5.2), 0.4); // Both negative
    });

    // Test case: Function should return 0 if the dividend rounds to 0
    it('should return 0 if dividend rounds to 0', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 0.3, 3.6), 0); // Dividend rounds down
      assert.strictEqual(calculateNumber(DIVIDE, -0.3, 3.6), 0); // Negative dividend
    });

    // Test case: Function should return "ERROR" if divisor rounds to 0
    it('should return "ERROR" if divisor rounds to 0', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 8.4, 0.4), 'ERROR'); // Divisor rounds down
      assert.strictEqual(calculateNumber(DIVIDE, 8.4, -0.4), 'ERROR'); // Negative divisor
    });
  });

  // Test suite for invalid operation type
  describe('invalid operation type', () => {
    // Test case: Function should throw an error for invalid operation type
    it('should throw error if type is invalid', () => {
      assert.throws(() => calculateNumber(INVALID, 5.7, 4.6), {
        message: 'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
      });
    });
  });
});
