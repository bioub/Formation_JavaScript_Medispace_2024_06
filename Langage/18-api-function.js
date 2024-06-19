globalThis.name = "Romain";

function hello(name1, name2) {
  console.log(`Hello ${name1}, ${name2} my name is ${this.name}`);
}

// console.log(hello.toString()); // le code de la fonction
// console.log(hello.length); // 2

const user = {
  name: 'Tata',
};

// hello('Toto', 'Titi')
hello.call(user, 'Toto', 'Titi');
hello.apply(user, ['Toto', 'Titi']);
hello.call(user, ...['Toto', 'Titi']);
const helloUser = hello.bind(user);
helloUser('Toto', 'Titi');

function bind(fn, that) {
  return function() {
    fn.apply(that, arguments)
  }
}

const helloUser2 = bind(hello, user);
helloUser2('Toto', 'Titi');

console.log(Object.prototype.hasOwnProperty.call(user, 'name'));

// Array.prototype.filter.call(document.querySelectorAll('button'), () => {});
Array.from(document.querySelectorAll('button')).filter(() => {});
