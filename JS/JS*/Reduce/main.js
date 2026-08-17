const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum);
const acumulator = numbers.reduce((a, b) => a * b, 1);
console.log(acumulator);

const arr = [10, 20, 30, 40];
// 👉 Kết quả: 4
const count = arr.reduce((a, b) => a + 1, 0);
console.log(count);

const numbers1 = [5, 10, 3, 8];
// 👉 Kết quả: 10

const max = numbers1.reduce((a, b) => (a > b ? a : b));
console.log(max);

const numbers2 = [1, 2, 3, 4, 5, 6];
// 👉 Kết quả: 12

const evenSum = numbers2.reduce((a, b) => a + (b % 2 === 0 ? b : 0), 0);
console.log(evenSum);

const words = ["Xin", "chào", "JS"];
// 👉 Kết quả: "Xin chào JS"
const arrs = words.reduce((a, b) => a + " " + b);
console.log(arrs);

const cart = [
  { name: "Áo", price: 100 },
  { name: "Quần", price: 200 },
  { name: "Giày", price: 300 },
];
// 👉 Kết quả: 600
const totalPrice = cart.reduce((a, b) => a + b.price, 0);
console.log(totalPrice);

const items = ["a", "b", "a", "c", "b", "a"];
// 👉 Kết quả:
// { a: 3, b: 2, c: 1 }
// const countItems =  items.reduce((a,b)=>)

const nums = [1, 2, 3, 4];
// Kết quả: { even: 2, odd: 2 }
const evenOddCount = nums.reduce(
  (acc, items) => {
    items % 2 === 0 ? (acc.even += 1) : (acc.odd += 1);
    return acc;
  },
  { even: 0, odd: 0 }
);
console.log(evenOddCount);

const users = [
  { id: 1, name: "An" },
  { id: 2, name: "Bình" },
];

const userMap = users.reduce((acc, items) => acc + items, {});
console.log(userMap);

