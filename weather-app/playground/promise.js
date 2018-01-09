
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

// asyncAdd(5, 7).then((res) => {
//     console.log('Results: ', res);
//     return asyncAdd(res, 10);
// }, (errorMessage) => {
//     console.log(errorMessage);
// }).then((res2) => {
//     console.log('Results2: ', res2);
// }, (errorMessage2) => {
//     console.log(errorMessage2);
// });

asyncAdd(5, 7).then((res) => {
    console.log('Results: ', res);
    return asyncAdd(res, 10);
}).then((res2) => {
    console.log('Results2: ', res2);
}).catch((errorMessage2) => {
    console.log(errorMessage2);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Hey. It worked!');
//         reject('Unable to fulfill promise.');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// });