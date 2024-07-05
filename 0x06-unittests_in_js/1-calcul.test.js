// file to contain test cases of the updated calculateNumber function

const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

// Test suite for calculateNumber with different operations
describe('calculateNumber', function () {
  describe('SUM operation', function () {
    it('should return 6 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT operation', function () {
    it('should return -4 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE operation', function () {
    it('should return 0.2 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when inputs are 1.4 and 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  // Additional edge cases
  describe('Edge cases', function () {
    it('should return 0 when inputs are 0.1 and -0.1 with SUM', function () {
      assert.strictEqual(calculateNumber('SUM', 0.1, -0.1), 0);
    });

    it('should return -2 when inputs are -1.2 and -1.2 with SUM', function () {
      assert.strictEqual(calculateNumber('SUM', -1.2, -1.2), -2);
    });

    it('should throw an error for an invalid operation type', function () {
      assert.strictEqual(calculateNumber('MULTIPLY', 1.4, 4.5), 'Error');
    });
  });
});
