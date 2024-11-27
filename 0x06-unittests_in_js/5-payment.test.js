const mocha = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

// Import the function under test
const processApiPayment = require('./5-payment');

describe('processApiPayment', function () {
  let logSpy;

  // Setup spy before each test
  beforeEach(() => {
    logSpy = sinon.spy(console, 'log');
  });

  // Restore the original method after each test
  afterEach(() => {
    logSpy.restore();
  });

  it('should log "The total is: 150" when inputs are 120 and 30', function () {
    processApiPayment(120, 30);
    expect(logSpy.calledOnceWithExactly('The total is: 150')).to.be.true;
    expect(logSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 50" when inputs are 25 and 25', function () {
    processApiPayment(25, 25);
    expect(logSpy.calledOnceWithExactly('The total is: 50')).to.be.true;
    expect(logSpy.calledOnce).to.be.true;
  });
});
