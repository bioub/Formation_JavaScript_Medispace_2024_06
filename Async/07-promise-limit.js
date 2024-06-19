// function interval(delayMs) {
//   return new Promise((resolve, reject) => {
//     // ce callback va être appelé au moment du new
//     // ici on démarre l'opération async
//     setInterval(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// interval(1000).then(() => {
//   console.log('1s');
// });

// Solutions :
// - Garder les callbacks classiques si pas de callback hell
// - Observable (rxjs), solution retenue dans Angular 2+ (2014)
// - Async iterator (ES2017)
import { setInterval } from 'node:timers/promises'

for await (const val of setInterval(1000, 'ABC')) {
  console.log('1s', val);
}
