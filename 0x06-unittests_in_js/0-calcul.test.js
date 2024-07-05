// file to contain test cases of the calculateNumber function

const assert = require('assert');
const { describe, it} = require('mocha');
const calculateNumber = require('./0-calcul');

// Testsuite for calculateNumber function
describe('calculateNumber', function () {
  // test cases
  it('should return 4 when inputs are 1 and 3', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1 and 3.7', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Additional edge cases
  it('should return 0 when inputs are 0.1 and -0.1', function () {
    assert.strictEqual(calculateNumber(0.1, -0.1), 0);
  });

  it('should return -2 when inputs are -1.2 and -1.2', function () {
    assert.strictEqual(calculateNumber(-1.2, -1.2), -2);
  });
});
