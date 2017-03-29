console.log('Starting App');

setTimeout(() => {
  console.log('Inside of Callback');
}, 2000);

setTimeout(() => {
  console.log('Second Settimeout');
}, 0);

console.log('Finishing up');
