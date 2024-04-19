In this basic example, we create a new Promise object named `myFirstPromise`. Inside the Promise constructor, we define an asynchronous operation using `setTimeout()` to simulate some asynchronous task. 

```javascript
const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!"); // Resolving the promise with a success message after a delay
  }, 250);
});
```

The `resolve` function is called when the asynchronous operation completes successfully, and we pass it the success message "Success!". 

Then, we use the `.then()` method on the `myFirstPromise` object to handle the fulfillment of the promise. The callback function passed to `.then()` will be executed when the promise is resolved successfully, and it will receive the value passed to `resolve()` as an argument.

```javascript
myFirstPromise.then((successMessage) => {
  console.log(`Yay! ${successMessage}`);
});
```

In this example, the success message "Success!" is logged to the console when the promise is resolved successfully after the specified delay of 250 milliseconds.