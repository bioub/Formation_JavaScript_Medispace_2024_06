// un callback est une fonction qu'on défini
// mais qu'on appelle pas directement
// un autre API va l'appeler à notre place

// ex
const names = ['Toto', 'Titi', 'Tata'];

function bonjour(name) {
  console.log(`Hello ${name}`);
}

names.forEach(bonjour);

// en arrow function
names.forEach((name) => {
  console.log(`Hello ${name}`);
});

// si on écrivait forEach nous même, on verrait l'appel :
function forEach(array, cb) {
  for (const el of array) {
    cb(el);
  }
}
forEach(names, (name) => {
  console.log(`Hello ${name}`);
});

console.log('FIN');

// pile d'appel dans le temps :

// pile d'appel
// ^
// |[log ][log  ][log   ]
// |[cb  ][cb   ][cb    ]
// |[forEach            ][logFin]
// +------------------------------------------> temps
