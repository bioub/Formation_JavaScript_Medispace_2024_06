import { createTodoItem } from "./todos.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todos-form');

/** @type {HTMLInputElement} */
const toggleEl = document.querySelector('.todos-form-toggle');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todos-form-input');

/** @type {HTMLDivElement} */
const listEl = document.querySelector('.todos-list');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const itemEl = createTodoItem({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  listEl.append(itemEl);
})

// Exercice 3
// Ecouter le click de la checkbox
// toggleEl et cocher / décocher
// toutes les autres
