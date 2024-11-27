// Import necessary modules
const mocha = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

// Import utilities and the function under test
const calculations = require('./utils');
const processTransaction = require('./3-payment');

describe('processTransaction', function () {
  it('should properly invoke calculateNumber', function () {
    // Create a stub for the calculateNumber function
    const calculateStub = sinon.stub(calculations, 'calculateNumber');
    calculateStub.returns(15); // Mocking return value of the stub

    // Spy on the console.log method
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function under test
    const result = processTransaction(50, 30);

    // Assertions
    expect(calculateStub.calledOnceWithExactly('SUM', 50, 30)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 15')).to.be.true;
    expect(calculations.calculateNumber('SUM', 50, 30)).to.equal(result);

    // Restore original methods
    calculateStub.restore();
    consoleSpy.restore();
  });
});
