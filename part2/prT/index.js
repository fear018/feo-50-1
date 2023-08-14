const drawList = (data, wrapperId) => {
  const list = document.querySelector(`#${wrapperId} ul`);
  list.innerHTML = "";

  data[wrapperId].forEach((item, index) => {
    list.innerHTML += `
        <li class='card' id=${item.id} >
          <p>#: ${index + 1}</p>
          <p>Title: ${item.title}</p>
          <p>Description: ${item.description}</p>
          ${
            wrapperId === "done"
              ? `<div><button class="restore">RESTORE</button></div>`
              : `<div><button class="delete">DELETE</button></div>
              <div><button class="edit">EDIT</button></div>`
          }
        </li>`;
  });
};

const submitHandler = (event, data) => {
  event.preventDefault();

  const wrapper = event.target.closest(".wrapper-item");
  const wrapperId = wrapper.id;
  const title = wrapper.querySelector("#title");
  const description = wrapper.querySelector("#description");

  data[wrapperId].push({
    id: Date.now(),
    title: title.value,
    description: description.value,
  });

  drawList(data, wrapperId);
};

const deleteHandler = (event, data) => {
  const wrapper = event.target.closest(".wrapper-item");
  const wrapperId = wrapper.id;
  const id = event.target.closest(".card").id;

  const item = data[wrapperId].find((item) => item.id === +id);

  data[wrapperId] = data[wrapperId].filter((item) => item.id !== +id);
  data.done.push(item);

  drawList(data, wrapperId);
  drawList(data, "done");
};

const init = () => {
  let data = {
    todo: [],
    inProgress: [],
    done: [],
  };

  const submitTodo = document.querySelector("#submitTodo");
  const submitInProgress = document.querySelector("#submitInProgress");
  const todoList = document.querySelector("#todo-list");

  submitTodo.addEventListener("click", (event) => {
    submitHandler(event, data);
  });

  submitInProgress.addEventListener("click", (event) => {
    submitHandler(event, data);
  });

  todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
      deleteHandler(event, data);
    }
  });
};

init();
