const para = document.getElementById("para");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", () => {
  para.classList.toggle("hidden");
});
