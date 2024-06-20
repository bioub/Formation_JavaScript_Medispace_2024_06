/**
 * Create a new div representing a todo item
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @returns {HTMLDivElement}
 */
export function createTodoItem(todo) {
  // <div class="todo-item" data-todo-id="0.3543">
  //   <input type="checkbox" class="todo-item-completed">
  //   <span class="todo-item-value">Acheter du pain</span>
  //   <button class="todo-item-delete">-</button>
  // </div>

  // Exercice 1
  // Compléter cette fonction
  // avec la checkbox et le button moins

  const divEl = document.createElement('div');
  divEl.className = "todo-item";
  divEl.dataset.todoId = String(todo.id);

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todo-item-completed';
  checkboxEl.checked = todo.completed;

  const spanEl = createSpanItem(todo.title);

  spanEl.addEventListener('dblclick', () => {
    const inputEl = createInputItem(spanEl.innerText);
    spanEl.replaceWith(inputEl);

    inputEl.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const spanEl = createSpanItem(inputEl.value);
        inputEl.replaceWith(spanEl);
      }
    });
  });

  const buttonEl = document.createElement('button');
  buttonEl.className = 'todo-item-delete';
  buttonEl.innerText = '-';

  divEl.append(checkboxEl, ' ', spanEl, ' ', buttonEl);

  // Exercice 2
  // Au click du bouton supprimer divEl
  // remove()

  buttonEl.addEventListener('click', () => {
    divEl.remove();
  });

  return divEl;
}

export function createSpanItem(title) {
  const spanEl = document.createElement('span');
  spanEl.className = "todo-item-value";
  spanEl.innerText = title;

  return spanEl;
}

export function createInputItem(title) {
  const inputEl = document.createElement('input');
  inputEl.className = "todo-item-input";
  inputEl.value = title;

  return inputEl;
}
