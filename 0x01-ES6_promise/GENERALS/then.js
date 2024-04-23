
const myPromise = new Promise((resolve, reject) => {
    const success = false;

    if (success == true) {
        resolve("Success is true");
    }
    else
    {
        reject("Success is false");
    }
});

myPromise
    .then((result) => {
    console.log(`We were able to get : ${result}`);
}).catch((error) => {
    console.error(`We got this error : ${error}`)
});
