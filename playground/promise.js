
var asyncAdd = (a,b) => {
  return new Promise ((resolve,reject) => {
    setTimeout (() => {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Arguments must be numbers');
    }
  },1500);
  });
};

asyncAdd(12,8).then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res,25); // Returning a promise to add Chaining onto it by calling asyncAdd again
}).then((res) => { // 2nd then will be called only when first then ends
  console.log('Should be 45:', res);
}).catch((errorMessage) => {
  console.log(errorMessage);
}); //

/*
const somePromise = new Promise ((resolve,reject) => {
  setTimeout(() => {
    resolve('Hey. It worked!');
    resolve(); // It wont call then again and again once resolve/reject has been called before this call.
    reject('Unable to fulfil Promise');
  }, 2500);
});

somePromise.then((message) => {
  console.log('Success :', message);
}, (errorMessage) => {
  console.log('Error :', errorMessage);
});

*/
