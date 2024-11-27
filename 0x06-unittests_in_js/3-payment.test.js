// Importing required modules
const mocha = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

// Importing the utility and main function modules
const helpers = require('./utils');
const processPayment = require('./3-payment');

describe('processPayment', function () {
  it('should invoke calculateNumber correctly', function () {
    // Spy on the calculateNumber function from helpers
    const calcFunctionSpy = sinon.spy(helpers, 'calculateNumber');
    // Spy on the console log function
    const logOutputSpy = sinon.spy(console, 'log');

    // Execute the function being tested
    const result = processPayment(150, 50);

    // Verify that calculateNumber was called with the correct arguments
    expect(calcFunctionSpy.calledOnceWithExactly('SUM', 150, 50)).to.be.true;
    // Confirm that the console output matches the expected log
    expect(logOutputSpy.calledWithExactly('The total is: 200')).to.be.true;
    // Check that the result matches the utility function's return value
    expect(helpers.calculateNumber('SUM', 150, 50)).to.equal(result);

    // Restore the original functions
    calcFunctionSpy.restore();
    logOutputSpy.restore();
  });
});
