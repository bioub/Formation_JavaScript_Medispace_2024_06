// REST
// Conversion de syntaxe
// D'une liste de valeur (ici 3, 4)
// vers un tableau (nbs -> [3, 4])
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum.length);

// SPREAD
// Conversion de syntaxe
// D'un tableau (nbs -> [1, 2, 3, 4])
// vers une liste de valeur (ici 1, 2, 3, 4)
const nbs = [1, 2, 3, 4];
console.log(sum(...nbs)); // 10

// SPREAD
const cloneNbs = [...nbs];

// Destructuration
// function getFullName(fullName)
// {
//   const temp = fullName.split(' ');
//   return {
//     firstName: temp[0],
//     lastName: temp[1],
//   };
// }

// getFullName('John Doe');
function getFullName(fullName) {
  //    ['John'   , 'Doe'   ]
  const [firstName, lastName] = fullName.split(" ");
  return {
    firstName, // firstName: firstName, (shorthand property)
    lastName, // lastName: lastName,
  };
}

getFullName("John Doe");

// const nbs = [1, 2, 3, 4];

// REST
//    [1 , 2   , 3, 4        ]
const [un, deux, ...othersNbs] = nbs;

// ES2018 REST et SPREAD sur les objects
const user = {
  name: "Romain",
};

// SPREAD object
const cloneUser = { ...user };

// REST object
//       { name: "Romain"}
// const { name: newName = '' , ...restObjet } = user;
const { name } = user;
