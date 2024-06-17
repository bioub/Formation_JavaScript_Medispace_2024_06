const names = ['Toto', 'Titi', 'Tata'];

function bonjour(name) {
  return `Hello ${name}`;
}

for (const n of names) {
  console.log(bonjour(n));
}
