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

  todoList.forEach(item => {
    const element = document.createElement('div');
    element.className = 'todoItem';
    element.innerHTML = item.label;
    element['data-id'] = item.id;
    element.onclick = mouseEvent => {
      const item = mouseEvent.target;
      const id = item['data-id'];
      item.classList.toggle('todoItem--done');
      const found = todoList.find(item => item.id === id);
      found.isDone = !found.isDone;
    };
    container.appendChild(element);
  });
}
