const text = document.getElementById("text");
const btnChange = document.getElementById("btnChange");
const text2 = document.getElementById("text2");
const menu = document.getElementById("menu");
const btn2 = document.getElementById("btn2");
const btnDarkMode = document.getElementById("btnDarkMode");
const btnMenu = document.getElementById("btnMenu");

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
