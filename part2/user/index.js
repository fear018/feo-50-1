let data = [];

const submitBtn = document.querySelector("#submitBtn");
const userList = document.querySelector("#user-list");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name");
  const surname = document.querySelector("#surname");
  const age = document.querySelector("#age");

  const user = {
    id: Date.now(),
    name: name.value,
    surname: surname.value,
    age: age.value,
  };

  data.push(user);

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
});

userList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-user")) {
    const li = event.target.closest(".user-card");
    const userId = li.id;

    data = data.filter((item) => item.id !== +userId);

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
  }
});
// find index of user
// const index = data.findIndex((item) => item.id === +userId);
// data.splice(index, 1);
