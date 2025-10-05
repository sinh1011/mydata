const listProducts = document.getElementById("listProducts");

const products = fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => data)
  .then((arr) => {
    renderProducts(arr.products)
    console.log(arr.products)
  });

const renderProducts = (arr = []) => {
  listProducts.innerHTML = arr.map((item) => {
    return `
        <div class="box">
        <img src ="${item.thumbnail}"></img>
          <h2>${item.title}</h2>
          <p>Brand: ${item.brand}</p>
          <p>Price: ${item.price}$</p>
          <p>tock: ${item.stock}</p>
          <button>Detail</button>
       </div>
        `;
  }).join("");
};
