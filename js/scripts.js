document.body.onload = init;

let todoList = [
  {
    id: 1,
    label: 'do the dishes',
    isDone: false
  },
  {
    id: 2,
    label: 'do the laundry',
    isDone: false
  }
];

function init() {
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = 'To-Do List';
  document.body.appendChild(container);

  const inputField = document.createElement('input');
  inputField.type = 'text';
  container.appendChild(inputField);

  inputField.addEventListener('keyup', e => {
    const value = e.target.value;
    if (e.key === 'Enter') {
      const newItem = {
        isDone: false,
        label: value,
        id: Math.max(...todoList.map(item => item.id)) + 1
      };
      todoList.unshift(newItem);

      // clean up input
      inputField.value = '';

      // create dom
      const newItemDom = document.createElement('div');
      newItemDom['data-id'] = newItem.id;
      newItemDom.className = 'todoItem';
      newItemDom.innerHTML = newItem.label;
      newItemDom.onclick = mouseEvent => {
        const item = mouseEvent.target;
        const id = item['data-id'];
        item.classList.toggle('todoItem--done');
        const found = todoList.find(toDoItem => toDoItem.id === id);
        found.isDone = !found.isDone;
      };
      container.insertBefore(newItemDom, container.children[1]);
    }
  });

  todoList.forEach(item => {
    const element = document.createElement('div');
    element.className = 'todoItem';
    element.innerHTML = item.label;
    element['data-id'] = item.id;
    element.onclick = mouseEvent => {
      const item = mouseEvent.target;
      const id = item['data-id'];
      item.classList.toggle('todoItem--done');
      const found = todoList.find(toDoItem => toDoItem.id === id);
      found.isDone = !found.isDone;
    };
    container.appendChild(element);
  });
}
