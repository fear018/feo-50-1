// событийный цикл
// микро и макро задачи

// синхронный код
// микрозадачи
// макрозадачи

// Сразу после каждой макрозадачи движок исполняет все задачи из
// очереди микрозадач перед тем, как выполнить следующую макрозадачу
// или отобразить изменения на странице, или сделать что-то ещё.

setTimeout(() => console.log("timeout"));
setTimeout(() => console.log("timeout 1000"), 1000);

new Promise((resolve) => {
  setTimeout(() => resolve("promise 2000"), 2000);
}).then((res) => console.log(res));

new Promise((resolve) => {
  resolve("promise RESOLVE");
}).then((res) => console.log(res));

fetch("https://jsonplaceholder.typicode.com/users/1/todos")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((todos) => {
    console.log(todos);
  })
  .catch((error) => {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  });

console.log("sync");
