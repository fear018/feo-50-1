const sortData = (event, data, sortType = 'salary') => {
  if(event.target.classList.contains('up')) {
    sortType === 'salary'
      ? data.sort((a, b) => b.salary - a.salary)
      : data.sort((a, b) => new Date(b.hiringDate) - new Date(a.hiringDate));

    event.target.classList.toggle('up');
    event.target.innerHTML = '&#8659';
  } else {
    sortType === 'salary'
      ? data.sort((a, b) => a.salary - b.salary)
      : data.sort((a, b) => new Date(a.hiringDate) - new Date(b.hiringDate));

    event.target.classList.toggle('up');
    event.target.innerHTML = '&#8657';
  }

  drawTable(data);
};

const getModalInputs = () => {
  const name = document.querySelector("#name-edit");
  const surname = document.querySelector("#surname-edit");
  const salary = document.querySelector("#salary-edit");
  const hiringDate = document.querySelector("#hiring-date-edit");

  return { name, surname, salary, hiringDate };
};

const drawTable = (data) => {
  const tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";

  data.forEach(({id, name, surname, salary, hiringDate}) => { // item
    tbody.innerHTML += `
      <tr>
        <th><input type="checkbox" id=${id}></th>
        <th>${name}</th>
        <th>${surname}</th>
        <th>${salary}</th>
        <th>${hiringDate}</th>
      </tr>
    `;
  });
};

const addEmployeeHandler = (data) => {
  const name = document.querySelector("#name");
  const surname = document.querySelector("#surname");
  const salary = document.querySelector("#salary");
  const hiringDate = document.querySelector("#hiring-date");
  
  data.push({
    id: Date.now(),
    name: name.value,
    surname: surname.value,
    salary: salary.value,
    hiringDate: hiringDate.value,
  });

  drawTable(data);
};

const showEditingModalHandler = (data, userId, checkedInputs, modalWrapper) => {
  const { name, surname, salary, hiringDate } = getModalInputs();
  userId = +checkedInputs[0].id;
  const user = data.find(({id}) => id === +checkedInputs[0].id);

  name.value = user.name;
  surname.value = user.surname;
  salary.value = user.salary;
  hiringDate.value = user.hiringDate;

  modalWrapper.classList.toggle("toggleModal");
};

const saveEditedEmployeeHandler = (data, userId, modalWrapper) => {
  const { name, surname, salary, hiringDate } = getModalInputs();
    const userIndex = data.findIndex(({id}) => id === userId);

    data.splice(userIndex, 1, {
      id: userId,
      name: name.value,
      surname: surname.value,
      salary: salary.value,
      hiringDate: hiringDate.value,
    });

    modalWrapper.classList.toggle("toggleModal");
    drawTable(data);
    localStorage.setItem("data", JSON.stringify(data));
};

const deleteAllEmployeesHandler = (data) => {
  data = []; // data.length = 0;
  drawTable(data);
  localStorage.setItem("data", JSON.stringify(data));
};

const deleteCheckedEmployeesHandler = (data) => {
  const checkedInputs = [...document.querySelectorAll("input[type='checkbox']:checked")];
  const checkedInputsIds = checkedInputs.map((item) => +item.id);

  data = data.filter(({id}) => !checkedInputsIds.includes(id));

  drawTable(data);
  localStorage.setItem("data", JSON.stringify(data));
};

const init = () => {
  const dataFromStorage = localStorage.getItem("data");
  const parsedData = JSON.parse(dataFromStorage);
  let data = parsedData?.length ? parsedData : [];

  let userId = null;

  const modalWrapper = document.querySelector(".modalWrapper");
  const closeBtn = document.querySelector("#closeBtn");
  
  const submitBtn = document.querySelector("#submitBtn");
  const deleteAllBtn = document.querySelector("#deleteAllBtn");
  const deleteBtn = document.querySelector("#deleteBtn");
  const editBtn = document.querySelector("#editBtn");
  const saveBtn = document.querySelector("#saveBtn");
  const sortSalary = document.querySelector("#sort-salary");
  const sortDate = document.querySelector("#sort-date");

  drawTable(data);

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    addEmployeeHandler(data);
    localStorage.setItem("data", JSON.stringify(data));
  });

  editBtn.addEventListener("click", () => {
    const checkedInputs = [...document.querySelectorAll("input[type='checkbox']:checked")];

    if(checkedInputs.length === 1) {
      showEditingModalHandler(data, userId, checkedInputs, modalWrapper)
    } else {
      alert("You can edit only one item");
    }
  });

  saveBtn.addEventListener("click", (event) => {
    event.preventDefault();

    saveEditedEmployeeHandler(data, userId, modalWrapper)
  });

  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modalWrapper.classList.toggle("toggleModal");
  });

  deleteBtn.addEventListener("click", () => {
    deleteCheckedEmployeesHandler(data)
  });

  deleteAllBtn.addEventListener("click", () => {
    deleteAllEmployeesHandler(data)
  });

  sortSalary.addEventListener("click", (event) => {
    sortData(event, data)
  });

  sortDate.addEventListener("click", (event) => {
    sortData(event, data, 'date')
  });

  setTimeout(() => {
    const banner = document.querySelector(".banner");
    banner.style.display = "none";
  }, 5000);
}

init();