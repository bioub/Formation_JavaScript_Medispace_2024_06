function hello(name) {
  return `Hello ${name}`;
}

console.time('hello');
hello('Toto');
console.timeEnd('hello');

console.time('hello');
hello('Titi');
console.timeEnd('hello');

console.time('hello');
hello('Tata');
console.timeEnd('hello');

console.time('hello');
hello('Tutu');
console.timeEnd('hello');
