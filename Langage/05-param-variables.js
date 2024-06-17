// pseudo-variable: variable créée par JavaScript
// au moment de l'appel d'une fonction
// ex : arguments, this
var sum = function (a, b) {
  let result = a + b;

  for (let i = 2; i < arguments.length; i++) {
    const element = arguments[i];
    result += element;
  }

  return result;
};

console.log(sum(1, 2, 3, 4)); // 10

var sum = function (a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
};

console.log(sum(1, 2, 3, 4)); // 10
