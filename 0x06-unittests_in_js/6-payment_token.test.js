const mocha = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

// Import the function to test
const fetchPaymentToken = require('./6-payment_token');

describe('fetchPaymentToken', function () {
  it('should return a resolved promise when success is true', function (done) {
    fetchPaymentToken(true)
      .then((response) => {
        expect(response).to.deep.equal({ message: 'Payment token retrieved successfully' });
        done();
      })
      .catch((error) => done(error));
  });

  it('should not resolve when success is false', function (done) {
    fetchPaymentToken(false)
      .then(() => {
        done(new Error('Promise should not resolve when success is false'));
      })
      .catch(() => {
        // Expected behavior: promise rejects
        done();
      });
  });
});
