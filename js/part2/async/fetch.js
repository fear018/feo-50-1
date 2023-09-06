// Для сетевых запросов из JavaScript есть широко известный термин «AJAX»
// (аббревиатура от Asynchronous JavaScript And XML)

// Есть несколько способов делать сетевые запросы и получать информацию с сервера.

// Метод fetch()
// let promise = fetch(url, [options])

// let result = null;

// await fetch("https://jsonplaceholder.typicode.com/users/1/todos")
//   .then((response) => response.json())
//   .then((todos) => {
//     console.log(todos);
//     result = todos;
//   });

// const getPost = async () => {
//   const response = await fetch("https://reqres.in/api/users?page=1");
//   const result = await response.json(); // читаем ответ в формате JSON

//   return result;
// };

// const init = async () => {
//   const result = await getPost();

//   console.log(result);
// };

// init();

// url – URL для отправки запроса.
// options – дополнительные параметры: метод, заголовки и так далее.

// Без options это простой GET-запрос, скачивающий содержимое по адресу url.

// Мы можем увидеть HTTP-статус в свойствах ответа:
// status – код статуса HTTP-запроса, например 200.
// ok – логическое значение: будет true, если код HTTP-статуса в диапазоне 200-299.

// response.json() – декодирует ответ в формате JSON

// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = await fetch(url);
// let commits = await response.json(); // читаем ответ в формате JSON
// alert(commits[0].author.login);
// То же самое без await, с использованием промисов:
// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//   .then(response => response.json())
//   .then(commits => alert(commits[0].author.login));

// response.headers – возвращает заголовки ответа (объект)
// request.headers – возвращает заголовки запроса (объект)

// POST-запросы
// let response = await fetch('/article/fetch/post/user', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify(user)
// });
// let result = await response.json();
// alert(result.message);

// https://learn.javascript.ru/url

// https://developer.mozilla.org/ru/docs/Web/HTTP/CORS

// XMLHttpRequest
// 1. Создаём новый XMLHttpRequest-объект
// let xhr = new XMLHttpRequest();
// console.log(xhr);
// // 2. Настраиваем его: GET-запрос по URL /article/.../load
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1/todos");

// // 3. Отсылаем запрос
// xhr.send();

// // 4. Этот код сработает после того, как мы получим ответ сервера
// xhr.onload = function () {
//   if (xhr.status != 200) {
//     // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
//     console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
//   } else {
//     // если всё прошло гладко, выводим результат
//     console.log(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
//   }
// };

// xhr.onprogress = function (event) {
//   if (event.lengthComputable) {
//     console.log(`Получено ${event.loaded} из ${event.total} байт`);
//   } else {
//     console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
//   }
// };

// xhr.onerror = function () {
//   console.log("Запрос не удался");
// };

// Длинные опросы – это самый простой способ поддерживать постоянное соединение
// с сервером, не используя при этом никаких специфических
// протоколов (типа WebSocket или Server Sent Events).

// WebSocket – это современный способ иметь постоянное соединение между браузером и сервером.

// https => ws

// Нет ограничений, связанных с кросс-доменными запросами.
// Имеют хорошую поддержку браузерами.
// Могут отправлять/получать как строки, так и бинарные данные.
