import fs from 'node:fs';

// Sync
// Avantage : simple à lire (les lignes sont dans l'ordre)
// Inconvénient : moins performant (le thread est bloqué le temps de la lecture)
const buffer = fs.readFileSync('.gitignore');
console.log(buffer.toString('utf-8'));

// Async
// Avantage : performant (le thread n'est pas bloqué le temps de la lecture)
// Inconvénient : moins lisible (les lignes ne sont pas dans l'ordre)
fs.readFile('.gitignore', (_, buffer) => {
  console.log(buffer.toString('utf-8'));
});
