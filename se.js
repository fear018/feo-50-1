// Спросить у Программиста (Валидация данных НЕ нужна):
// имя, фамилию РАЗДЕЛЬНО (оператором prompt)
// Опыт работы в годах (оператором prompt)
// Сложность проектов (оператором confirm, например, “Ваши проекты были сложные?”)
// Говоришь на английском (оператором confirm, например, “Вы свободно говорите на английском?”)
// Ты знаешь Алгоритмы? (оператором confirm, например, “Ты знаешь Алгоритмы?”)
// Управление командой нравится? (оператором confirm, например, “Тебе нравится управлять командой?”)

// Вывести оператором alert анкету пользователя по примеру:
// Ваше полное имя:
// Ваш опыт в годах:
// Градация: junior/middle/senior/principal
// Примерная зп: $0
// Шанс попасть на работу в корпорацию: шансы есть

// Градация:
// junior (0-2 года),
// middle (2-5 лет + английский),
// senior (от 5 лет + английский + сложные проекты),
// principal (от 10 лет + английский + сложные проекты + управление командой)

// ЗП:
// junior (0-2 года) - до 1500$,
// middle (2-5 лет) - от 1500$ до 2700$,
// senior (от 6 лет) - от 3000$,
// principal (от 10 лет) - от 7000$

// Шанс:
// Если нет английского, то шансов нет.
// Если нет алгоритмов, то шансов нет.
// Если небыло сложных проектов, то шансов мало (если есть предыдущие 2 пункта).
// Если это всё есть то шансы есть.

// ! Оператор alert() должен использоваться ОДИН раз.

const name = prompt("Введите имя");
const surname = prompt("Введите фамилию");
const experience = +prompt("Введите опыт работы в годах");
const isDifficultProjects = confirm("Ваши проекты были сложные?");
const isEnglish = confirm("Вы свободно говорите на английском?");
const isAlgorithms = confirm("Ты знаешь Алгоритмы?");
const isTeamManagement = confirm("Тебе нравится управлять командой?");
const fullName = `${name} ${surname}`;

let grade = null;
let salary = null;
let chance = null;

switch (true) {
  case experience > 2 && experience <= 5 && isEnglish:
    grade = "middle";
    break;
  case experience > 5 && isEnglish && isDifficultProjects:
    grade = "senior";
    break;
  case experience >= 10 && isEnglish && isDifficultProjects && isTeamManagement:
    grade = "principal";
    break;
  default:
    grade = "junior";
}

switch (grade) {
  case "middle":
    salary = "от 1500$ до 2700$";
    break;
  case "senior":
    salary = "от 3000$";
    break;
  case "principal":
    salary = "от 7000$";
    break;
  default:
    salary = "от 300$ до 1500$";
}

switch (true) {
  case !isEnglish || !isAlgorithms:
    chance = "Шансов нет";
    break;
  case !isDifficultProjects:
    chance = "Шансов мало";
    break;
  default:
    chance = "Шансы есть";
}

alert(`
  Ваше Имя: ${fullName}
  Ваш опыт в годах: ${experience}
  Градация: ${grade}
  Примерная зп: ${salary}
  Шансы попасть на работу в корпорацию: ${chance}
`);
