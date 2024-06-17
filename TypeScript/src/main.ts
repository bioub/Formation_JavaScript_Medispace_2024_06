import { hello } from "./hello";

const names = ['Toto', 'Titi', 'Tata'];

for (const n of names) {
  console.log(hello(n));
}
