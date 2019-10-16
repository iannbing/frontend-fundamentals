document.body.onload = init;

const todoItems = [
  { id: 1, label: 'do the dishes', isDone: false },
  { id: 2, label: 'do the laudry', isDone: false }
];

function init() {
  const container = createElement({
    className: 'container',
    innerHTML: `<span>To-Do List</span>`
  });
  const inputField = createElement({
    tag: 'input',
    parent: container,
    attributes: { type: 'text' }
  });

  inputField.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
      const id = Math.max(...todoItems.map(item => item.id)) + 1;
      todoItems.unshift({ id, label: inputField.value, isDone: false });

      createElement({
        className: 'todoItem',
        innerHTML: inputField.value,
        dataId: id,
        parent: container,
        onclick: e => {
          const element = e.target;
          element.classList.toggle('todoItem--done');
          const id = element['data-id'];
          const dataItem = todoItems.find(item => item.id === id);
          if (dataItem) {
            dataItem.isDone = !dataItem.isDone;
            console.log(`Updated item ${dataItem.id}`);
            console.log(dataItem);
          } else {
            console.error(`Unknwon item ${dataItem.id}`);
          }
        },
        nextSibling: document.getElementsByClassName('todoItem')[0]
      });
      inputField.value = '';
    }
  });

  todoItems.forEach(item => {
    createElement({
      className: 'todoItem',
      innerHTML: item.label,
      dataId: item.id,
      parent: container,
      onclick: e => {
        const element = e.target;
        element.classList.toggle('todoItem--done');
        const id = element['data-id'];
        const dataItem = todoItems.find(item => item.id === id);
        if (dataItem) {
          dataItem.isDone = !dataItem.isDone;
          console.log(`Updated item ${dataItem.id}`);
          console.log(dataItem);
        } else {
          console.error(`Unknwon item ${dataItem.id}`);
        }
      }
    });
  });

  createElement({
    className: 'cleanButton',
    tag: 'button',
    parent: container,
    innerHTML: 'Clean',
    onclick: e => {
      const doneItems = document.getElementsByClassName('todoItem--done');
      const doneItemArray = Array.from(doneItems);
      doneItemArray.forEach(doneItem => {
        doneItem.remove();
      });
    }
  });
}

function createElement({
  tag = 'div',
  parent = document.body,
  nextSibling,
  dataId = null,
  attributes = {},
  ...rest
}) {
  const element = document.createElement(tag);

  Object.entries(rest).forEach(([key, value]) => {
    element[key] = value;
  });

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  element['data-id'] = dataId;

  if (nextSibling) {
    console.log(nextSibling);
    const parentElement = nextSibling.parentElement;
    parentElement.insertBefore(element, nextSibling);
  } else {
    parent.appendChild(element);
  }

  return element;
}
