
### Constructor
#### `Promise()`
- Creates a new Promise object, primarily used to wrap functions that don't already support promises.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Perform some asynchronous operation
  if (/* operation successful */) {
    resolve('Operation completed successfully');
  } else {
    reject('Operation failed');
  }
});
```

### Static Methods
#### `Promise.all(iterable)`
- Returns a single Promise that fulfills when all promises in the iterable fulfill, and rejects if any promise rejects.

```javascript
const promises = [promise1, promise2, promise3];
Promise.all(promises)
  .then(values => {
    console.log('All promises fulfilled:', values);
  })
  .catch(error => {
    console.error('One of the promises rejected:', error);
  });
```

#### `Promise.allSettled(iterable)`
- Returns a single Promise that fulfills when all promises in the iterable settle, with an array of objects describing each promise's outcome.

```javascript
const promises = [promise1, promise2, promise3];
Promise.allSettled(promises)
  .then(results => {
    console.log('Settled promises:', results);
  });
```

#### `Promise.any(iterable)`
- Returns a single Promise that fulfills when any promise in the iterable fulfills, and rejects if all promises reject.

```javascript
const promises = [promise1, promise2, promise3];
Promise.any(promises)
  .then(value => {
    console.log('First promise fulfilled:', value);
  })
  .catch(error => {
    console.error('All promises rejected:', error);
  });
```

#### `Promise.race(iterable)`
- Returns a single Promise that settles with the outcome of the first promise that settles.

```javascript
const promises = [promise1, promise2, promise3];
Promise.race(promises)
  .then(value => {
    console.log('First settled promise:', value);
  })
  .catch(error => {
    console.error('First settled promise rejected:', error);
  });
```

#### `Promise.reject(reason)`
- Returns a new Promise object that is rejected with the given reason.

```javascript
const reason = 'Rejected for some reason';
const rejectedPromise = Promise.reject(reason);
rejectedPromise.catch(error => {
  console.error('Promise rejected with reason:', error);
});
```

#### `Promise.resolve(value)`
- Returns a Promise object that is resolved with the given value.

```javascript
const value = 'Resolved value';
const resolvedPromise = Promise.resolve(value);
resolvedPromise.then(result => {
  console.log('Promise resolved with value:', result);
});
```

#### `Promise.withResolvers()`
- Returns an object containing a new Promise object and two functions to resolve or reject it.

```javascript
const { promise, resolve, reject } = Promise.withResolvers();
// Perform asynchronous operation
if (/* operation successful */) {
  resolve('Operation completed successfully');
} else {
  reject('Operation failed');
}
promise.then(value => {
  console.log('Promise resolved with value:', value);
}).catch(error => {
  console.error('Promise rejected with error:', error);
});
```

These methods provide powerful ways to manage asynchronous operations in JavaScript, allowing you to handle multiple promises and their outcomes efficiently.