// const div = document.querySelector("#mouse_event");

// let box = div.getBoundingClientRect();

// У элементов есть следующие геометрические свойства (метрики):

// offsetParent – ближайший CSS-позиционированный родитель или ближайший td, th, table, body.
// offsetLeft/offsetTop – позиция в пикселях верхнего левого угла относительно offsetParent.
// offsetWidth/offsetHeight – «внешняя» ширина/высота элемента, включая рамки.
// clientLeft/clientTop – расстояние от верхнего левого внешнего угла до внутренного.
// clientWidth/clientHeight – ширина/высота содержимого вместе с внутренними отступами padding, но без полосы прокрутки.
// console.log(div.clientLeft);
// console.log(div.clientTop);
// console.log(div.clientWidth);
// console.log(div.clientHeight);

// Изменить текущую прокрутку:

// window.scrollTo(pageX,pageY) – абсолютные координаты,
// window.scrollBy(x,y) – прокрутка относительно текущего места,
// elem.scrollIntoView(top) – прокрутить страницу так, чтобы сделать elem видимым
// (выровнять относительно верхней/нижней части окна).

// const input_text = document.querySelector("#input_text");
// const topBtn = document.querySelector("#top");

// topBtn.addEventListener("click", (event) => {
//   // window.scrollTo(0, 0);

//   input_text.scrollIntoView({ behavior: "smooth", block: "start" });
// });

// Типы событий мыши
// Мы уже видели некоторые из этих событий:

// mousedown/mouseup
// Кнопка мыши нажата/отпущена над элементом.
// mouseover/mouseout
// Курсор мыши появляется над элементом и уходит с него.
// mousemove
// Каждое движение мыши над элементом генерирует это событие.
// click
// Вызывается при mousedown , а затем mouseup над одним и тем же элементом, если использовалась левая кнопка мыши.
// dblclick
// Вызывается двойным кликом на элементе.
// contextmenu
// Вызывается при попытке открытия контекстного меню, как правило, нажатием правой кнопки мыши. Но, заметим, это не совсем событие мыши, оно может вызываться и специальной клавишей клавиатуры.

// mouseover, mouseout, mousemove, mouseenter и mouseleave
// События mouseover/mouseout происходят, когда курсор появляется над элементом, либо уходит с него. При этом эти события всплывают.
// mousemove – когда курсор движется.
// mouseenter/mouseleave – особые события, которые не всплывают. Они генерируются, когда курсор появляется над элементом, либо уходит с него. При этом эти события не всплывают.

// div.addEventListener("contextmenu", (event) => {
//   console.log("contextmenu");
// });

// div.addEventListener("mouseleave", (event) => {
//   console.log("mouseleave");
// });

// Событие focus вызывается в момент фокусировки, а blur – когда элемент теряет фокус.
{
  /* <style>
  .error {
    background: red;
  }
</style>

Ваш email: <input type="email" id="input">
<input type="text" style="width:280px" placeholder="введите неверный email и кликните сюда">

<script>
  input.onblur = function() {
    if (!this.value.includes('@')) { // не email
      // показать ошибку
      this.classList.add("error");
      // ...и вернуть фокус обратно
      input.focus();
    } else {
      this.classList.remove("error");
    }
  };
</script> */
}

// Событие	Описание	Особенности
// change	Значение было изменено.	Для текстовых полей срабатывает при потере фокуса.
// input	Срабатывает при каждом изменении значения.	Запускается немедленно, в отличие от change.

// const input_text = document.querySelector("#input_text");

// input_text.addEventListener("keydown", (event) => {
//   console.log(event);
//   console.log(event.code);
// });

// keydown – при нажатии на клавишу (если клавиша остаётся нажатой, происходит автоповтор),
// keyup – при отпускании клавиши.
