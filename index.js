// created newBranch

// =====> git
// git - vcs - version control system

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
// git log - показывает историю коммитов
// git checkout -b "branch-name" - создает новую ветку
// git checkout "branch-name" - переключается на ветку
// git branch - показывает список веток
// git merge "branch-name" - сливает ветку с текущей и историю коммитов
// git rebase "branch-name" - сливает ветку с текущей но без истории коммитов

// git remote add origin "url" - добавляет удаленный репозиторий

// git push -u origin master - отправляет изменения в удаленный репозиторий
// git clone "url" - клонирует удаленный репозиторий
// git pull - получает изменения с удаленного репозитория
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
// console.log("Hello, World!");
// alert("Hello, World!");
// comments

// Переменные
// Переменная – это «именованное хранилище» для данных.
// Мы можем использовать переменные для хранения товаров, посетителей и других данных.
// let, const, var;

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

// const bigInt = 1234567890123456789012345678901234567890n;
// bigint больше 9007199254740991 или меньше -9007199254740991

// let str = "Привет";
// let str2 = 'Одинарные кавычки тоже подойдут';
// let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

// null - представляет собой «ничего», «пусто» или «значение неизвестно».
// let age = null;
// undefined - означает, что «значение не было присвоено».
// let age;

// typeof
typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object"  (1)
typeof null; // "object"  (2)
typeof alert; // "function"  (3)

// object для более сложных структур данных.

// Взаимодействие: alert, prompt, confirm

// Преобразование типов
// Существует 3 наиболее широко используемых преобразования: строковое, численное и логическое.
// Строковое преобразование
// let value = true;
// console.log(typeof value); // boolean
// value = String(value); // теперь value это строка "true"
// console.log(typeof value); // string

// Численное преобразование
// Численное преобразование происходит в математических функциях и выражениях.
// Например, когда операция деления / применяется не к числу:
// console.log("6" / "2"); // 3, строки преобразуются в числа
// Number('123');
// console.log( Number("   123   ") ); // 123
// console.log( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
// console.log( Number(true) );        // 1
// console.log( Number(false) );       // 0

// Логическое преобразование
// console.log( Boolean(1) ); // true
// console.log( Boolean(0) ); // false
// console.log( Boolean("Привет!") ); // true
// console.log( Boolean("") ); // false
// console.log( Boolean("0") ); // true
// console.log( Boolean(" ") ); // пробел это тоже true (любая непустая строка это true)

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
// Взятие остатка от деления %, (5 % 2)
// Возведение в степень **. (2 ** 3)

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

// Инкремент/декремент
// Инкремент ++ увеличивает на 1
// Декремент -- уменьшает на 1
// let counter = 2;
// counter++;      // работает как counter = counter + 1, просто запись короче

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

// Операторы сравнения
// Больше/меньше: a > b, a < b.
// Больше/меньше или равно: a >= b, a <= b.
// Равно: a == b. Обратите внимание, для сравнения используется двойной знак равенства ==. Один знак равенства a = b означал бы присваивание.
// Не равно. В математике обозначается символом ≠, но в JavaScript записывается как a != b.
// ===

// Условное ветвление: if, '?'
// Инструкция «if»
// if, else, else if, ?

// Логические операторы
// Оператор И (&&)
// Оператор ИЛИ (||)
// Оператор НЕ (!)

// console.log("true || true", true || true); // true
// console.log("false || true", false || true); // true
// console.log("true || false", true || false); // true
// console.log("false || false", false || false); // false

// console.log("true && true", true && true); // true
// console.log("false && true", false && true); // false
// console.log("true && false", true && false); // false
// console.log("false && false", false && false); // false

// Оператор нулевого слияния (??)
// Эта возможность была добавлена в язык недавно.
// Оператор нулевого слияния представляет собой два вопросительных знака ??.

// Он обрабатывает null и undefined

// Результат выражения a ?? b будет следующим:
// если a определено, то a,
// если a не определено, то b.

// let user;
// console.log(user ?? "Аноним"); // Аноним (user не существует)

// let user = "Иван";
// console.log(user ?? "Аноним"); // Иван (user существует)

// Циклы while, do ... while и for - 3 вида циклов:

// while – Проверяет условие перед каждой итерацией.
// Цикл while имеет следующий синтаксис:
// while (condition) {
//   // код
//   // также называемый "телом цикла"
// }

// do..while – Проверяет условие после каждой итерации.
// do {
//   // тело цикла
// } while (condition);

// for – Проверяет условие перед каждой итерацией.
// for (начало; условие; шаг) {
//   // ... тело цикла ...
// }

// for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
//   console.log(i);
// }

// continue и break
// for (let i = 0; i < 10; i++) {
//   // если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) continue;

//   alert(i); // 1, затем 3, 5, 7, 9
// }

// Конструкция "switch"
// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }
