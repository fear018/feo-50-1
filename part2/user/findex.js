const drawUsers = (data, userList) => {
  userList.innerHTML = "";

  data.forEach((item, index) => {
    userList.innerHTML += `
        <li class='user-card' id=${item.id} >
          <p>#:${index + 1}</p>
          <p>Name:${item.name}</p>
          <p>Surname:${item.surname}</p>
          <p>Age:${item.age}</p>
          <div><button class="delete-user">DELETE</button></div>
        </li>`;
  });
};

const submitHandler = () => {
  const name = document.querySelector("#name");
  const surname = document.querySelector("#surname");
  const age = document.querySelector("#age");

  return {
    id: Date.now(),
    name: name.value,
    surname: surname.value,
    age: age.value,
  };
};

const deleteHandler = (event, data) => {
  const li = event.target.closest(".user-card");
  const userId = +li.id;
  const newData = data.filter((item) => item.id !== userId);
  return newData;
};

const init = () => {
  let data = [];
  const submitBtn = document.querySelector("#submitBtn");
  const userList = document.querySelector("#user-list");
  const form = document.querySelector("#form");

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const user = submitHandler();
    data.push(user);
    drawUsers(data, userList);
    form.reset();
  });

  userList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-user")) {
      const newData = deleteHandler(event, data);
      data = newData;
      drawUsers(data, userList);
    }
  });
};

init();
// find index of user
// const index = data.findIndex((item) => item.id === +userId);
// data.splice(index, 1);
