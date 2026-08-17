// const user = {
//   name: "An",
//   age: 20,
//   city: "Hà Nội",
// };

// const { use } = require("react");

// // const { name, age } = user;
// // console.log(name);
// // console.log(age);

// const product = {
//   id: 101,
//   title: "Laptop",
//   price: 1500,
// };

// const { title: productName, price } = product;
// console.log(productName);
// console.log(price);

// const user1 = {
//   name: "An",
// };
// const { name, age = 20 } = user1;

// console.log(name);
// console.log(age);

// const user = {
//   name: "An",
//   address: {
//     city: "Hà Nội",
//     zip: 10000,
//   },
// };

// const {
//   address: { city, zip },
// } = user;

// console.log(city);
// console.log(zip);

// const user = {
//   name: "An",
//   age: 20,
// };

// function printUser({ name, age }) {
//   console.log(name);
//   console.log(age);
// }

// printUser(user);

// const user = {
//   id: 1,
//   name: "An",
//   age: 20,
//   city: "Hà Nội"
// };

// const{id,...info}=user
// console.log(id);
// console.log(info);

const props = {
  title: "Hello",
  color: "red",
  size: "large"
};
const {title, color = "blue"} =props
console.log(title);
console.log(color);

