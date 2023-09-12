var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var eventCommonHandler = function (event, data, column, columnId) {
    var element = event.target;
    switch (true) {
        case element.classList.contains("list-plus-img"):
            var form = column.querySelector(".list-form");
            form === null || form === void 0 ? void 0 : form.classList.toggle("form-hidden");
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
var drawList = function (data, columnId) {
    var count = document.querySelector("#".concat(columnId, " small"));
    var list = document.querySelector("#".concat(columnId, " ul"));
    if (!list || !count)
        return;
    list.innerHTML = "";
    count.innerHTML = "Count: ".concat(data[columnId].length);
    data[columnId].forEach(function (item) {
        list.innerHTML += "\n      <li class=\"list-item\" id=".concat(item.id, ">\n        <p class=\"text\">Title: ").concat(item.title, "</p>\n        <p class=\"text\">Description: ").concat(item.description, "</p>\n\n        <div class=\"buttons\">\n          ").concat(columnId !== "deleted"
            ? "<button class=\"button edit\">Edit</button>\n                <button class=\"button delete\">Delete</button>\n                <button class=\"button next\">Next</button>"
            : "<button class=\"button restore\">Restore</button>", "\n          \n        </div>\n      </li>");
    });
};
var deleteAndRestoreHandler = function (event, data, columnId, restore) {
    var _a;
    if (restore === void 0) { restore = false; }
    var listId = restore ? "deleted" : columnId;
    var listPushId = restore ? "todo" : "deleted";
    var element = event.target;
    var id = (_a = element.closest(".list-item")) === null || _a === void 0 ? void 0 : _a.id;
    if (!id)
        return;
    var item = data[listId].find(function (item) { return item.id === +id; });
    data[listId] = data[listId].filter(function (item) { return item.id !== +id; });
    if (item) {
        data[listPushId].push(item);
    }
    drawList(data, restore ? "todo" : listId);
    drawList(data, "deleted");
};
var addToDoHandler = function (event, column, data, columnId) {
    event.preventDefault();
    var title = column.querySelector("#".concat(columnId, "-title"));
    var description = column.querySelector("#".concat(columnId, "-description"));
    if (!title || !description)
        return;
    data[columnId].push({
        id: Date.now(),
        title: title.value,
        description: description.value,
    });
    var form = column.querySelector(".list-form");
    if (form) {
        form.classList.add("form-hidden");
    }
    drawList(data, columnId);
};
var toggleEditFormHandler = function (event, data, columnId) {
    var element = event.target;
    var listItem = element.closest(".list-item");
    if (!listItem)
        return;
    var editForm = listItem.querySelector(".edit-form");
    if (editForm) {
        editForm.remove();
        return;
    }
    var id = listItem.id;
    var item = data[columnId].find(function (item) { return item.id === +id; });
    if (item) {
        listItem.insertAdjacentHTML("beforeend", "<form class=\"edit-form\">\n        <input type=\"text\" name=\"title\" value=\"".concat(item.title, "\">\n        <input type=\"text\" name=\"description\" value=\"").concat(item.description, "\">\n        <button class=\"button save\" type=\"submit\">Save</button>\n      </form>"));
    }
};
var saveEditFormHandler = function (event, data, columnId) {
    event.preventDefault();
    var element = event.target;
    var listItem = element.closest(".list-item");
    if (!listItem)
        return;
    var listItemId = listItem.id;
    var item = data[columnId].find(function (item) { return item.id === +listItemId; });
    var itemIndex = data[columnId].findIndex(function (item) { return item.id === +listItemId; });
    var title = listItem.querySelector("input[name=\"title\"]");
    var description = listItem.querySelector("input[name=\"description\"]");
    if (!title || !description || !item)
        return;
    data[columnId].splice(itemIndex, 1, {
        id: +listItemId,
        title: title.value,
        description: description.value,
    });
    var editForm = listItem.querySelector(".edit-form");
    editForm === null || editForm === void 0 ? void 0 : editForm.remove();
    drawList(data, columnId);
};
var nextHandler = function (event, data, columnId) {
    var _a;
    var element = event.target;
    var id = (_a = element.closest(".list-item")) === null || _a === void 0 ? void 0 : _a.id;
    if (!id)
        return;
    var item = data[columnId].find(function (item) { return item.id === +id; });
    data[columnId] = data[columnId].filter(function (item) { return item.id !== +id; });
    if (!item)
        return;
    if (columnId === "todo") {
        data.inProgress.push(item);
    }
    else if (columnId === "inProgress") {
        data.done.push(item);
    }
    else {
        data.deleted.push(item);
    }
    drawList(data, columnId);
    drawList(data, columnId === "todo"
        ? "inProgress"
        : columnId === "inProgress"
            ? "done"
            : "deleted");
};
var init = function () {
    var data = {
        todo: [],
        inProgress: [],
        done: [],
        deleted: [],
    };
    var columns = __spreadArray([], document.querySelectorAll(".сolumn"), true);
    var deleted = document.querySelector("#deleted");
    columns.forEach(function (column) {
        if (column.id !== "deleted") {
            column.addEventListener("click", function (event) {
                var columnId = column.id;
                eventCommonHandler(event, data, column, columnId);
            });
        }
    });
    deleted === null || deleted === void 0 ? void 0 : deleted.addEventListener("click", function (event) {
        var element = event.target;
        if (element.classList.contains("restore")) {
            deleteAndRestoreHandler(event, data, "deleted", true);
        }
    });
};
init();
