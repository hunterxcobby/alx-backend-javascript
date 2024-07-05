// create file named 0-calcul.js that contains a function
// that takes 2 args and returns the sum of these args

/**
 * Rounds the numbers a and b and returns their sum
 * @param {number} a - The first number (int or float)
 * @param {number} b - The second number (int or float)
 * @returns {number} The sum of a and b
 */

function calculateNumber(a, b) {
  // we round the numbers
  const aApprox = Math.round(a);
  const bApprox = Math.round(b);

  // return sum of rounded numbers
  return aApprox + bApprox;
}

module.exports = calculateNumber;
