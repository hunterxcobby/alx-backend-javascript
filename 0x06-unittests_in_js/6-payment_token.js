// getPaymentTokenFromAPI function that takes one boolean argument
// and returns a promise that resolves with a string "success" if arg is true
// otherwise, function does nothing.

function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    }
  });
}

module.exports = getPaymentTokenFromAPI;
