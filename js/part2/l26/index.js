// Map – это коллекция ключ/значение, как и Object.
// Но основное отличие в том, что Map позволяет использовать ключи любого типа.

// Методы и свойства:
// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.

// Например:
// let map = new Map();

// map.set("1", "str1"); // строка в качестве ключа
// map.set(1, "num1"); // цифра как ключ
// map.set(true, "bool1"); // булево значение как ключ
// map.set([0, 1, 3, "asd", { asd: false }], "qwer");

// console.log(map);

// Объект Set – это особый вид коллекции: «множество» значений (без ключей),
// где каждое значение может появляться только один раз.

// Его основные методы это:
// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// let set = new Set();

// // // считаем гостей, некоторые приходят несколько раз
// set.add(john);
// set.add(john);
// set.add(john);
// set.add(pete);
// set.add(pete);
// set.add(mary);
// set.add(mary);
// set.add(mary);

// console.log(set);

// Date
// getFullYear() Получить год (4 цифры)
// console.log("getFullYear", new Date().getFullYear());
// // getMonth() Получить месяц, от 0 до 11.
// console.log("getMonth", new Date().getMonth());

// // getDate() Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
// console.log("getDate", new Date().getDate());

// // getHours(), getMinutes(), getSeconds(), getMilliseconds()
// console.log(
//   "getHours",
//   new Date().getHours(),
//   "getMinutes",
//   new Date().getMinutes(),
//   "getSeconds",
//   new Date().getSeconds(),
//   "getMilliseconds",
//   new Date().getMilliseconds()
// );

// Получить, соответственно, часы, минуты, секунды или миллисекунды.
// getDay() Кроме того, можно получить определённый день недели
// console.log("getDay", new Date().getDay());

// // Date.now(); возвращает текущую метку времени – количество миллисекунд, прошедших с 1 января 1970 года
// console.log(Date.now());
// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };

// console.log(new Date());
// console.log(new Date().toLocaleString("de-DE", options));
// "Donnerstag, 20. Dezember 2012"

// Recursion
// Итеративный способ: цикл for:
// function pow(x, n) {
//   let result = 1;

//   // умножаем result на x n раз в цикле
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// alert( pow(2, 3) ); // 8

// Рекурсивный способ: упрощение задачи и вызов функцией самой себя:
// function pow(x, n) {
//   console.log("n", n);
//   if (n === 1) {
//     return x; // result
//   } else {
//     console.log("x else", x);
//     console.log("n else", n);
//     return x * pow(x, n - 1);
//   }
// }

// console.log("RESULT =>", pow(2, 3)); // 8

// Замыкание это механизм, где
// функция у которой есть доступ к своей внешней функции по области видимости,
// после того, как внешняя функция прекратилась.
// Это говорит о том, что замыкание может запоминать и получать доступ к переменным,
// и аргументам своей внешней функции, даже после того, как та прекратит выполнение.

// пример замыкания
// function setName(name) {
//   return function () {
//     return `${name} есть доступ к внешней переменной`;
//   };
// }

// const nameInfo = setName("John");

// // consol
// console.log(nameInfo());

// function plus(param) {
//   return function (number) {
//     return number + param;
//   };
// }

// const getResultplus = plus(10);

// console.log(getResultplus(10));
// console.log(getResultplus(1));
// console.log(getResultplus(2));
// console.log(getResultplus(3));

// Сборщик мусора
// Большая часть алгоритмов сборки мусора основана на понятии ссылки.
// В контексте управления памятью объект считается ссылающимся на другой объект,
// если у первого есть доступ ко второму (неважно - явный или неявный).

// Сборка мусора на основе подсчёта ссылок.
// Основное ограничение данного наивного алгоритма заключается в том,
// что если два объекта ссылаются друг на друга (создавая таким образом циклическую ссылку),
// они не могут быть уничтожены сборщиком мусора, даже если "более не нужны".

// Любое другое значение считается достижимым,
// если оно доступно из корня по ссылке или по цепочке ссылок.

// Существует 1 основных отличия var от let/const: var

// eval
// let code = 'alert("Привет")';
// eval('alert("Привет")');

// Каррирование – это трансформация функций таким образом,
// чтобы они принимали аргументы не как
// f(a, b, c), а как f(a)(b)(c).

// Каррирование не вызывает функцию. Оно просто трансформирует её.

// function curry(f) {
//   return function (a) {
//     return function (b) {
//       return f(a, b);
//     };
//   };
// }

// // использование
// function sum(a, b) {
//   return a + b;
// }

// let curriedSum = curry(sum);

// alert( curriedSum(1)(2) ); // 3

// Флаги и дескрипторы свойств
// let user = {
//   name: "John",
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, "name");
// console.log(descriptor);
/* дескриптор свойства:
{
  "value": "John",
  "writable": true, - если false, то нельзя менять значение свойства
  "enumerable": true, - если false, то свойство не появится в цикле for..in и в Object.keys
  "configurable": true - если false, то нельзя удалить свойство и менять его флаги
}
*/
// let user = {
//   name: "John",
// };

// Object.defineProperty(user, "name", {
//   writable: false,
// });

// user.name = "Pete";
// user.name = "df";
// user.name = "Pete";
// user.name = "df";
// user.name = "we";
// console.log(user);

// Свойства - геттеры и сеттеры
// Это свойства-аксессоры (accessor properties).
// Свойства-аксессоры представлены методами: «геттер» – для чтения и «сеттер» – для записи.
// При литеральном объявлении объекта они обозначаются get и set:

// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
// };

// console.log(user.fullName); // John Smith
// // // set fullName запустится с данным значением
// user.fullName = "Alice Cooper";
// console.log(user.fullName); // John Smith

// alert(user.name); // Alice
// alert(user.surname); // Cooper
