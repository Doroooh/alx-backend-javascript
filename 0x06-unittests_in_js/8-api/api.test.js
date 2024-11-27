const request = require('request');
const { expect } = require('chai');

describe('API Integration Tests', () => {
  describe('GET /', () => {
    it('Should return status 200 and message "Welcome to the payment gateway"', (done) => {
      const requestOptions = {
        url: 'http://localhost:9000',
        method: 'GET',
      };

      request(requestOptions, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment gateway');
        done();
      });
    });
  });
});
