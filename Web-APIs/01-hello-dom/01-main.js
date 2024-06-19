import { inputHandler } from "./01-write.js";

const inputElt = document.querySelector("#input");
const spanElt = document.querySelector("#output");

inputElt.addEventListener("input", inputHandler);
