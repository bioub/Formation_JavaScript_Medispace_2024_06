const users = [
  {
    name: 'Romain'
  },
  {
    name: 'Toto',
    address: {
      city: 'Paris'
    }
  }
]

for (const user of users) {
  const city = user.address?.city ?? '';
  // const city = user.address && (user.address.city || '');
}

document.getElementById('toto')?.getAttribute('test')?.toUpperCase() ?? 'ma valeur par défaut';
