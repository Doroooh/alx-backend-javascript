// Importing the Chai assertion library
const chai = require('chai');
// Importing the custom calculation function
const performCalculation = require('./2-calcul_chai');

// Main test suite for the performCalculation function
describe('performCalculation', function () {
  // Group tests for SUM operation
  describe('Operation: ADD', function () {
    it('should return 5 without rounding', function () {
      chai.expect(performCalculation('SUM', 1, 4)).to.equal(5);
    });

    it('should return 6 when first number is rounded', function () {
      chai.expect(performCalculation('SUM', 2.4, 4)).to.equal(6);
    });

    it('should return 6 when second number is rounded', function () {
      chai.expect(performCalculation('SUM', 4, 2.4)).to.equal(6);
    });

    it('should return 6 when both numbers are rounded', function () {
      chai.expect(performCalculation('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  // Group tests for SUBTRACT operation
  describe('Operation: DEDUCT', function () {
    it('should return 2 without rounding', function () {
      chai.expect(performCalculation('SUBTRACT', 5, 3)).to.equal(2);
    });

    it('should return -3 when the first number is rounded', function () {
      chai.expect(performCalculation('SUBTRACT', 2, 4.5)).to.equal(-3);
    });

    it('should return 3 when the second number is rounded', function () {
      chai.expect(performCalculation('SUBTRACT', 4.5, 2)).to.equal(3);
    });

    it('should return -4 when both numbers are rounded', function () {
      chai.expect(performCalculation('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  // Group tests for DIVIDE operation
  describe('Operation: SPLIT', function () {
    it('should return 2 without rounding', function () {
      chai.expect(performCalculation('DIVIDE', 8, 4)).to.equal(2);
    });

    it('should return 5 when the first number is rounded', function () {
      chai.expect(performCalculation('DIVIDE', 9.5, 2)).to.equal(5);
    });

    it('should return 0.2 when the second number is rounded', function () {
      chai.expect(performCalculation('DIVIDE', 2, 9.5)).to.equal(0.2);
    });

    it('should return 0.2 when both numbers are rounded', function () {
      chai.expect(performCalculation('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when divisor is zero', function () {
      chai.expect(performCalculation('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
