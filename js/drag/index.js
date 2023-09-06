let draggedItem = null;

document.addEventListener("dragstart", (e) => {
  draggedItem = e.target;
  setTimeout(() => {
    e.target.style.opacity = "0.5";
  }, 0);
});

document.addEventListener("dragend", (e) => {
  setTimeout(() => {
    e.target.style.opacity = "1";
    draggedItem = null;
    document.querySelectorAll(".highlight").forEach((item) => {
      item.remove();
    });
  }, 0);
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("dragenter", (e) => {
  if (e.target.className == "draggable") {
    const highlight = document.createElement("div");
    highlight.className = "highlight";
    if (!document.querySelector(".highlight")) {
      e.target.parentNode.insertBefore(highlight, e.target);
    }
  }
});

document.addEventListener("dragleave", (e) => {
  if (e.target.className.includes("draggable")) {
    if (
      e.relatedTarget.className !== "draggable" &&
      e.relatedTarget.className !== "highlight"
    ) {
      document.querySelector(".highlight").remove();
    }
  }
});

document.addEventListener("drop", (e) => {
  if (
    e.target.className.includes("draggable") ||
    e.target.className === "highlight"
  ) {
    const parentColumn = e.target.parentNode;
    if (e.target.className === "highlight") {
      parentColumn.insertBefore(draggedItem, e.target);
    } else {
      parentColumn.insertBefore(draggedItem, e.target.nextSibling);
    }
  }
});
