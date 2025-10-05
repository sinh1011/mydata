// console.log("a");

// setTimeout(() => {
//   console.log(3);
// }, 0);

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// call api

// const loadData = () => {
//   fetch("https://dummyjson.com/products?limit=10")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// };

// loadData();
const loader = document.getElementById("loader");
const box = document.getElementById("box");

const productsData = fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => data.products)
  .then((products) => {
    loader.classList.toggle("hidden");
    console.log(products);
    render(products);
  })
  .catch((err) => console.log(err));

// console.log(productsData);

const render = (arr = []) => {
  box.innerHTML = arr
    .map((item) => {
      return `
      <div class="box">
          <h2>${item.title}</h2>
          <p>Brand: ${item.brand}</p>
          <p>Price: ${item.price}$</p>
          <p>tock: ${item.stock}</p>
       </div>`;
    })
    .join("");
};
