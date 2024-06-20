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
toggleEl.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxEls = listEl.querySelectorAll('.todo-item-completed');

  for (const checkboxEl of checkboxEls) {
    checkboxEl.checked = toggleEl.checked;
  }
})

// Exercice : Event Phases
// En utilisant la propagation et
// event.target
// Déplacer le addEventListener du bouton moins ici
// en écouter le click de listEl
// Si event.target correspond à un bouton moins (en testant la class par exemple)
// supprimer le closest ancestor (avec closest idéalement) qui matche
// la classe .todo-item

// Faire de même pour le dblclick et keydown
