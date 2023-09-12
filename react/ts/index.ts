interface IEvent {
  target: EventTarget | null;
  preventDefault: () => void;
}

type TColumnIds = "todo" | "inProgress" | "done" | "deleted";

interface ITodoItem {
  id: number;
  title: string;
  description: string;
}

interface IData {
  todo: ITodoItem[];
  inProgress: ITodoItem[];
  done: ITodoItem[];
  deleted: ITodoItem[];
}

const eventCommonHandler = (
  event: IEvent,
  data: IData,
  column: Element,
  columnId: TColumnIds
): void => {
  const element = event.target as HTMLElement;

  switch (true) {
    case element.classList.contains("list-plus-img"):
      const form: Element | null = column.querySelector(".list-form");

      form?.classList.toggle("form-hidden");
      break;

    case element.classList.contains("add-button"):
      addToDoHandler(event, column, data, columnId);
      break;

    case element.classList.contains("delete"):
      deleteAndRestoreHandler(event, data, columnId);
      break;

    case element.classList.contains("edit"):
      toggleEditFormHandler(event, data, columnId);
      break;

    case element.classList.contains("save"):
      saveEditFormHandler(event, data, columnId);
      break;

    case element.classList.contains("next"):
      nextHandler(event, data, columnId);
      break;
  }
};

const drawList = (data: IData, columnId: TColumnIds): void => {
  const count: Element | null = document.querySelector(`#${columnId} small`);
  const list: Element | null = document.querySelector(`#${columnId} ul`);

  if (!list || !count) return;

  list.innerHTML = "";

  count.innerHTML = `Count: ${data[columnId].length}`;

  data[columnId].forEach(({ id, title, description }: ITodoItem) => {
    list.innerHTML += `
      <li class="list-item" id=${id}>
        <p class="text">Title: ${title}</p>
        <p class="text">Description: ${description}</p>

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

const deleteAndRestoreHandler = (
  event: IEvent,
  data: IData,
  columnId: TColumnIds,
  restore: boolean = false
): void => {
  const listId: TColumnIds = restore ? "deleted" : columnId;
  const listPushId: "todo" | "deleted" = restore ? "todo" : "deleted";
  const element = event.target as HTMLElement;

  const id: string | undefined = element.closest(".list-item")?.id;
  if (!id) return;

  const item: ITodoItem | undefined = data[listId].find(
    (item: ITodoItem) => item.id === +id
  );

  data[listId] = data[listId].filter((item: ITodoItem) => item.id !== +id);

  if (item) {
    data[listPushId].push(item);
  }

  drawList(data, restore ? "todo" : listId);
  drawList(data, "deleted");
};

const addToDoHandler = (
  event: IEvent,
  column: Element,
  data: IData,
  columnId: TColumnIds
): void => {
  event.preventDefault();
  const title: HTMLInputElement | null = column.querySelector(
    `#${columnId}-title`
  );
  const description: HTMLInputElement | null = column.querySelector(
    `#${columnId}-description`
  );

  if (!title || !description) return;

  data[columnId].push({
    id: Date.now(),
    title: title.value,
    description: description.value,
  });

  const form: Element | null = column.querySelector(".list-form");
  if (form) {
    form.classList.add("form-hidden");
  }

  drawList(data, columnId);
};

const toggleEditFormHandler = (
  event: IEvent,
  data: IData,
  columnId: TColumnIds
): void => {
  const element = event.target as HTMLElement;
  const listItem: Element | null = element.closest(".list-item");

  if (!listItem) return;

  const editForm: Element | null = listItem.querySelector(".edit-form");

  if (editForm) {
    editForm.remove();
    return;
  }

  const id: string = listItem.id;
  const item: ITodoItem | undefined = data[columnId].find(
    (item: ITodoItem) => item.id === +id
  );

  if (item) {
    listItem.insertAdjacentHTML(
      "beforeend",
      `<form class="edit-form">
        <input type="text" name="title" value="${item.title}">
        <input type="text" name="description" value="${item.description}">
        <button class="button save" type="submit">Save</button>
      </form>`
    );
  }
};

const saveEditFormHandler = (
  event: IEvent,
  data: IData,
  columnId: TColumnIds
): void => {
  event.preventDefault();
  const element = event.target as HTMLElement;

  const listItem: Element | null = element.closest(".list-item");
  if (!listItem) return;

  const listItemId: string = listItem.id;

  const item: ITodoItem | undefined = data[columnId].find(
    (item: ITodoItem) => item.id === +listItemId
  );
  const itemIndex: number = data[columnId].findIndex(
    (item: ITodoItem) => item.id === +listItemId
  );

  const title: HTMLInputElement | null =
    listItem.querySelector(`input[name="title"]`);
  const description: HTMLInputElement | null = listItem.querySelector(
    `input[name="description"]`
  );

  if (!title || !description || !item) return;

  data[columnId].splice(itemIndex, 1, {
    id: +listItemId,
    title: title.value,
    description: description.value,
  });

  const editForm: Element | null = listItem.querySelector(".edit-form");

  editForm?.remove();
  drawList(data, columnId);
};

const nextHandler = (
  event: IEvent,
  data: IData,
  columnId: TColumnIds
): void => {
  const element = event.target as HTMLElement;

  const id: string | undefined = element.closest(".list-item")?.id;
  if (!id) return;

  const item: ITodoItem | undefined = data[columnId].find(
    (item: ITodoItem) => item.id === +id
  );

  data[columnId] = data[columnId].filter((item: ITodoItem) => item.id !== +id);

  if (!item) return;

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

const init = (): void => {
  let data: IData = {
    todo: [],
    inProgress: [],
    done: [],
    deleted: [],
  };

  const columns: Element[] = [...document.querySelectorAll(".сolumn")];
  const deleted: Element | null = document.querySelector("#deleted");

  columns.forEach((column: Element) => {
    if (column.id !== "deleted") {
      column.addEventListener("click", (event) => {
        const columnId = column.id as TColumnIds;

        eventCommonHandler(event, data, column, columnId);
      });
    }
  });

  deleted?.addEventListener("click", (event) => {
    const element = event.target as HTMLElement;

    if (element.classList.contains("restore")) {
      deleteAndRestoreHandler(event, data, "deleted", true);
    }
  });
};

init();
