const request = require('request');
const { describe, it } = require('mocha');
const expect = require('chai').expect;
const server = require('./api'); // Ensure the server is imported so it starts when the tests run

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('should return status code 200', (done) => {
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  after((done) => {
    server.close(done); // Close the server after all tests
  });
});

describe('Cart page', function () {
  it('check correct status code for correct url', function (done) {
    request.get('http://localhost:7865/cart/12', function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it.skip('check correct content for correct url', function (done) {
    request.get('http://localhost:7865/cart/12', function (err, res, body) {
      expect(body).to.contain('Payment methods for cart 12');
      done();
    });
  });
  it.skip('check correct status code for incorrect url', function (done) {
    request.get('http://localhost:7865/cart/kim', function (err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
