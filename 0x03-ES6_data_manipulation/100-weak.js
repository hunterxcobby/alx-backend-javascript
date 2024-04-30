// Define a Weakmap to track each number of times queryAPI is called for a specific endpoint.
const weakMap = new WeakMap();

// Define a function named queryAPI that accepts an endpoint argument.
// It should increment the number of times it is called.
function queryAPI(endpoint) {
  // Get the number of times queryAPI has been called for this endpoint from the weakMap.
  let count = weakMap.get(endpoint) || 0;

  // Increment the count for this endpoint.
  count += 1;

  // Update the count in the weakMap.
  weakMap.set(endpoint, count);

  // If number of queries for this endpoint is >= 5, throw an error.
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

// Export the queryAPI function and the weakMap.
export { queryAPI, weakMap };
