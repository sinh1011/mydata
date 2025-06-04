// const user = {
//   ten: "sinh",
//   tuoi: 32,
// };

const products = [
  {
    name: "iphone 15 pro max",
    oldprice: 21990,
    saleprice: 20990,
    amount: 200,
    hotproduct: true,
    img: "",
  },
  {
    name: "iphone 16 pro max",
    oldprice: 29990,
    saleprice: 27990,
    amount: 512,
    hotproduct: true,
    img: "",
  },
   {
    name: "iphone 3gs",
    oldprice: 29990,
    saleprice: 27990,
    amount: 0,
    hotproduct: true,
    img: "",
  },
];

const display = document.getElementById("display");
display.innerHTML = products
  .map((item) => {
    return `<div>
    <h3>${item.name}</h3>
    <p>${item.oldprice}</p>
    <p>${item.saleprice}</p>
    <p>${item.amount===0 ? "het hang" : "con hang"}</p>
    </div>`;
  })
  .join("");
