// file to contain test cases of the updated calculateNumber function
// using the Chai assertion library

const expect = require('chai').expect;
const { describe, it } = require('mocha');
const assert = require('assert');
const calculateNumber = require('./2-calcul_chai');

// Test suite for calculateNumber with different operations
describe('calculateNumber', function () {
  describe('SUM operation', function () {
    it('should return 6 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT operation', function () {
    it('should return -3 when inputs are 1 and 3.7', function () {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
  });

  describe('DIVIDE operation', function () {
    it('should return 3.5 when inputs are 6.9 and 1.7', function () {
      expect(calculateNumber('DIVIDE', 6.9, 1.7)).to.equal(3.5);
    });

    it('should return "Error" when inputs are 1.4 and 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  // Additional edge cases
  describe('Edge cases', function () {
    it('should return 0 when inputs are 0.1 and -0.1 with SUM', function () {
      expect(calculateNumber('SUM', 0.1, -0.1)).to.equal(0);
    });

    it('should return -2 when inputs are -1.2 and -1.2 with SUM', function () {
      expect(calculateNumber('SUM', -1.2, -1.2)).to.equal(-2);
    });

    it('should throw an error for an invalid operation type', function () {
      assert.strictEqual(calculateNumber('MULTIPLY', 1.4, 4.5), 'Error');
    });
  });
});
