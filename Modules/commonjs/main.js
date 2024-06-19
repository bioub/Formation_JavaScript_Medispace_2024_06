const hello = require('./hello.js');

//    { sum: fun, mu... }
const { sum: add, multiply } = require('./my-maths.js');

console.log(hello('Romain'));
console.log(add(1, 2));
console.log(multiply(1, 2));
