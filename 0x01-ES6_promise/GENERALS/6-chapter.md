Using an async function involves defining a function with the `async` keyword before the function declaration. This allows the function to use the `await` keyword inside it. Here's how to use an async function:

### Syntax:
```javascript
async function functionName(parameters) {
  // Function body
}
```

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
```

### Key Points:
1. An async function always returns a promise. If the function explicitly returns a value, the promise will be resolved with that value. If the function throws an exception, the promise will be rejected with the thrown value.
2. Inside an async function, the `await` keyword is used to pause the execution of the function until a promise is settled (resolved or rejected). This allows you to write asynchronous code in a synchronous style.
3. You can use async functions with other promise-based APIs, such as `fetch` for making HTTP requests or with `setTimeout` for delaying execution.
4. When calling an async function, you can use `.then()` and `.catch()` to handle the resolved value or any errors, or you can use `await` directly if calling from another async function.

### Example Usage:
```javascript
fetchData().then(() => {
  console.log('Data fetched successfully!');
}).catch((error) => {
  console.error('Error fetching data:', error);
});
```

### Tips:
- Always handle errors gracefully inside async functions using `try/catch` blocks or by chaining `.catch()` after calling the function.
- Use async functions when dealing with asynchronous operations like fetching data from an API, reading files, or making database queries. They make asynchronous code easier to read and maintain.