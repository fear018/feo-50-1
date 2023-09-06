// Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

// Они хранят свойства (пары ключ-значение), где:
// Ключи свойств должны быть строками или символами (обычно строками).
// Значения могут быть любого типа.

// let user = new Object(); // синтаксис "конструктор объекта"
// let user1 = {}; // синтаксис "литерал объекта"

// const obj = {
//   name: "John",
// };

// Чтобы получить доступ к свойству, мы можем использовать:
// Запись через точку: obj.property.
// Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].

// let user = {     // объект
//   name: "John",  // под ключом "name" хранится значение "John"
//   age: 30        // под ключом "age" хранится значение 30
// };

// Мы можем в любой момент добавить в него новые свойства.

// Для удаления свойства мы можем использовать оператор delete:
// delete user.age;

// const obj = {
//   name: "John",
// };

// obj.age = 234;

// delete obj.name;
// console.log(obj);

// let user = { name: "John", age: 30 };

// console.log("age" in user); // true, user.age существует
// console.log("blabla" in user); // false, user.blabla не существует

// Для перебора всех свойств объекта используется цикл for..in.
// for (key in object) {
//   // тело цикла выполняется для каждого свойства объекта
// }

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// console.log(user["name"]);

// for (let key in user) {
//   // ключи
//   console.log("key =>", key); // name, age, isAdmin
//   // значения ключей
//   console.log("user[key] =>", user[key]); // John, 30, true
// }

// Упорядочение свойств объекта
// Короткий ответ: свойства упорядочены особым образом:
// свойства с целочисленными ключами сортируются по возрастанию,
// остальные располагаются в порядке создания.

// let codes = {
//   49: "Германия",
//   41: "Швейцария",
//   44: "Великобритания",
//   1: "США",
// };

// for (let code in codes) {
//   console.log(code); // 1, 41, 44, 49
// }

// Копирование объектов и ссылки
// Переменная, которой присвоен объект, хранит не сам объект,
// а его «адрес в памяти» – другими словами, «ссылку» на него.

// let user = { name: "John" };
// let admin = user;

// admin.name = "Pete"; // изменено по ссылке из переменной "admin"
// console.log("user", user.name);
// console.log("admin", admin.name);

// clone = {}; // новый пустой объект
// let user = {
//   name: "John",
//   age: 30,
// };

// let clone = {}; // новый пустой объект

// // // давайте скопируем все свойства user в него
// for (let key in user) {
//   clone[key] = user[key];
// }

// // // теперь clone это полностью независимый объект с тем же содержимым
// clone.name = "Pete"; // изменим в нём данные
// console.log(user);
// console.log(clone);

// alert( user.name ); // все ещё John в первоначальном объекте

// Object.assign
// const target = { a: 1, b: 2 };
// const source = { c: 4, d: 5 };
// const obj = {};
// Object.assign(obj, source);
// obj.c = 26;

// console.log(obj);
// console.log(source);

// Методы объекта, "this"
// пользователь может совершать действия
let user = {
  name: "John",
  age: 30,
  sayHi: function (gender) {
    // this - это "текущий объект"
    console.log(this);
    console.log(`Hello my name is - ${this.name}`);
    console.log(`Hello my gender is - ${gender}`);
  },
};

// user.sayHi("FEMALE"); // Hello my name is - John

// Опциональная цепочка '?.'
// Проблема «несуществующего свойства»
// let user = {
//   address: {
//     street: "Главная 1",
//   },
// };

// let user = {}; // пользователь без свойства "address"
// // console.log(user.address.street); // Ошибка!
// console.log(user?.address?.street); // Ошибка!

// Деструктурирующее присваивание
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// const { title } = options;
// const title = options.title;
// const width = options.width;
// const height = options.height;
// console.log(title); // Menu
// console.log(options.title); // Menu
// console.log(options.width); // 100
// console.log(options.height); // 200

// const getData = () => {
//   const name = prompt("Введите имя");
//   const surname = prompt("Введите фамилию");
//   const experience = +prompt("Введите опыт работы в годах");

//   return {
//     name: name,
//     surname: surname,
//     experience: experience,
//   };

//   // return { name, surname, experience };
// };

// // data.name, data.surname, data.experience
// const { name, surname, experience } = getData();
// console.log(name, surname, experience);
