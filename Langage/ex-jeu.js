// importe le module readline de Node.js
// (contrairement au navigateur, pas de variable globale)
const readline = require('readline');

// configure readline pour lire sur le clavier
// et afficher dans le terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pose une question et récupère la réponse
function jouer() {
  rl.question('Quel est le nombre entier ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);
    jouer();
  });
}

jouer();

// pile d'appel
// ^
// |                     [question]                    [question]
// |[question]           [jouer   ]                    [jouer   ]
// |[jouer   ] ⟳         [task    ] ⟳                  [task    ] ⟳
// +---------------------ENTREE------------------------ENTREE-> temps
//

