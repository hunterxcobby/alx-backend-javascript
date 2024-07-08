const Utils = require('./utils');

// Function to send payment request to API
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  // Calculate the total using the Utils.calculateNumber() function
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  
  // Print the total to the console
  console.log(`The total is: ${result}`);
}

// Export the sendPaymentRequestToApi function
module.exports = sendPaymentRequestToApi;
