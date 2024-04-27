#!/usr/bin/node

// Using the prototype below, return a promise. The parameter is a boolean.

export default function getFullResponseFromAPI(success) {
  const getpromiseResponse = new Promise((resolve, reject) => {
    if (success === true) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });

  return getpromiseResponse;
}
