// function sum(a, b) {
//   return a + b;
// }

// function isEven(n) {
//   return n % 2 === 0;
// }

const sum = (a, b) => a + b;

const isEven = (n) => n % 2 === 0;

// function square(x) {
//   return x * x;
// }

const square = (x) => x * x;

const users = [
  { id: 1, name: "An" },
  { id: 2, name: "Bình" },
];

const printName = users.map((user) => user.name);

console.log(printName);

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log(evenNumbers);

const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
];

let sumPrice = 0;

const arrPrice = products.map((product) => product.price);
arrPrice.forEach((n) => sumPrice += n);
console.log(arrPrice);
console.log(sumPrice);


const handleClick = () => {
  console.log("Button clicked");
};
