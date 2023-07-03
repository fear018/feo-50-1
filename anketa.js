const validateDataNumeric = (text) => {
  let result = prompt(text);

  while (!result || isNaN(result)) {
    alert("Вы ввели некорректные данные, попробуйте еще раз");
    result = prompt(text);
  }

  return +result;
};

const validateData = (text, type = "string") => {
  let result = prompt(text);

  if (type === "number") {
    while (!result || isNaN(result)) {
      alert("Вы ввели некорректные данные, попробуйте еще раз");
      result = prompt(text);
    }

    return +result;
  }

  while (!result || !isNaN(result)) {
    alert("Вы ввели некорректные данные, попробуйте еще раз");
    result = prompt(text);
  }

  return result;
};

const getGender = (isMale) => (isMale ? "мужской" : "женский");

// if ((isMale === true && age >= 65) || (isMale === false && age >= 55)) {
const getPension = (isMale, age) => {
  if ((isMale && age >= 65) || (!isMale && age >= 55)) {
    return "да";
  }

  return "нет";
};

const showAnketa = (fullName, age, gender, pension) => {
  alert(`
  Ваше ФИО: ${fullName}
  Ваш возраст в годах: ${age}
  Ваш возраст в днях: ${age * 365}
  Через 5 лет вам будет: ${age + 5}
  Ваш пол: ${gender}
  Вы на пенсии: ${pension}
`);
};

const init = () => {
  const name = validateData("Введите имя");
  const surname = validateData("Введите фамилию");
  const patronymic = validateData("Введите отчество");
  const age = validateData("Введите возраст", "number");
  const isMale = confirm("Ваш пол - мужской?");
  const fullName = `${surname} ${name} ${patronymic}`;

  const gender = getGender(isMale);
  const pension = getPension(isMale, age);

  showAnketa(fullName, age, gender, pension);
};

init();
