// use class and static methods to create a Utils class with a method
// called calculateNumber that accepts three arguments: type, a, and b.
// The method should perform the necessary operation based on type
// and return the result.

class Utils {
  static calculateNumber(type, a, b) {
    const aApprox = Math.round(a); // Round the value of 'a' to the nearest integer
    const bApprox = Math.round(b); // Round the value of 'b' to the nearest integer
    let result = 0; // Initialize 'result' with 0
    switch (type) {
      case 'SUM':
        result = aApprox + bApprox; // Calculate the sum of 'a' and 'b'
        break;
      case 'SUBTRACT':
        result = aApprox - bApprox; // Calculate the difference between 'a' and 'b'
        break;
      case 'DIVIDE':
        if (bApprox === 0) {
          result = 'Error'; // If 'b' is 0, set 'result' to 'Error'
        } else {
          result = aApprox / bApprox; // Calculate the division of 'a' by 'b'
        }
        break;
    }
    return result; // Return the calculated value of 'result'
  }
}

module.exports = Utils; // Export the Utils class
