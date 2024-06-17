// const nb = 0;
// nb = 1; // erreur:  TypeError: Assignment to constant variable.

let nb = 0;
nb = 1; // OK

const user = {
  name: 'toto',
};

user.name = 'Titi';
user.city = 'Aix';

user = {}; // erreur:  TypeError: Assignment to constant variable.

// Une "vraie" constante
const MY_CONSTANT = {
  KEY: 'VALUE'
};

Object.freeze(MY_CONSTANT); // <--- empeche de modifier l'obj (PAS TRES PERFORMANT)
// Erreur si mode strict
