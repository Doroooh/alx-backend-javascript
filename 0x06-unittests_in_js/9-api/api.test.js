const request = require('request');
const { expect } = require('chai');

describe('API Integration Tests', () => {
  describe('GET /', () => {
    it('should return 200 with "Hello from the payment system" message', (done) => {
      const requestOptions = {
        url: 'http://localhost:8080',
        method: 'GET',
      };

      request(requestOptions, function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Hello from the payment system');
        done();
      });
    });
  });

  describe('GET /cart/1', () => {
    it('should return 200 with correct cart id 1 in message', (done) => {
      const requestOptions = {
        url: 'http://localhost:8080/cart/1',
        method: 'GET',
      };

      request(requestOptions, function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Available payment options for cart 1');
        done();
      });
    });
  });

  describe('GET /cart/5', () => {
    it('should return 200 with correct cart id 5 in message', (done) => {
      const requestOptions = {
        url: 'http://localhost:8080/cart/5',
        method: 'GET',
      };

      request(requestOptions, function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Available payment options for cart 5');
        done();
      });
    });
  });

  describe('GET /cart/100', () => {
    it('should return 200 with correct cart id 100 in message', (done) => {
      const requestOptions = {
        url: 'http://localhost:8080/cart/100',
        method: 'GET',
      };

      request(requestOptions, function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Available payment options for cart 100');
        done();
      });
    });
  });

  describe('GET /cart/xyz', () => {
    it('should return 404 as invalid cart id', (done) => {
      const requestOptions = {
        url: 'http://localhost:8080/cart/xyz',
        method: 'GET',
      };

      request(requestOptions, function (err, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/abc123', () => {
    it('should return 404 as invalid cart id', (done) => {
      const requestOptions = {
        url: 'http://localhost:8080/cart/abc123',
        method: 'GET',
      };

      request(requestOptions, function (err, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/12abc', () => {
    it('should return 404 as invalid cart id', (done) => {
      const requestOptions = {
        url: 'http://localhost:8080/cart/12abc',
        method: 'GET',
      };

      request(requestOptions, function (err, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/empty', () => {
    it('should return 404 as cart id is not a number', (done) => {
      const requestOptions = {
        url: 'http://localhost:8080/cart/empty',
        method: 'GET',
      };

      request(requestOptions, function (err, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/', () => {
    it('should return 404 as no cart id provided', (done) => {
      const requestOptions = {
        url: 'http://localhost:8080/cart/',
        method: 'GET',
      };

      request(requestOptions, function (err, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });
});
