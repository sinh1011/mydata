const text = document.getElementById("text");
const btnChange = document.getElementById("btnChange");
const text2 = document.getElementById("text2");
const menu = document.getElementById("menu");
const btn2 = document.getElementById("btn2");
const btnDarkMode = document.getElementById("btnDarkMode");
const btnMenu = document.getElementById("btnMenu");

const title = document.getElementById("changeText");
const btnDisplay = document.getElementById("btnDisplay");

const count = document.getElementById("count");
const btnClick = document.getElementById("btnClick");

const fullName = document.getElementById("fullName");
const btnShowName = document.getElementById("btnShowName");
const showName = document.getElementById("showName");














btnChange.addEventListener("click", function () {
  text.classList.toggle("red");
});

btn2.addEventListener("click", function () {
  text2.classList.toggle("hidden");
});

btnDarkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

btnMenu.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

btnDisplay.addEventListener("click", function () {
  title.innerText = "Xin chào Sinh đẹp trai";
});

let counter = 0;

btnClick.addEventListener("click", function () {
  count.innerHTML = `
  Bạn đã click ${++counter} lần`;
});


btnShowName.addEventListener("click", function () {
showName.innerHTML = `<p>Tên của bạn là: ${(fullName.value)}</p>`
console.log(fullName.value);
});

