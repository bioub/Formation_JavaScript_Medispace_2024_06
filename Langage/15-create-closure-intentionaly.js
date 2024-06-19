for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// Dans une seconde : ..1s.. 3 3 3

function closure(backupIndex) {
  return () => {
    console.log(backupIndex);
  };
}

// Dans une seconde : ..1s.. 0 1 2

for (var i = 0; i < 3; i++) {
  setTimeout(closure(i), 1000);
}
