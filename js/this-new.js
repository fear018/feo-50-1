// "use strict";

// console.log(this);
// let user = {
//   name: "John",
//   age: 30,
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

//
// let arr = ["John", "Doe"];
// // деструктурирующее присваивание
// let [firstName, surname] = arr;
// console.log(firstName, surname);

// alert(firstName); // John
// alert(surname);  // Doe

// второй элемент не нужен
// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// alert( title ); // Consul

//
// Остаточные параметры «…»
// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "Roman Republic"];
// rest это массив элементов, начиная с 3-го
// console.log(name1);
// console.log(name2);
// console.log(rest);

//
// Конструктор, оператор "new" для создания однотипных объектов
// function user(name, surname, email, phone) {
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;

//   this.getFullName = function () {
//     console.log(`Name: ${this.name}, Surname: ${this.surname}`);
//     return {
//       name: this.name,
//       surname: this.surname,
//     };
//   };
// }

// let user1 = new user("Jack", "Sparrow", "email@sd.com", "123456789");
// let user2 = new user("John", "Doe", "em222ail@sd.com", "456789");

// console.log(user1);
// console.log(user2);

// let user = new User("Jack");
// alert(user.name); // Jack
// alert(user.isAdmin); // false

// Когда функция вызывается как new User(...), происходит следующее:
// Создаётся новый пустой объект, и он присваивается this.
// Выполняется тело функции. Обычно оно модифицирует this, добавляя туда новые свойства.
// Возвращается значение this.
// Другими словами, new User(...) делает что-то вроде:

// function User(name) {
//   // this = {};  (неявно)

//   // добавляет свойства к this
//   this.name = name;
//   this.isAdmin = false;

//   // return this;  (неявно)
// }
// Таким образом, let user = new User("Jack") возвращает тот же результат, что и:

// let user = {
//   name: "Jack",
//   isAdmin: false
// };

// методы конструктора создание
// function User(name) {
//   this.name = name;

//   this.sayHi = function() {
//     alert( "Меня зовут: " + this.name );
//   };
// }

// let john = new User("John");
// john.sayHi(); // Меня зовут: John

//

// THIS
// call / apply / bind
// Метод call() вызывает метод (функцию) с указанным значением this
// и индивидуально предоставленными аргументами.

// const user = {
//   name: "John USER",
//   age: 303,
// };

// const person = {
//   name: "John",
//   age: 30,
//   getData: function (pow = 1) {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//     return { name: this.name, age: this.age, pow: this.age ** pow };
//   },
// };
// console.log(person.getData());
// const person1 = person.getData.call(user, 3);
// console.log(person1);

// Метод apply() вызывает функцию с указанным значением this
// и аргументами, предоставленными в виде массива

// const user = {
//   name: "John USER",
//   age: 303,
// };

// const person = {
//   name: "John",
//   age: 30,
//   getData: function (pow = 1) {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//     return { name: this.name, age: this.age, pow: this.age ** pow };
//   },
// };
// console.log(person.getData());
// const person1 = person.getData.apply(user, [2]);
// console.log(person1);

// Метод bind() создаёт новую функцию, которая при вызове устанавливает
// в качестве контекста выполнения this предоставленное значение.
// В метод также передаётся набор аргументов,
// которые будут установлены перед переданными в привязанную
// функцию аргументами при её вызове.

// const user = {
//   name: "John USER",
//   age: 303,
// };

// const person = {
//   name: "John",
//   age: 30,
//   getData: function (pow = 1) {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//     return { name: this.name, age: this.age, pow: this.age ** pow };
//   },
// };
// console.log(person.getData());
// const personBind = person.getData.bind(user);
// console.log("func", personBind);
// console.log(personBind());

// function showThis() {
//   const name = "Jack";

//   const user = {
//     name: this,
//   };

//   console.log(user);
// }

// showThis();
// Определение this:
// 1) Глобальный контекст
// 2) Контекст функции конструктора
// 3) Контекст вызова call / apply / bind
// 4) Контекст метода объекта
// 5) Контекст стрелочной функции

// Мы находимся внутри функции?
// Да: смотрим следующий пункт.
// Нет: this равен глобальному объекту.

// Мы находимся внутри стрелочной функции?
// Да: значение this такое же, как и в функции на уровень выше (т.е. содержащей данную). Вернитесь на предыдущий шаг и повторите алгоритм для неё. Если же функция не содержится ни в какой другой, this — глобальный объект.
// Нет: смотрим следующий пункт.

// Эта функция вызвана как конструктор (с помощью оператора new)?
// Да: this ссылается на новый объект, находящийся «в процессе конструкции».
// Нет: смотрим следующий пункт.

// Эта функция создана с помощью метода bind?
// Да: значение this равняется значению первого аргумента, который мы передали в метод bind при создании данной функции.
// Нет: смотрим следующий пункт.

// Эта функция передана куда-то в качестве колбэка или обработчика?
// Да: одному Господу известно, чему будет равен this при её вызове. Идите читать документацию по той штуке, которая её станет вызывать.
// Нет: смотрим следующий пункт.

// Эта функция вызвана с помощью метода apply или call?
// Да: в таком случае this равняется первому аргументу, переданному соответствующему методу.
// Нет: смотрим следующий пункт.

// Эта функция получена как значение свойства объекта и сразу же вызвана?
// Да: this равняется вышеупомянутому объекту.
// Нет: смотрим следующий пункт.

// Код выполняется в строгом режиме? ('use strict', ES6 модуль)
// Да: this равняется undefined.
// Нет: this равен глобальному объекту.

// =====>
// Прототипное наследование
// цепочка прототипов

// Свойство [[Prototype]] является внутренним и скрытым,
// но есть способ задать его.
// использование __proto__,

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;

// console.log(rabbit);
// console.log(rabbit.eats);

//

// let animal = {
//   eats: true,
//   walk() {
//     alert("Animal walk");
//   },
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// // walk взят из прототипа
// rabbit.walk(); // Animal walk

//

// let animal = {
//   eats: true,
//   walk() {
//     alert("Animal walk");
//   },
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// };

// walk взят из цепочки прототипов
// longEar.walk(); // Animal walk
// alert(longEar.jumps); // true (из rabbit)
// console.log(longEar);

// 1 - [[Prototype]];
// 2 - __proto__;

// 3 - prototype;
// ===========>
// F.prototype
// Как мы помним, новые объекты могут быть созданы
// с помощью функции-конструктора new F().

// Если в F.prototype содержится объект, оператор new устанавливает его
// в качестве [[Prototype]] для нового объекта.

// let animal = {
//   eats: true,
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;
// console.log(Rabbit.prototype);

// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// console.log(rabbit); // true

// =====
// Заимствование у прототипа
// let obj = {
//   0: "Hello",
//   1: "world!",
//   length: 2,
// };

// console.log(obj);
// console.log(Array);
// console.log(Array.prototype);
// console.log(Array.prototype.join);

// obj.join = Array.prototype.join;

// console.log(obj.join(", ")); // Hello,world!

// ====================> Class
// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   changeName(name) {
//     this.name = name;
//   }
// }

// function User1(name) {
//   this.name = name;

//   this.changeName = function (name) {
//     this.name = name;
//   };
// }

// // доказательство: User - это функция
// alert(typeof User); // function

// Вот что на самом деле делает конструкция class User {...}:
// Создаёт функцию с именем User, которая становится результатом объявления класса.
// Код функции берётся из метода constructor (она будет пустой, если такого метода нет).
// Сохраняет все методы, такие как sayHi, в User.prototype.

// наследование
// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//   }

//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} стоит неподвижно.`);
//   }
// }

// let animal1 = new Animal("Мой питомец");
// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} прячется!`);
//   }
// }

// let rabbit = new Rabbit("Белый кролик");

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.hide(); // Белый кролик прячется!

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//   }

//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} стоит неподвижно.`);
//   }
// }
class Rabbit extends Animal {
  // генерируется для классов-потомков, у которых нет своего конструктора
  constructor(name) {
    super(name);
  }

  hide() {
    console.log(`${this.name} прячется!`);
  }

  stop() {
    super.stop();
    this.hide();
  }
}

// let rabbit = new Rabbit("Белый кролик");
// console.log(rabbit);

// super + hide

// static
// class User {
//   constructor(name = "user") {
//     this.name = name;
//   }

//   static staticMethod() {
//     console.log(2 + 2);
//   }
// }

// // const user = new User("John");
// User.staticMethod();
