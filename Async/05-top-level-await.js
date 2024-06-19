import fs from "node:fs/promises";

// Top-level await (un await à la racine du fichier)
// Uniquement en Module ESM

try {
  const buffer = await fs.readFile('.gitignore');
  await fs.writeFile('.gitignore.copy', buffer);
  console.log('Copy done');
} catch (err) {
  console.log(err);
}
