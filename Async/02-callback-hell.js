import fs from "node:fs";

try {
  const buffer = fs.readFileSync(".gitignore");
  fs.writeFileSync(".gitignore.copy", buffer);
  console.log("Copy done");
} catch (err) {
  console.log(err);
}

// Callback Hell / Pyramid of Doom
fs.readFile(".gitignore", (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(".gitignore.copy", buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Copy done");
      }
    });
  }
});
