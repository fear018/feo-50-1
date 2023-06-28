// =====> git
// git - vcs - version control system

// STEPS:
// 1. Скачать git - https://git-scm.com/downloads
// 2. Установить git
// 3. Настроить git config --global user.name "name" и git config --global user.email "email"
// 4. Создать папку проекта делаем изменения в проекте
// 5. Открыть терминал по адресу папки
// 6. git init - инициализация git репозитория
// 7. git add . - добавляет все файлы в индекс
// 8. git commit -m "message" - добавляет коммит в ЛОКАЛЬНЫЙ РЕПОЗИТОРИЙ репозиторий
// 9. Создать удаленный репозиторий на github
// 10. git remote add origin "url" - добавляет удаленный репозиторий
// 11. git push -u origin master - отправляет изменения в удаленный репозиторий

// централизованная система контроля версий
// есть центральный репозиторий
// и каждый разработчик может вносить изменения в проект
// и потом синхронизировать с центральным репозиторием

// распределенная система контроля версий
// это когда есть проект и каждый разработчик имеет свою копию проекта
// и может вносить изменения в свою копию
// и потом синхронизировать с центральным репозиторием

// состояния файлов в git
// untracked - файл не отслеживается с помощью .gitingore или небыл изменен
// tracked - файл отслеживается
// modified - файл изменен но не добавлен в коммит(индекс) (unstaged)
// staged - файл добавлен в индекс(staging area) и готов к коммиту
// commited - файл добавлен в коммит

// команды git
// git config --global user.name "name" - устанавливает имя пользователя
// git config --global user.email "email" - устанавливает email пользователя

// git init - инициализация git репозитория
// git status - показывает статус файлов в репозитории
// git add - добавляет файлы в индекс
// git commit -m "message" - добавляет коммит в репозиторий
// git checkout -b "branch-name" - создает новую ветку
// git branch - показывает список веток
// git remote add origin "url" - добавляет удаленный репозиторий
// git push -u origin master - отправляет изменения в удаленный репозиторий
// git clone "url" - клонирует удаленный репозиторий

// git pull - получает изменения с удаленного репозитория
// git log - показывает историю коммитов
// git checkout "branch-name" - переключается на ветку
// git merge "branch-name" - сливает ветку с текущей и историю коммитов
// git rebase "branch-name" - сливает ветку с текущей но без истории коммитов
// git reset - отменяет изменения
// git reset --hard - отменяет изменения и удаляет файлы
// git reset --hard HEAD^ - отменяет последний коммит
// git reset --hard HEAD~2 - отменяет последние 2 коммита

// Сервисы для хранения проектов:
// - GitHub
// - Gitlab
// - Bitbucked

// =====> js
// Изначально JavaScript был создан, чтобы «сделать веб-страницы живыми».

// Программы на этом языке называются скриптами.
// Они могут встраиваться в HTML и выполняться автоматически при загрузке веб-страницы.

// Сегодня JavaScript может выполняться не только в браузере,
// но и на сервере или на любом другом устройстве,
// которое имеет специальную программу, называющуюся «движком» JavaScript.

// Движок JavaScript - это программа, преобразующая JavaScript в код более низкого уровня,
// который компьютер сможет понять.

// Движки сложны. Но основы понять легко.
// Движок (встроенный, если это браузер) читает («парсит») текст скрипта.
// Затем он преобразует («компилирует») скрипт в машинный код.
// После этого машинный код запускается и работает достаточно быстро.

// Разве JavaScript — это не интерпретируемый язык?
// Это зависит от реализации. Обычно JavaScript относят к интерпретируемым языкам,
// хотя вообще-то он компилируется.
// Современные компиляторы JavaScript фактически выполняют JIT-компиляцию,
// т.е. компиляцию «на лету», которая осуществляется во время работы программы.

// JavaScript - это интерпретируемый, мультипарадигменный язык,
// который поддерживает динамический, объектно-ориентированный,
// императивный и функциональный стили программирования.

// Парадигма программирования - стиль написания исходного кода компьютерной программы

// Динамическое программирование - это способ решения сложных задач
// путём разбиения их на более простые подзадачи.

// ООП - методология программирования, основанная на представлении программы
// в виде совокупности взаимодействующих объектов,
// каждый из которых является экземпляром определённого класса,
// а классы образуют иерархию наследования.

// Императивное программирование - это парадигма, для которой характерно следующее:
// в исходном коде программы записываются инструкции (команды);
// инструкции должны выполняться последовательно;
// данные, получаемые при выполнении предыдущих инструкций, могут читаться из памяти последующими инструкциями;
// данные, полученные при выполнении инструкции, могут записываться в память.

// Пример. Допустим, мы хотим приготовить обед.
// В императивной (как делать) парадигме это выглядит как-то так:
// купить мясо, огурцы, помидоры, соль;
// порезать мясо, посолить;
// поставить сковородку на плиту;
// …
// В декларативной (что делать): хочу на обед жареное мясо с овощами.

// Функциональное программирование - парадигма программирования,
// в которой процесс вычисления трактуется как вычисление значений функций.

// js спецификация - ECMAScript

// js спаравочник - MDN

// console

// Подключение скриптов
// <script src="script.js"></script>

// Структура кода
// Инструкции – это синтаксические конструкции и команды, которые выполняют действия.
// comments

// Переменные
// Переменная – это «именованное хранилище» для данных.
// Мы можем использовать переменные для хранения товаров, посетителей и других данных.
// let, const, var;
// let message = "Hello, World!";
// message = "QWERTY";
// console.log(message);

// const myBirthday = "18.04.1982";
// myBirthday = "QWERTY";
// console.log(myBirthday);

// Имена переменных
// В JavaScript есть два ограничения, касающиеся имён переменных:
// Имя переменной должно содержать только буквы, цифры или символы $ и _.
// Первый символ не должен быть цифрой.
// Регистр имеет значение: apple и AppLE – две разные переменные.
// Зарезервированные имена - let, class, return и function.

// Типы данных
// Значение в JavaScript всегда относится к данным определённого типа.
// Есть восемь основных типов данных в JavaScript и они делятся на две категории.
// примитивные типы данных - string, number, boolean, null, undefined, symbol, bigint
// объекты - object
// number, bigint, string, boolean, null, undefined, symbol и object.

// const number = 42;
// console.log(number);
// const bigInt = 1234567890123456789012345678901234567890n;
// bigint больше 9007199254740991 или меньше -9007199254740991

// let str = "Hello";
// let str2 = "Одинарные кавычки тоже подойдут";
// let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
// console.log(phrase);

// true, false;
// console.log(5 > 3);

// null - представляет собой «ничего», «пусто» или «значение неизвестно».
// let age = null;
// undefined - означает, что «значение не было присвоено».
// let age;
// console.log(age);

// typeof
// console.log(typeof undefined); // "undefined"
// console.log(typeof 0); // "number"
// console.log(typeof 10n); // "bigint"
// console.log(typeof true); // "boolean"
// console.log(typeof "foo"); // "string"
// console.log(typeof Symbol("id")); // "symbol"
// console.log(typeof null); // "object"  (2)
// console.log(typeof Math); // "object"  (1)
// console.log(typeof alert); // "function"  (3)
// alert(typeof alert); // "function"
// object для более сложных структур данных.

// Взаимодействие: alert, prompt, confirm
// alert("Hello");
// const result = prompt("Are you here?");
// console.log(result);
// const result = confirm("Are you here?");
// console.log(result);

// Преобразование типов
// Существует 3 наиболее широко используемых преобразования: строковое, численное и логическое.
// Строковое преобразование
// let value = 4;
// console.log(typeof value); // boolean
// console.log(value + 2); // boolean

// value = String(value); // теперь value это строка "true"
// console.log(typeof value); // string
// console.log(value + 2); // string

// Численное преобразование
// Численное преобразование происходит в математических функциях и выражениях.
// Например, когда операция деления / применяется не к числу:
// console.log("6" / "2"); // 3, строки преобразуются в числа
// Number('123');
// console.log(Number("   123   ")); // 123
// console.log(Number("123z")); // NaN (ошибка чтения числа на месте символа "z")
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

// Логическое преобразование
// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean("Привет!")); // true
// console.log(Boolean("")); // false
// console.log(Boolean("0")); // true
// console.log(Boolean(" ")); // пробел это тоже true (любая непустая строка это true)

// Базовые операторы, математика
// Термины: «унарный», «бинарный», «операнд»
// Операнд – то, к чему применяется оператор. Например, в умножении 5 * 2 есть два операнда

// Унарным называется оператор, который применяется к одному операнду.
// Например, оператор унарный минус "-" меняет знак числа на противоположный:
// let x = 1;
// x = -x;
// console.log(x); // -1, применили унарный минус

// Бинарным называется оператор, который применяется к двум операндам.
// Тот же минус существует и в бинарной форме:
// const x = 1;
// const y = 3;
// console.log(y - x);

// Математика
// Поддерживаются следующие математические операторы:

// Сложение +,
// Вычитание -,
// Умножение *,
// Деление /,
// Взятие остатка от деления %,
// console.log(5 % 2);
// Возведение в степень **. (2 ** 3)
// console.log(5 ** 3);

// Сложение строк при помощи бинарного оператора + конкатенирует строки:
// let s = "моя" + "строка";
// console.log(s); // моястрока

// все кроме +
// console.log("1" + 2); // "12"
// console.log(2 + "1"); // "21"
// console.log(2 + 2 + "1");
// console.log(6 - "2");
// console.log("6" / "2");

// Приведение к числу, унарный +
// let apples = "2";
// let oranges = "3";
// console.log(apples + oranges);
// console.log(+apples + +oranges);
// console.log(Number(apples) + Number(oranges));

// Операторы сравнения
// Больше/меньше: a > b, a < b.
// Больше/меньше или равно: a >= b, a <= b.
// let a = 2;
// let b = 3 == "3";
// console.log(b);
// let c = 3 === "3";
// console.log(c);
// let d = 3 !== 3;
// console.log(d);

// =, ==, ===, !=, !==
// Равно: a == b. Обратите внимание, для сравнения используется двойной знак равенства ==. Один знак равенства a = b означал бы присваивание.
// Не равно. В математике обозначается символом ≠, но в JavaScript записывается как a != b.
// ===

// Логические операторы
// Оператор ИЛИ (||)
// Оператор И (&&)
// Оператор НЕ (!)

// console.log("true || true", true || true); // true
// console.log("false || true", false || true); // true
// console.log("true || false", true || false); // true
// console.log("false || false", false || false); // false

// console.log("true && true", 5 === 5 && 4 === 4); // true
// console.log("false && true", 5 === 4 && 4 === 4); // false
// console.log("true && false", true && false); // false
// console.log("false && false", false && false); // false

// ===================================>

// Оператор нулевого слияния (??)
// Эта возможность была добавлена в язык недавно.
// Оператор нулевого слияния представляет собой два вопросительных знака ??.

// Он обрабатывает null и undefined

// Результат выражения a ?? b будет следующим:
// если a определено, то a,
// если a не определено, то b.

// let name = "Иван";
// let user = name ?? "Аноним";
// console.log(user);
// console.log(user ?? "Аноним"); // Аноним (user не существует)

// let user = "Иван";
// console.log(user ?? "Аноним"); // Иван (user существует)

// Условное ветвление: if, '?'
// Инструкция «if»
// if, else, else if, ?
// const isMale = confirm("Ваш пол - мужской?"); // boolean value
// let gender = null;

// false
// if (!isMale) {
// true
// if (isMale) {

// if (isMale === true) {
//   gender = "мужской";
// } else {
//   gender = "женский";
// }

// Тернарный оператор '?'
// let result = условие ? значение1 : значение2;
// let gender1 = isMale === true ? "мужской" : "женский";
// let gender2 = isMale ? "мужской" : "женский";
// let gender3 = !isMale ? "мужской" : "женский";

// Инкремент/декремент
// Инкремент ++ увеличивает на 1
// Декремент -- уменьшает на 1
// let counter = 2;
// console.log("INITIAL", counter);

// Постфиксная форма
// counter++;
// console.log("Постфиксная", counter);

// Префиксная форма
// console.log("Префиксная", ++counter);

// Префиксная и постфиксная формы
// Постфиксная форма возвращает старое значение. !!!
// Постфиксная форма
// let incr = 10;
// let decr = 10;

// incr++; // Инкремент
// decr--; // Декремент

// console.log("Постфиксная форма", incr);
// console.log("Постфиксная форма", decr);

// // Префиксная форма
// let incr2 = 10;
// let decr2 = 10;

// ++incr2; // Инкремент
// --decr2; // Декремент

// console.log("Префиксная форма", incr2);
// console.log("Префиксная форма", decr2);

// Циклы while, do ... while и for - 3 вида циклов:

// while – Проверяет условие перед каждой итерацией.
// Цикл while имеет следующий синтаксис:
// while (condition) {
//   // код
//   // также называемый "телом цикла"
// }
// counter = counter + 1;
// let counter = 1;

// while (counter < 5) {
//   counter++;
//   console.log("counter", counter);
// }

// do..while – Проверяет условие после каждой итерации.
// do {
//   counter++;
//   console.log("counter", counter);
// } while (counter < 5);

// for – Проверяет условие перед каждой итерацией.
// for (начало; условие; шаг) {
//   // ... тело цикла ...
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// continue и break
// for (let i = 0; i < 10; i++) {
//   // если true, пропустить оставшуюся часть тела цикла
//   // if (i % 2 === 0) {
//   if (i === 5) {
//     break;
//   }

//   console.log(i); // 1, затем 3, 5, 7, 9
// }

// Конструкция "switch"
// let a = 5;

// if (a === 3) {
//   alert("Маловато");
// } else if (a === 4) {
//   alert("В точку!");
// } else if (a === 5) {
//   alert("Перебор");
// } else {
//   alert("Нет таких значений");
// }

// switch (a) {
//   case 3:
//     alert("Маловато");
//     break;
//   case 4:
//     alert("В точку!");
//     break;
//   case 5:
//     alert("Перебор");
//     break;
//   default:
//     alert("Нет таких значений");
// }

// const str = "Hello, World!";
// console.log(str);
// console.log("length", str.length);
// console.log("str[12] =>", str[12]);
// console.log("str[13] =>", str[13]);

// for (let char of "Hello, World!") {
//   console.log(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
// }

// let str = "Widget with id";
// console.log(str.indexOf("with"));

// let str = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
// console.log(str.slice(0, 5));
// // 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
// alert( str.slice(0, 1) );

// const token = "Bearer 1234567890";
// console.log(token.includes("Bearer"));
// console.log(token.startsWith("earer"));
// console.log(token.endsWith("90"));

// includes, startsWith, endsWith
// const number = 43;
// console.log(number);
// console.log(isNaN(number));

// const pi = 3.1415926535;

// console.log("pi", pi.toFixed(2));

// console.log("pi", pi);
// console.log("Math round", Math.round(pi));
// console.log("Math round", Math.round(3.5));
// console.log("Math floor", Math.floor(3.8));
// console.log("Math ceil", Math.ceil(3.2));

// const name = prompt("Введите имя");
// const surname = prompt("Введите фамилию");
// const patronymic = prompt("Введите отчество");
// const age = +prompt("Введите возраст");
// const days = age * 365;
// const ageAfterFiveYears = age + 5;
// const isMale = confirm("Ваш пол - мужской?"); // boolean value

// let gender = null;
// let pension = null;

// if (isMale === true) {
//   gender = "мужской";
// } else {
//   gender = "женский";
// }

// if (isMale === true && age >= 65) {
//   pension = "да";
// } else if (isMale === false && age >= 55) {
//   pension = "да";
// } else {
//   pension = "нет";
// }

// alert(`
//   Ваше ФИО: ${surname} ${name} ${patronymic}
//   Ваш возраст в годах: ${age}
//   Ваш возраст в днях: ${days}
//   Через 5 лет вам будет: ${ageAfterFiveYears}
//   Ваш пол: ${gender}
//   Вы на пенсии: ${pension}
// `);

// Boolean(0); // false
// !!0; // false

// const message = "Hello, World!";
// console.log(message);

// console.log(message.toUpperCase());
// console.log(message.toLowerCase());

// console.log(message.length);
