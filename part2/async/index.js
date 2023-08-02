// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 3000);

// setTimeout(() => {
//   console.log(4);
// }, 6000);

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// Показать что такое синхронный код и асинхронный код

// Объект Promise используется для отложенных и асинхронных вычислений.

// let promise = new Promise(function (resolve, reject) {
//   // функция-исполнитель (executor)
// });

// Её аргументы resolve и reject – это колбэки,
// которые предоставляет сам JavaScript. Наш код – только внутри исполнителя.

// Когда он получает результат, сейчас или позже – не важно, он должен вызвать один из этих колбэков:

// resolve(value) — если работа завершилась успешно, с результатом value.
// reject(error) — если произошла ошибка, error – объект ошибки.

// У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:

// Promise может находиться в трёх состояниях:
// ожидание (pending): начальное состояние, не исполнен и не отклонён.
// исполнено (fulfilled): операция завершена успешно.
// отклонено (rejected): операция завершена с ошибкой.

// let promise = new Promise(function (resolve, reject) {
//   // эта функция выполнится автоматически, при вызове new Promise

//   // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//   setTimeout(() => {
//     reject(new Error("Whoops!"));
//   }, 1000);
// });

// console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// let promise = new Promise(function(resolve, reject) {
//   // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("END_First");

//     resolve(5);
//   }, 3000);
// });

// promise
//   .then((result) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("END_Second");

//         resolve(result * 2);
//       }, 3000);
//     });
//   })
//   .then((result) => {
//     console.log("RESULT =>", result);
//   })
//   .catch((error) => {
//     console.log("catch =>", error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// Promise.all принимает массив промисов и возвращает новый промис.
// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
// ]).then((result) => {
//   console.log(result); // 1,2,3
// }); // когда все промисы выполнятся, результат будет 1,2,3
// // каждый промис даёт элемент массива

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise((reject) => setTimeout(() => reject(new Error("ERROR-")), 2000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
// ]).then((result) => {
//   console.log(result);
// });

// первый выполненный промис, из которого берёт результат (или ошибку)
// Promise.race([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
// ]).then((result) => {
//   console.log(result); // first
// });

// первый успешно выполнившийся промис
// Promise.any([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise((reject) => setTimeout(() => reject(new Error("ERROR-")), 1000)), // 3
// ]).then((result) => {
//   console.log(result); // first
// });

// ждёт всех и возвращает массив результатов даже если есть ошибки
// Promise.any([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
// ]).then((result) => {
//   console.log(result); // first
// });

// function delay(ms) {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       resolve("Прошло 2 секунды!");
//     }, ms)
//   );
// }

// delay(2000).then((result) => console.log(result));

// async function f() {
//   try {
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("готово!"), 3000);
//     });

//     console.log(1);

//     let result = await promise; // будет ждать, пока промис не выполнится (*)

//     console.log(2);

//     alert(result); // "готово!"
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("finally");
//   }
// }

// f();

// const fArrow = async () => {
//   try {
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("готово!"), 3000);
//     });

//     console.log(1);

//     let result = await promise; // будет ждать, пока промис не выполнится (*)

//     console.log(2);

//     alert(result); // "готово!"
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("finally");
//   }
// }

// f();
