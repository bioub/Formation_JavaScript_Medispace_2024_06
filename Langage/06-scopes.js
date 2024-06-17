// scope globale
globalThis.globalScope = 'globalScope';

// à la racine d'un fichier une variable peut
// dans le navigateur être globale ou dans la portée de module
// si <script type="module"
// dans Node.js il y a toujours un module mais la variable
// peut être limité par un Module ESM (ES6) ou dans
// CommonJS par une fonction
const scriptScope = 'scriptScope';

function externe() {
  const closureScope = 'closureScope';

  function interne() {
    const localScope = 'localScope';

    if (true) {
      const blockScope = 'blockScope';
      console.log(globalScope);
      console.log(scriptScope);
      console.log(closureScope);
      console.log(localScope);
      console.log(blockScope);
    }
  }

  interne()
}

externe()
