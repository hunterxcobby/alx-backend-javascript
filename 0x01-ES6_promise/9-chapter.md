This advanced example demonstrates the mechanics of a Promise by creating and resolving promises asynchronously. Here's a breakdown of what's happening:

1. **HTML Setup:** The HTML contains a button with the id "make-promise" and a div with the id "log" to display the progress and results of the promises.

2. **JavaScript Function (testPromise()):**
   - Each time the button is clicked, the `testPromise()` function is called.
   - Inside this function, a unique `thisPromiseCount` is generated to keep track of each promise created.
   - A log message is added to the div indicating that a promise has started.
   - A new Promise `p1` is created with the `Promise` constructor. Inside the executor function passed to the Promise constructor:
     - Another log message is added to indicate the creation of the promise.
     - A setTimeout function simulates an asynchronous operation by resolving the promise after a random delay between 1 to 3 seconds.
   - The `.then()` method is called on the promise `p1`, which handles the fulfillment of the promise by logging the fulfillment value.
   - The `.catch()` method is used to handle any potential rejection of the promise, although in this example, rejection is not explicitly triggered.
   - Another log message is added to indicate the completion of promise creation.

3. **Button Event Listener:** An event listener is added to the button so that when it's clicked, the `testPromise()` function is executed.

By repeatedly clicking the button, you can observe the asynchronous behavior of promises and see how they are resolved in the order they were created, with each promise resolving after a random delay.