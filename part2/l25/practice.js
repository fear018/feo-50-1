// JSON – это формат данных,
// который имеет собственный независимый стандарт
// и библиотеки для большинства языков программирования.

// JSON поддерживает простые объекты, массивы, строки, числа, логические значения и null.

// JavaScript предоставляет методы
// JSON.stringify для сериализации в JSON
// и JSON.parse для чтения из JSON.

// const user = {
//   name: "John Smith",
//   age: 35,
//   pets: ["dog", "cat"],
// };

// const json = JSON.stringify(user);
// const parsed = JSON.parse(json);
// console.log(json);
// console.log(parsed);

// Объекты веб-хранилища
// localStorage и sessionStorage позволяют хранить пары ключ/значение в браузере.

// Что в них важно – данные, которые в них записаны,
// сохраняются после обновления страницы (в случае sessionStorage)
// и даже после перезапуска браузера (при использовании localStorage)

// Хранилище привязано к источнику (домен/протокол/порт).
// Это значит, что разные протоколы или поддомены определяют разные объекты хранилища,
// и они не могут получить доступ к данным друг друга.

// Объекты веб-хранилища localStorage и sessionStorage позволяют
// хранить пары ключ/значение в браузере.

// key и value должны быть строками.
// Лимит 5 Мб+, зависит от браузера.
// Данные не имеют «времени истечения».

// Событие storage:
// Срабатывает при вызове setItem, removeItem, clear.

// localStorage
// Совместно используется между всеми вкладками и окнами с одинаковым источником
// «Переживает» перезапуск браузера

// sessionStorage
// Разделяется в рамках вкладки браузера, среди ифреймов из того же источника
// «Переживает» перезагрузку страницы (но не закрытие вкладки)

// Объекты хранилища localStorage и sessionStorage предоставляют одинаковые методы и свойства:

// setItem(key, value) – сохранить пару ключ/значение.
// getItem(key) – получить данные по ключу key.
// removeItem(key) – удалить данные с ключом key.
// clear() – удалить всё.
// key(index) – получить ключ на заданной позиции.
// length – количество элементов в хранилище.

// const user = {
//   name: "John Smith",
//   age: 35,
//   pets: ["dog", "cat"],
// };

// localStorage.setItem("name", "John");
// localStorage.setItem("user", JSON.stringify(user));
// console.log(localStorage.length);

// const name = localStorage.getItem("name");
// const userData = JSON.parse(localStorage.getItem("user"));
// console.log(name);
// console.log(userData);

// localStorage.removeItem("name");

// localStorage.clear();

// const key = localStorage.key(0);
// console.log("KEY", key);

// setTimeout, setInterval

// setTimeout(() => {
//   console.log("Hello");
// }, 3000);

// let counter = 0;

// const intervalId = setInterval(() => {
//   if (counter === 5) {
//     clearInterval(intervalId);
//   }

//   counter += 1;
//   console.log("Hello setInterval");
// }, 500);
