const eventCommonHandler = (event, data, column, columnId) => {
  switch (true) {
    case event.target.classList.contains("list-plus-img"):
      column.querySelector(".list-form").classList.toggle("form-hidden");
      break;

    case event.target.classList.contains("add-button"):
      addToDoHandler(event, column, data, columnId);
      break;

    case event.target.classList.contains("delete"):
      deleteAndRestoreHandler(event, data, columnId);
      break;

    case event.target.classList.contains("edit"):
      toggleEditFormHandler(event, data, columnId);
      break;

    case event.target.classList.contains("save"):
      saveEditFormHandler(event, data, columnId);
      break;

    case event.target.classList.contains("next"):
      nextHandler(event, data, columnId);
      break;
  }
};

const drawList = (data, columnId) => {
  const count = document.querySelector(`#${columnId} small`);
  const list = document.querySelector(`#${columnId} ul`);
  list.innerHTML = "";

  count.innerHTML = `Count: ${data[columnId].length}`;

  data[columnId].forEach((item) => {
    list.innerHTML += `
      <li class="list-item" id=${item.id}>
        <p class="text">Title: ${item.title}</p>
        <p class="text">Description: ${item.description}</p>

        <div class="buttons">
          ${
            columnId !== "deleted"
              ? `<button class="button edit">Edit</button>
                <button class="button delete">Delete</button>
                <button class="button next">Next</button>`
              : `<button class="button restore">Restore</button>`
          }
          
        </div>
      </li>`;
  });
};

const deleteAndRestoreHandler = (event, data, columnId, restore = false) => {
  const listId = restore ? "deleted" : columnId;
  const listPushId = restore ? "todo" : "deleted";

  const id = event.target.closest(".list-item").id;
  const item = data[listId].find((item) => item.id === +id);

  data[listId] = data[listId].filter((item) => item.id !== +id);
  data[listPushId].push(item);

  drawList(data, restore ? "todo" : listId);
  drawList(data, "deleted");
};

const addToDoHandler = (event, column, data, columnId) => {
  event.preventDefault();
  const title = column.querySelector(`#${columnId}-title`);
  const description = column.querySelector(`#${columnId}-description`);

  data[columnId].push({
    id: Date.now(),
    title: title.value,
    description: description.value,
  });

  column.querySelector(".list-form").classList.toggle("form-hidden");

  drawList(data, columnId);
};

const toggleEditFormHandler = (event, data, columnId) => {
  const listItem = event.target.closest(".list-item");

  if (listItem.querySelector(".edit-form")) {
    listItem.querySelector(".edit-form").remove();
    return;
  }

  const id = listItem.id;
  const item = data[columnId].find((item) => item.id === +id);

  listItem.insertAdjacentHTML(
    "beforeend",
    `<form class="edit-form">
      <input type="text" name="title" value="${item.title}">
      <input type="text" name="description" value="${item.description}">
      <button class="button save" type="submit">Save</button>
    </form>`
  );
};

const saveEditFormHandler = (event, data, columnId) => {
  event.preventDefault();
  const listItem = event.target.closest(".list-item");
  const listItemId = listItem.id;

  const item = data[columnId].find((item) => item.id === +listItemId);
  const itemIndex = data[columnId].findIndex((item) => item.id === +listItemId);

  const title = listItem.querySelector(`input[name="title"]`);
  const description = listItem.querySelector(`input[name="description"]`);

  data[columnId].splice(itemIndex, 1, {
    ...item,
    title: title.value,
    description: description.value,
  });

  listItem.querySelector(".edit-form").remove();
  drawList(data, columnId);
};

const nextHandler = (event, data, columnId) => {
  const id = event.target.closest(".list-item").id;
  const item = data[columnId].find((item) => item.id === +id);

  data[columnId] = data[columnId].filter((item) => item.id !== +id);

  if (columnId === "todo") {
    data.inProgress.push(item);
  } else if (columnId === "inProgress") {
    data.done.push(item);
  } else {
    data.deleted.push(item);
  }

  drawList(data, columnId);
  drawList(
    data,
    columnId === "todo"
      ? "inProgress"
      : columnId === "inProgress"
      ? "done"
      : "deleted"
  );
};

const init = () => {
  let data = {
    todo: [],
    inProgress: [],
    done: [],
    deleted: [],
  };

  const columns = [...document.querySelectorAll(".сolumn")];
  const deleted = document.querySelector("#deleted");

  columns.forEach((column) => {
    if (column.id !== "deleted") {
      column.addEventListener("click", (event) => {
        eventCommonHandler(event, data, column, column.id);
      });
    }
  });

  deleted.addEventListener("click", (event) => {
    if (event.target.classList.contains("restore")) {
      deleteAndRestoreHandler(event, data, "deleted", true);
    }
  });
};

init();
