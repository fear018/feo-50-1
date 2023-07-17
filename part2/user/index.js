const submitBtn = document.querySelector("#submitBtn");
const userList = document.querySelector("#user-list");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name");
  const surname = document.querySelector("#surname");
  const age = document.querySelector("#age");

  userList.innerHTML += `<li class='user-card'>
    <p>Name:${name.value}</p>
    <p>Surname:${surname.value}</p>
    <p>Age:${age.value}</p>
    <div><button class="delete-user">DELETE</button></div>
  </li>`;
});

userList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-user")) {
    const li = event.target.closest(".user-card");
    li.remove();
  }
});
