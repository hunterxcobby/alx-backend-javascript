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
