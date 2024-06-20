import { createInputItem, createSpanItem, createTodoItem } from "./todos.js";

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



listEl.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todo-item-delete')) {
    target.closest('.todo-item')?.remove();
  }
});


listEl.addEventListener('dblclick', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todo-item-value')) {
    const inputEl = createInputItem(target.innerText);
    target.replaceWith(inputEl);
  }
});

listEl.addEventListener('keydown', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todo-item-input') && event.key === 'Enter') {
    const spanEl = createSpanItem(target.value);
    target.replaceWith(spanEl);
  }
});
