(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// function(exports, require, module, __filename, __dirname) {
'use strict';

function hello(name) {
  return `Hello ${name}`;
}

// remplace exports par hello
module.exports = hello;

// }

},{}],2:[function(require,module,exports){
const hello = require('./hello.js');
const MyMaths = require('./my-maths.js');

console.log(hello('Romain'));
console.log(MyMaths.sum(1, 2));
console.log(MyMaths.multiply(1, 2));

},{"./hello.js":1,"./my-maths.js":3}],3:[function(require,module,exports){
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

exports.sum = sum;
exports.multiply = multiply;

},{}]},{},[2]);