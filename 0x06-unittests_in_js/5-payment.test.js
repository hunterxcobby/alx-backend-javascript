// 5-payment.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(function () {
    // Create a spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the spy after each test
    consoleSpy.restore();
  });

  it('should log the correct total for input (100, 20)', function () {
    // Call the function with input (100, 20)
    sendPaymentRequestToApi(100, 20);
    // Verify that console.log is called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct total for input (10, 10)', function () {
    // Call the function with input (10, 10)
    sendPaymentRequestToApi(10, 10);
    // Verify that console.log is called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
