// importer getRandomInt
import readline from 'readline';
import { getRandomInt } from './random.js';

export class Jeu {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  essais = [];
  constructor(options = {}) {
    const min = options.min ?? 0;
    const max = options.max ?? 100;
    this.entierAlea = getRandomInt(min, max);
  }
  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà joué : ${this.essais.join(' - ')}`);
    }

    this.rl.question('Quel est le nombre entier ? ', (answer) => {
      console.log(`Vous avez saisi : ${answer}`);

      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Vous devez saisi un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}

// exporter Jeu
