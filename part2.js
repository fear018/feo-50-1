// Window
// DOM, BOM, JS

// const h1 = [...document.getElementsByTagName("h1")];
// const h12 = document.getElementsByTagName("h1")[0];
// getElementsByTagName;
// getElementById;
// const h1 = document.getElementById("header");
// const h1name = document.getElementsByName("header");
// ;
// const h1class = document.getElementsByClassName("header");
// console.log(h1class);

// const headersAll = document.querySelectorAll("h1");
// // const headers = document.querySelectorAll("#h1");
// // const headers = document.querySelectorAll(".h1");
// // const headers = document.querySelectorAll("*");
// const headers = document.querySelector("h1");

// console.log(headersAll);
// console.log(headers);
// const userList = document.querySelector("#user-list");
// const users = [...userList.querySelectorAll("span")];
// console.log(users);

// querySelector;
// querySelectorAll;

const userList = document.querySelector("#user-list");
const userSpan = userList.querySelector("span");
const closestElem = userSpan.closest("li");
// console.log(closestElem);
// console.log(userList);
// elem.closest(css)
// elem.contains(elem)
const user = document.querySelector("#user-list");
const contains = user.contains(userSpan);
console.log(contains);

// chatDiv.innerHTML += "<div>Привет<img src='smile.gif'/> !</div>";
// chatDiv.innerHTML += "Как дела?";

// get id
// style
// cssText

// className

// addEventListener

// classList
