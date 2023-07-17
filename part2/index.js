// Document Object Model — «объектная модель документа» —
// это независящий от платформы и языка программный интерфейс,
// позволяющий программам и скриптам получить доступ к содержимому HTML

// BOM - Спецификация позволяет Javascript общаться с браузером по вопросам,
// отличным от содержимого страницы.Это относится к навигатору, истории, экрану и т. д.
// Объектная модель браузера — это соглашение для конкретного браузера,
// которое относится ко всем объектам веб-браузера.

// DOM tree - это представление HTML-документа в виде дерева.

// Получив DOM-узел, мы можем перейти к его ближайшим соседям используя навигационные ссылки.

// querySelector
// querySelectorAll [0]
// getElementById
// getElementsByName
// getElementsByTagName
// getElementsByClassName

// elem.matches(css) - проверяет, удовлетворяет ли элемент CSS-селектору.
// elem.closest(css) - ищет ближайший элемент выше по иерархии DOM, который удовлетворяет CSS-селектору.
// elemA.contains(elemB) - возвращает true, если elemB находится внутри elemA(в том числе, если он тот же элемент).

// const div = document.querySelector(".parent-node");
// const childNodes = div.firstChild;
// console.log(childNodes);
// parentNode - ссылка на родителя.
// childNodes - коллекция дочерних элементов, включая текстовые.
// firstChild, lastChild - ссылки на первый и последний дочерние элементы.
// previousSibling, nextSibling - ссылки на соседние элементы.

// - только элементы
// parentElement, children - коллекция детей.
// firstElementChild, lastElementChild - ссылки на первый и последний дочерние элементы.
// previousElementSibling, nextElementSibling - ссылки на соседние элементы.

// document.body.tagName - получить имя тега
// Свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки.
// Мы также можем изменять его
// const div = document.querySelector(".parent-node");
// div.innerHTML = "Новый BODY!";
// div.innerHTML += "<span>PART 2: => Новый BODY!</span>";
// // textContent - получает текст со всех потомков.
// console.log(div.textContent);

// Атрибуты и DOM-свойства
// document.body.id
// console.log(document.body);

{
  /* <body id="body" type="...">
  <input id="input" type="text">
  <script>
    alert(input.type); // text
    alert(body.type); // undefined: DOM-свойство не создалось, потому что оно нестандартное
  </script>
</body> */
}
// Таким образом, для нестандартных атрибутов не будет соответствующих DOM-свойств.
// Все атрибуты доступны с помощью следующих методов:
// elem.hasAttribute(name) – проверяет наличие атрибута.
// elem.getAttribute(name) – получает значение атрибута.
// elem.setAttribute(name, value) – устанавливает значение атрибута.
// elem.removeAttribute(name) – удаляет атрибут.
// console.log(document.body.removeAttribute("data-asd"));

{
  /* <div id="div" style="color:red;font-size:3rem">Hello</div> */
}

// Что если мы используем нестандартный атрибут для наших целей,
// а позже он появится в стандарте и будет выполнять какую-то функцию?
// Язык HTML живой, он растёт, появляется больше атрибутов,
// чтобы удовлетворить потребности разработчиков.
// В этом случае могут возникнуть неожиданные эффекты.

// Чтобы избежать конфликтов, существуют атрибуты вида data-*.
// Все атрибуты, начинающиеся с префикса «data-», зарезервированы для использования программистами.
// Они доступны в свойстве dataset.
// dataset

// .order[data-order-state="new"] {
//   color: green;
// }

// const div = document.querySelector("#div");
// style="color: red; font-size: 3rem"
// console.log(div.style);
// div.style.color = "red";
// div.style.fontSize = "3rem";

// div.style.cssText = "color: red; margin-left: 6rem; font-size: 3rem";
// elem.style - получить стили
// body.style.backgroundColor
// .style.cssText=`color: red !important;
//     background-color: yellow;
//     width: 100px;
//     text-align: center;
//   `;
// document.body.className = "body";

// const div = document.querySelector("#div");
// console.log(div.classList);
// // elem.classList – это специальный объект с методами для добавления/удаления одного класса.
// // Методы classList:
// div.classList.remove("red");
// div.classList.add("purple");
// console.log("purple", div.classList.contains("purple"));
// console.log("red", div.classList.contains("red"));

// div.addEventListener("click", () => {
//   div.classList.toggle("purple");
// });
// elem.classList.add/remove("class") – добавить/удалить класс.
// elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
// elem.classList.contains("class") – проверка наличия класса, возвращает true/false.

// let div = document.createElement("div");
// div.className = "alert h1";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
// document.body.prepend(div);
// document.body.insertAdjacentHTML("afterbegin", "<strong>Всем привет!</strong>");

// document.body.innerHTML +=
//   "<div class='alert h1'><strong>Всем привет!</strong> Вы прочитали важное сообщение.</div>";

// Вот методы для различных вариантов вставки:
// node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// node.before(...nodes or strings) –- вставляет узлы или строки до node,
// node.after(...nodes or strings) –- вставляет узлы или строки после node,
// node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.

// универсальный метод вставки: elem.insertAdjacentHTML(where, html).
// Первый параметр – это специальное слово, указывающее,
// куда по отношению к elem производить вставку. Значение должно быть одним из следующих:
// Второй параметр – это HTML-строка, которая будет вставлена именно «как HTML».

// "beforebegin" – вставить html непосредственно перед elem,
// "afterbegin" – вставить html в начало elem,
// "beforeend" – вставить html в конец elem,
// "afterend" – вставить html непосредственно после elem.

// Например:
// document.body.insertAdjacentHTML("beforebegin", "<p>Привет</p>");
// document.body.insertAdjacentHTML("afterend", "<p>Пока</p>");

// <p>Привет</p>
// <div id="div"></div>
// <p>Пока</p>

// Для удаления узла есть методы node.remove()

const div = document.querySelector("#div");

div.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
  div.classList.toggle("purple");
});

const submit = document.querySelector("#submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name");
  const age = document.querySelector("#age");
  const list = document.querySelector("#list");

  list.innerHTML += `<li>Name:${name.value} Age:${age.value}</li>`;

  // event.preventDefault();
});

// Событие – это сигнал от браузера о том, что что-то произошло.
// Все DOM-узлы подают такие сигналы.
// события
// обработчик событий
// event - объект события
// event.type - тип события
// event.target - элемент, на котором сработал обработчик
// event.currentTarget - элемент, на котором висит обработчик
// event.clientX / event.clientY - координаты курсора в момент клика относительно окна

// Всплытие, погружение, цель события
{
  /* <style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form> */
}

// for (let elem of document.querySelectorAll("*")) {
//   elem.addEventListener(
//     "click",
//     (e) => alert(`Погружение: ${elem.tagName}`),
//     true
//   );
//   elem.addEventListener("click", (e) => alert(`Всплытие: ${elem.tagName}`));
// }

// Делегирование событий
