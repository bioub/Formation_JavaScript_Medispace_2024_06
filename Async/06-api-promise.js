// Constructor de Promise
// à faire si la version promesse n'existe
// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     // ce callback va être appelé au moment du new
//     // ici on démarre l'opération async
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// timeout(1000).then(() => {
//   console.log('1s');
// });

// alternative 1 :
// utilitaire promisify
// import { promisify } from "util";

// const timeout = promisify(setTimeout);
// timeout(1000).then(() => {
//   console.log('1s');
// });

// alternative 2 :
// npm i settimeout-promise (ou équivalent)

// alternative 3 :
// utiliser la fonction native
// dans Node elle existe depuis peu
import { readFile } from "node:fs/promises";
import { setTimeout } from "node:timers/promises";
setTimeout(1000).then(() => {
  console.log("1s");
});

// 4 méthodes statiques utiles
// pour combiner plusieurs promesses en unes
// on démarrera toutes les opérations asynchrones
// en même :
// - lire plusieurs fichiers en même temps
// - dans le navigateur la page doit
// combiner les résultats de plusieurs requetes AJAX

// Promise.all
// la combinaison de plusieurs promesses en une
// qui sera résolue quand l'ensemble sera résolu
// et rejeté si une ou plus est rejeté
// Use case :
// dans le build on lit plusieurs fichiers
// en même et on les écrits dans l'ordre
// si une lecture échoue l'ensemble échoue

// Promise.allSettled
// idem Promise.all
// elle est toujours résolue
// sauf qu'on récupère tous les résultats (succès ou échec)
// avec un statut fulfilled (succes), rejected (error)

// Promise.race
// 1 seul résultat lorsque le premier est résolu
// si le premier est une erreur le race est en erreur
// Use case :
// Opération async avec un timeout
// Promise.race([
//   readFile('.gitignore'),
//   setTimeout(100),
// ]).then(() => {

// });

// Promise.any
// idem race
// mais si le premier est en erreur on attend le suivant
// il faut qu'ils soient tous en erreurs pour que any
// soit rejeté
// Use case :
// Ping plusieurs serveurs pour connaitre le plus rapide
// 
