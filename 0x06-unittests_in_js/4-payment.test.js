// 4-payment.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(function () {
    // Stub the Utils.calculateNumber function to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20', function () {
    // Call the function
    sendPaymentRequestToApi(100, 20);
    // Verify that the stub is called with the correct arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be
      .true;
  });

  it('should log the correct total', function () {
    // Call the function
    sendPaymentRequestToApi(100, 20);
    // Verify that console.log is called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
