const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
}

const readline = require('readline');

class Jeu {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  essais = [];
  constructor(options = {}) {
    const min = options.min ?? 0;
    const max = options.max ?? 100;
    this.entierAlea = Random.getRandomInt(min, max);
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

const game = new Jeu();

game.jouer();
