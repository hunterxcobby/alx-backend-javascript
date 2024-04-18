
/**
 * Represents a promise that resolves to 'foo' after a delay of 300 milliseconds.
 * @type {Promise<string>}
 */
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});

const handleFulfilledA = (result) => {
    console.log('Fulfilled A:', result);
    return 'bar';
};

const handleRejectedA = (error) => {
    console.log('Rejected A:', error);
    throw new Error('A rejected');
};

const handleFulfilledB = (result) => {
    console.log('Fulfilled B:', result);
    return 'baz';
};

const handleRejectedB = (error) => {
    console.log('Rejected B:', error);
    throw new Error('B rejected');
};

const handleFulfilledC = (result) => {
    console.log('Fulfilled C:', result);
};

const handleRejectedC = (error) => {
    console.log('Rejected C:', error);
};

const handleRejectedAny = (error) => {
    console.log('Rejected Any:', error);
};

myPromise
    .then(handleFulfilledA, handleRejectedA)
    .then(handleFulfilledB, handleRejectedB)
    .then(handleFulfilledC, handleRejectedC)
    .catch(handleRejectedAny);