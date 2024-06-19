import fs from "node:fs/promises";

async function copy() {
  try {
    const buffer = await fs.readFile('.gitignore');
    await fs.writeFile('.gitignore.copy', buffer);
    console.log('Copy done');
  } catch (err) {
    console.log(err);
  }
}

copy();
