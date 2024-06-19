import fs from "node:fs/promises";

// Callback Hell
// fs.readFile('.gitignore')
//   .then((buffer) => {
//     fs.writeFile('.gitignore.copy', buffer)
//       .then(() => {
//         console.log('Copy done');
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.readFile('.gitignore')
//   .then((buffer) => {
//     return fs.writeFile('.gitignore.copy', buffer)
//   })
//   .then(() => {
//     console.log('Copy done');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

fs.readFile(".gitignore")
  .then((buffer) => fs.writeFile(".gitignore.copy", buffer))
  .then(() => console.log("Copy done"))
  .catch((err) => console.log(err));
