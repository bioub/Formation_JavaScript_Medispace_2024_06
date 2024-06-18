// plusieurs objets globaux sont déjà dispo
// définis par le langage :
console.log(typeof Math); // object
console.log(typeof JSON); // object
console.log(typeof Number); // function object
console.log(Number instanceof Object); // true

// définis par la plateforme
// Dans le navigateurs : document, window, navigator...
// Dans Node.js : process, readline

// Les objets sauf indication contraire (ex: Object.freeze)
// sont extensibles, on peut ajouter, modifier, supprimer des clés/valeurs
console.log(Math.sum); // undefined

// ajoute un couple clé/valeur
Math.sum = function(a, b) {
  return a + b;
};
console.log(Math.sum(1, 2));

// modifier un couple clé/valeur
Math.sum = function(a, b) {
  return Number(a) + Number(b);
};
console.log(Math.sum('1', '2'));

// supprimer un couple clé/valeur
delete Math.sum;
console.log(Math.sum); // undefined

// Créer ses propres objets
// 2 systèmes :
// - Object Literal
// - Constructor

// Object Literal
// Use case :
// - les objets qui ne sont créés qu'une fois
// - les objets créés plusieurs fois si pas de fonctions (méthodes)
globalThis.MedispaceMath = {
  sum: function(a, b) {
    return Number(a) + Number(b);
  }
};

console.log(MedispaceMath.sum(1, 2)); // 3

const users = [
  {
    name: 'Romain',
    // hello: function() {} // A EVITER car 2 fonctions hello
  },
  {
    name: 'Toto',
    // hello: function() {} // A EVITER car 2 fonctions hello
  }
];

// Constructor
// Pour les objets créés plusieurs fois avec des fonctions / méthodes
// et aussi un Type

// Jusqu'à ES5
// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// User.myStaticMethod = function() {};

// User.prototype.hello = function() {
//   return `Hello ${this.name}`;
// }

// A partir de ES6
class User {
  isAdmin = false; // class properties (ES2022)
  #hiddenProp = 'test'; // private (ES2022)
  constructor(name) {
    this.name = name;
    // this.isAdmin = false;
  }
  static myStaticMethod() {}
  hello() {
    return `Hello ${this.name}`;
  }
}

const user1 = new User('Romain');
user1.email = 'romain@mail.com';
console.log(typeof User); // function
console.log(typeof User.prototype.hello); // function
console.log(typeof user1); // object
console.log(user1.name); // Romain

const user2 = new User('Toto');
console.log(user2.hello());
console.log(user1.hello === user2.hello); // true


// Pour accéder aux clés dynamiquement
// on peut utiliser les crochets : []
const key = 'name';
const method = 'hello';
console.log(user1[key]); // Romain
console.log(user1[method]()); // Hello Romain

// Boucler sur les clés :
// for (const key in user1) {
//   if (Object.hasOwnProperty.call(user1, key)) {
//     const value = user1[key];
//     console.log(value);
//   }
// }

for (const key in user1) {
  if (user1.hasOwnProperty(key)) {
    const value = user1[key];
    console.log(value);
  }
}

// en plus moderne
for (const key of Object.keys(user1)) {
  const value = user1[key];
  console.log(key, value);
}

// Transformer un object en string
// et inversement (sérialisation/désérialisation) :
// syntaxe JSON
const str = JSON.stringify(user1);
console.log(str); // {"isAdmin":false,"name":"Romain","email":"romain@mail.com"}

// les fonctions et les prototypes sont perdus dans la sérialisation

const objFromStr = JSON.parse(str);
console.log(objFromStr.name); // Romain
console.log(objFromStr.hello); // undefined
console.log(user1.hello); // function

// Héritage
class Admin extends User {
  constructor(name) {
    super(name);
    this.isAdmin = true
  }
  getRoles() {
    return ['admin']
  }
  hello() {
    return super.hello() + ' (isAdmin)'
  }
}

const adminUser = new Admin('admin');
console.log(adminUser.hello()); // Hello admin (isAdmin)



// Différence String.fromCharCode (méthode de la "classe")
// et String.prototype.charCodeAt (méthode de l'instance)

const myStr = String.fromCharCode(65, 66, 67);
console.log(myStr); // "ABC"
console.log(myStr.charCodeAt(2)); // 67


const obj = {};

// extension
// obj.myKey = 'myValue';

// extension plus fine avec
Object.defineProperty(obj, 'myKey', {
  value: 'myValue',
  // déjà par defaut
  // writable: false,
  // enumerable: false, // pas dans le JSON et pas dans les boucles
  // configurable: false, 
})