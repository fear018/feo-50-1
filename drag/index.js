// Drag and Drop events and attributes

// draggable - перетаскиваемый элемент - помещаем его в другой элемент «цель переноса» (droppable).
// dragstart — происходит, когда пользователь начинает перетаскивать элемент.
// dragend — происходит, когда пользователь закончил перетаскивание элемента
// dragover - курсор мыши наведен на элемент при перетаскивании
// dragenter - перетаскиваемый элемент достигает конечного элемента
// drop - происходит drop элемента

let draggedItem = null;
const columns = document.querySelectorAll(".column");

document.addEventListener("dragstart", (e) => {
  draggedItem = e.target;
  setTimeout(() => {
    draggedItem.style.display = "none";
  }, 0);
});

document.addEventListener("dragend", (e) => {
  setTimeout(() => {
    draggedItem.style.display = "block";
    draggedItem = null;

    columns.forEach((column) => {
      column.style.borderColor = "black";
      column.style.boxShadow = "";
    });
  }, 0);
});

columns.forEach((column) => {
  column.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  column.addEventListener("dragenter", function (e) {
    e.preventDefault();

    columns.forEach((column) => {
      column.style.borderColor = "black";
      column.style.boxShadow = "";
    });

    this.style.borderColor = "purple";
    this.style.boxShadow = "0 0 20px purple";
  });

  column.addEventListener("drop", function (e) {
    this.append(draggedItem);
  });
});
