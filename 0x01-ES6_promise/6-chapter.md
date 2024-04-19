### Instance Properties
#### `Promise.prototype.constructor`
- The constructor function that created the instance object. For Promise instances, the initial value is the Promise constructor.

#### `Promise.prototype[@@toStringTag]`
- The initial value of the `@@toStringTag` property is the string "Promise". This property is used in `Object.prototype.toString()`.

### Instance Methods
#### `Promise.prototype.catch(onRejected)`
- Appends a rejection handler callback to the promise. Returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.

```javascript
const promise = new Promise((resolve, reject) => {
  // Perform asynchronous operation
  reject('Error occurred');
});

promise.catch(error => {
  console.error('Promise rejected with error:', error);
});
```

#### `Promise.prototype.finally(onFinally)`
- Appends a handler to the promise and returns a new promise that is resolved when the original promise is resolved. The handler is called when the promise is settled, whether fulfilled or rejected.

```javascript
const promise = new Promise((resolve, reject) => {
  // Perform asynchronous operation
  resolve('Operation completed successfully');
});

promise.finally(() => {
  console.log('Promise settled, regardless of outcome');
});
```

#### `Promise.prototype.then(onFulfilled, onRejected)`
- Appends fulfillment and rejection handlers to the promise. Returns a new promise resolving to the return value of the called handler, or to its original settled value if the promise was not handled.

```javascript
const promise = new Promise((resolve, reject) => {
  // Perform asynchronous operation
  resolve('Operation completed successfully');
});

promise.then(value => {
  console.log('Promise fulfilled with value:', value);
}).catch(error => {
  console.error('Promise rejected with error:', error);
});
```

These methods allow you to handle the outcome of promises in different scenarios, such as handling successful fulfillment, handling errors, or executing cleanup logic regardless of the outcome. They provide powerful tools for managing asynchronous operations in JavaScript.