// 1 - tester si le param vaut undefined
var sum = function (a, b, c) {
  if (c === undefined) {
    c = 0;
  }
  return a + b + c;
};

console.log(sum(1, 2));

// 2 - utiliser OR
// NE FONCTIONNE QUE SI LA VALEUR PAR DEFAUT EST FALSY (0, '', false)
var sum = function (a, b, c) {
  c = c || 0;
  return a + b + c;
};

console.log(sum(1, 2));

// 3 - Nullish Coalescing Operator (ES2020)
// FONCTIONNE SI le param est null ou undefined
var sum = function (a, b, c) {
  c = c ?? 0;
  return a + b + c;
};

console.log(sum(1, 2));

// 4 - default param
var sum = function (a, b, c = 0) {
  return a + b + c;
};

console.log(sum(1, 2));
