The `await` operator is used within `async` functions to wait for a promise to be resolved or rejected. It can only be used inside an `async` function. Here's how it works:

### Syntax:
```javascript
async function myAsyncFunction() {
  try {
    const result = await somePromise;
    // Code here executes after somePromise is resolved
    // Use 'result' which holds the resolved value of somePromise
  } catch (error) {
    // Handle any errors from somePromise
  }
}
```

### How it Works:
1. When `await` is used, the execution of the `async` function is paused until the promise is settled (either resolved or rejected).
2. If the promise is fulfilled, `await` returns the fulfilled value. This allows you to assign the result to a variable (`result` in the example).
3. If the promise is rejected, the `await` expression throws an error, which can be caught using a `try/catch` block.

### Example:
```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```

### Key Points:
- `await` can only be used inside an `async` function.
- It can be used to wait for any promise to settle, not just promises returned by asynchronous functions.
- It makes asynchronous code look and behave more like synchronous code, which can make it easier to read and understand.
- Always use `try/catch` with `await` to handle errors gracefully.

Understanding how to use `await` properly is crucial for working with asynchronous code in JavaScript. It allows you to write cleaner and more readable code by eliminating the need for nested callback functions or promise chains.