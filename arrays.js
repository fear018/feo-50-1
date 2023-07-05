// Массив – это особый тип объекта, предназначенный для работы с упорядоченным набором элементов.

// // квадратные скобки (обычно)
// let arr = [item1, item2...];

// // new Array (очень редко)
// const arr = [1, 2, 3, 4, 5, "232", false, { name: "John" }];
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// for (let item of arr) {
//   console.log(item);
// }
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[6]);
// console.log(arr.length);
// const arrLength = arr.length;
// console.log(arr[arrLength - 1]);

// Мы можем получить элемент по его индексу, например arr[0].

// Чтобы пройтись по элементам массива:
// for (let i=0; i<arr.length; i++) – работает быстрее всего, совместим со старыми браузерами.
// for (let item of arr) – современный синтаксис только для значений элементов (к индексам нет доступа).

// Методы массивов
// Полный список есть в справочнике MDN.
// const arr = [1, 2, 3];
// // arr.push(5);
// // console.log(arr);
// arr.unshift("qweqwe");
// console.log(arr);
// push(...items)добавляет items в конец массива.
// pop() удаляет элемент в конце массива и возвращает его.
// shift() удаляет элемент в начале массива и возвращает его.
// unshift(...items) добавляет items в начало массива.

// let arr = ["I", "go", "home"];
// delete arr[1]; // удалить "go"
// console.log(arr); // undefined
// console.log(arr.length); // undefined
// // теперь arr = ["I",  , "home"];
// alert(arr.length); // 3

// Для добавления/удаления элементов:
// splice(pos, deleteCount, ...items) – начиная с индекса pos удаляет deleteCount элементов и вставляет items.
// let arr = ["Я", "изучаю", "JavaScript"];
// arr.splice(1, 0, "LOVE"); // начиная с индекса 1, удалить 1 элемент
// console.log(arr);

// удалить 3 первых элемента и заменить их другими

// slice(start, end) – создаёт новый массив, копируя в него элементы с индекса start до end (не включая end).
// let arr = ["t", "e", "s", "t"];
// console.log(arr.slice(1, 3)); // e,s (копирует с 1 до 3)

// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
// let arr = [1, 2];
// // // создать массив из: arr и [3,4]
// console.log(arr.concat([3, 4])); // 1,2,3,4
// // // создать массив из: arr и [3,4] и [5,6]
// console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// // // создать массив из: arr и [3,4], потом добавить значения 5 и 6
// console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// Для поиска среди элементов:
// indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
// let arr = [1, 2, 3, 4, 5, false];
// console.log(arr.indexOf(false)); // 1

// let fruits = ['Яблоко', 'Апельсин', 'Яблоко']
// alert( fruits.indexOf('Яблоко') ); // 0 (первый 'Яблоко')
// alert( fruits.lastIndexOf('Яблоко') ); // 2 (последний 'Яблоко')

// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// let fruits = ["Яблоко", "Апельсин", "Яблоко"];
// console.log(fruits.includes("Апельсин")); // true

// find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
// let users = [
//   { id: 1, name: "Вася" },
//   { id: 2, name: "Петя" },
//   { id: 3, name: "Маша" },
// ];

// let result = users.find(function (item, index, array) {
//   if (item.id === 1) {
//     return true;
//   }
// });

// let user = users.find((item) => item.id === 2);
// console.log(user);

// alert(user.name);

// let users = [
//   { id: 1, name: "Вася" },
//   { id: 2, name: "Петя" },
//   { id: 3, name: "Маша" },
// ];

// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter((item) => item.id < 3);
// console.log(someUsers); // 2

// alert(someUsers.length); // 2
// findIndex похож на find, но возвращает индекс вместо значения.
// let userIndex = users.findIndex((item) => item.id > 2);
// console.log(userIndex);

// Для перебора элементов:
// forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
// arr.forEach(function(item, index, array) {
//   // ... делать что-то с item
// });
// const names = [];
// const usersNames = ["Бильбо", "Гэндальф", "Назгул"];
// usersNames.forEach((item) => {
//   if (item.length === 6) {
//     names.push(item);
//   }
// });
// console.log(names);

// Для преобразования массива:
// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// let arr = ["Яблоко", "Апельсин", "Груша"];
// let arrLength = arr.map((item) => item.toUpperCase());
// console.log(arr); // 6,8,6
// console.log(arrLength); // 6,8,6
// let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
// alert(lengths); // 6,8,6

// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr); // 5,4,3,2,1

// split/join – преобразует строку в массив и обратно.
// let names = "Вася, Петя, Маша";
// let arr = names.split("");
// console.log(arr); // Вася,Петя,Маша
// join
// let arr2 = ["Вася", "Петя", "Маша"];
// let str = arr2.join(", ");
// console.log(str); // Вася,Петя,Маша

// reduce/reduceRight(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
// let value = arr.reduce(
//   function (accumulator, item, index, array) {
//     // ...
//   },
//   [initial]
// );

// accumulator – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
// item – очередной элемент массива,
// index – его позиция,
// array – сам массив.

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce(function (accumulator, item) {
//   console.log(accumulator, item);
//   return accumulator + item;
// }, 0);

// console.log(result); // 15

// Дополнительно:
// Array.isArray(arr) проверяет, является ли arr массивом.
// console.log(Array.isArray("[1, 2, 3]")); // true

// Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
// const array = [1, 2, 3, 4, 5];
// const array2 = [2, 4];

// console.log(array.some((item) => item % 2 === 0));
// console.log(array2.every((item) => item % 2 === 0));
// // Expected output: true

// Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

// sort(func) – сортирует массив «на месте», а потом возвращает его.
// let arr = [1, 2, 15, 1231231];

// // метод сортирует содержимое arr
// arr.sort((a, b) => a - b);
// arr.sort((a, b) => b - a);
// console.log(arr); // 1, 15, 2
// лексикографический порядок
// alert( arr );  // 1, 15, 2
// var myarray=[25, 8, 7, 41]
// myarray.sort(function(a,b){
//   return a — b
// }) //Массив будет [7, 8, 25, 41]

// var myarray=[25, 8, 7, 41]
// myarray.sort(function(a,b){
//   return b — a
// }) //Массив становится [41, 25, 8, 7]
