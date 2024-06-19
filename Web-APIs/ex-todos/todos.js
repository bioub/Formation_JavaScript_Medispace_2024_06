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
  //     <input type="checkbox" class="todo-item-completed">
  //     <span class="todo-item-value">Acheter du pain</span>
  //     <button class="todo-item-delete">-</button>
  //   </div>

  // Exercice 1
  // Compléter cette fonction
  // avec la checkbox et le button moins

  const divEl = document.createElement('div');
  divEl.className = "todo-item";
  divEl.dataset.todoId = String(todo.id);

  const spanEl = document.createElement('span');
  spanEl.className = "todo-item-value";
  spanEl.innerText = todo.title;

  divEl.append(spanEl);

  // Exercice 2
  // Au click du bouton supprimer divEl
  // remove()

  return divEl;
}
