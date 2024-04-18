// creating a promise for a package delivery 

const packageDelivery = new Promise((resolve, reject) => {
    // simulating delivery process with set timeout
    setTimeout(() => {
        const deliverySuccessful = Math.random() < 0.5; // 50% chance of success
        if (deliverySuccessful) {
            resolve('Package delivered');// Resolve promise if delivery successful
        }
        else
        {
            reject('Delivery failed !'); // Reject promise if delivery failed
        }
    }, 2000);// Delivery takes 2 seconds
})

// handling the promise outcome 
packageDelivery.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});