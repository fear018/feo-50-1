const name = prompt("Введите имя");
const surname = prompt("Введите фамилию");
const patronymic = prompt("Введите отчество");
const age = +prompt("Введите возраст");
const gender = confirm("Ваш пол - мужской?") ? "мужской" : "женский";
let pension = null;

if (
  (gender === "мужской" && age >= 65) ||
  (gender === "женский" && age >= 55)
) {
  pension = "да";
} else {
  pension = "нет";
}

alert(`
  Ваше ФИО: ${surname} ${name} ${patronymic}
  Ваш возраст в годах: ${age}
  Ваш возраст в днях: ${age * 365}
  Через 5 лет вам будет: ${age + 5}
  Ваш пол: ${gender}
  Вы на пенсии: ${pension}
`);
