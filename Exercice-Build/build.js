import { rm, mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "path";

const distPath = resolve(import.meta.dirname, "dist");
const srcPath = resolve(import.meta.dirname, "src");
const horlogeJsPath = resolve(srcPath, "js", "horloge.js");
const indexJsPath = resolve(srcPath, "js", "index.js");
const indexHtmlPath = resolve(srcPath, "index.html");
const indexHtmlDistPath = resolve(distPath, "index.html");
const appJsDistPath = resolve(distPath, "app.js");

async function rmAndMkdirDist() {
  await rm(distPath, { force: true, recursive: true });
  await mkdir(distPath);
}

async function buildJs() {
  const buffers = await Promise.all([
    readFile(horlogeJsPath),
    readFile(indexJsPath),
  ]);

  await writeFile(appJsDistPath, Buffer.concat(buffers));
}

async function buildHtml() {
  let content = await readFile(indexHtmlPath, { encoding: "utf-8" });

  content = content
    .replace(
      '<script src="./js/horloge.js"></script>',
      '<script src="./app.js"></script>'
    )
    .replace('<script src="./js/index.js"></script>', "");

  await writeFile(indexHtmlDistPath, content);
}

try {
  await rmAndMkdirDist();
  await Promise.all([buildJs(), buildHtml()]);
  console.log("Build done");
} catch (err) {
  console.log(err);
}
