/** @type {HTMLCollectionOf<HTMLElement>} */ /** @type {HTMLCollectionOf<HTMLElement>} */
// console.log(document.getElementsByClassName("demo"));
const listDemo = document.getElementsByClassName("demo");

// console.log(document.getElementsByTagName("p"));
const handeLog = () => {
  console.log("sinh dep trai");
  for (let i = 0; i < listDemo.length; i++) {
    if (i % 2 === 0) {
      listDemo[i].style.color = "red";
    } else {
      listDemo[i].style.color = "green";
    }
  }
  for (let i = 0; i < listDemo.length; i++) {
    if (i % 2 === 0) {
      listDemo[i].style.color = "red";
    } else {
      listDemo[i].style.color = "green";
    }
  }
};
