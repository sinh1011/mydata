const ongdev = {
  name: "Truong Sinh",
  age: 22,
  add: "Quang Nam",
};

function display(person) {
  const { name, age, add } = ongdev;
  console.log(name);
  console.log(age);
  console.log(add);
}

// display(ongdev);
const ongdev1 = {
  ...ongdev,
  add: "Da Nang",
};

console.log(ongdev);
console.log(ongdev1);

const arr = [10, 20, 30];

// 👉 Lấy:
// a = 10
// b = 20
function show([a, b]) {
  console.log(a);
  console.log(b);
}
show(arr);

const arr1 = [1, 2, 3, 4];

// 👉 Lấy:
// first = 1
// third = 3
const [a, , c] = arr1;
console.log(a, c);

const user = { name: "An" };

// 👉 Lấy:
// name = "An"
// age = 18 (default)

const user1 = {
  ...user,
  age: 18,
};
function show1({ name, age }) {
  console.log("name = " + name);
  console.log("age = " + age);
}
show1(user1);

const product = {
  id: 101,
  price: 500,
};

// ----------------------------------------------------