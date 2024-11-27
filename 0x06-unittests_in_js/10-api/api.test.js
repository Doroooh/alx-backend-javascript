// Importing necessary modules for making HTTP requests and handling assertions
const request = require('request');
const { expect } = require('chai');

describe('Integration Testing', () => {

  // Testing the root route "/"
  describe('GET /', () => {
    it('Should return status 200 and "Welcome to the payment system" message', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET', // HTTP GET request
      };

      // Sending the GET request to the root URL
      request(options, function (error, response, body) {
        // Asserting that the response has status 200 and the correct body message
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done(); // Indicating that the test is complete
      });
    });
  });

  // Testing the "/cart/:id" route with a numeric ID
  describe('GET /cart/12', () => {
    it('Should return 200 and message with cart id 12', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/12',
        method: 'GET',
      };

      // Sending GET request for cart 12
      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
  });

  // Testing the "/cart/:id" route with a different numeric ID
  describe('GET /cart/1', () => {
    it('Should return 200 and message with cart id 1', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/1',
        method: 'GET',
      };

      // Sending GET request for cart 1
      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 1');
        done();
      });
    });
  });

  // Testing the "/cart/:id" route with another cart ID
  describe('GET /cart/123', () => {
    it('Should return 200 and message with cart id 123', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/123',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });
  });

  // Testing invalid cart ID format (contains alphabets)
  describe('GET /cart/a12', () => {
    it('Should return 404 for invalid cart ID', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/a12',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404); // 404 for invalid format
        done();
      });
    });
  });

  // Testing another invalid cart ID format
  describe('GET /cart/a12b', () => {
    it('Should return 404 for invalid cart ID format', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/a12b',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404); // Expecting 404 for this invalid input
        done();
      });
    });
  });

  // Testing cart ID with trailing alphabetic characters
  describe('GET /cart/12b', () => {
    it('Should return 404 for cart ID with letters', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/12b',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404); // Invalid ID format returns 404
        done();
      });
    });
  });

  // Testing with a cart ID that doesn't match expected format
  describe('GET /cart/hello', () => {
    it('Should return 404 for cart with non-numeric ID', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/hello',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404); // 404 for non-numeric ID
        done();
      });
    });
  });

  // Testing the "/cart/" route with no ID provided
  describe('GET /cart/', () => {
    it('Should return 404 for missing cart ID in URL', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404); // Missing ID results in 404
        done();
      });
    });
  });

  // Testing the available payment methods endpoint with raw JSON string
  describe('GET /available_payments JSON string', () => {
    it('Should return 200 with correct JSON string', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        // Check if the body contains the correct raw JSON string
        expect(body).to.equal(
          '{"payment_methods":{"credit_cards":true,"paypal":false}}'
        );
        done();
      });
    });
  });

  // Testing the available payment methods endpoint with parsed JSON object
  describe('GET /available_payments JSON parsed', () => {
    it('Should return 200 with correct parsed JSON object', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        const bodyParsed = JSON.parse(body);

        // Define the expected JSON object to match
        const referenceBody = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };

        // Assert that the parsed response body matches the expected object
        expect(bodyParsed).to.deep.equal(referenceBody);
        done();
      });
    });
  });

  // Testing login with a user name in the body
  describe('POST /login with body', () => {
    it('Should return 200 and welcome message for username Betty', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
        json: { userName: 'Betty' }, // Sending JSON with userName
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });

  // Testing login with no user name in the body
  describe('POST /login with no body', () => {
    it('Should return 200 and "undefined" message for missing username', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST', // POST request with no body
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome undefined'); // Default to "undefined" when no username is provided
        done();
      });
    });
  });
});
