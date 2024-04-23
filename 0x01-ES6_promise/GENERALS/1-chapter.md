### 1. What are Promises?
- Promises are objects used in JavaScript for asynchronous programming.
- They represent the eventual completion or failure of an asynchronous operation and its resulting value.

### 2. How do Promises work?
- Promises have three states: pending, fulfilled, or rejected.
- When a promise is pending, the asynchronous operation it represents hasn't completed yet.
- Once the operation is completed successfully, the promise is fulfilled with a value.
- If the operation fails, the promise is rejected with a reason for the failure.

### 3. Why are Promises used?
- Promises provide a cleaner way to handle asynchronous code compared to callback functions, avoiding callback hell.
- They allow chaining of asynchronous operations using `.then()` and `.catch()`, making code more readable and maintainable.
- Promises simplify error handling with built-in mechanisms for catching and handling errors.

### 4. Key Concepts and Methods:
- **Promise States**: Understand the three states of a promise: pending, fulfilled, and rejected.
- **Promise Chaining**: Learn how to chain multiple asynchronous operations using `.then()` and `.catch()`.
- **Error Handling**: Explore how promises handle errors with `.catch()` and understand the importance of error propagation.
- **Promise.all() and Promise.race()**: Discover methods for handling multiple promises concurrently.

By mastering these concepts, you'll have a solid understanding of how Promises work in JavaScript, their benefits, and how to effectively use them to write clean and efficient asynchronous code.