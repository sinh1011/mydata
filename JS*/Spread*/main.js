const nums = [1, 2, 3, 4];
// tạo mảng mới bình phương: [1,4,9,16]
const newNums = nums.map((n) => n * n);
console.log(newNums);

const nums1 = [5, 10, 15, 20];
// lọc số >= 15 => [15,20]

const newNums1 = nums1.filter((n) => n >= 15);
console.log(newNums1);

const nums2 = [2, 4, 6];
// tính tổng => 12
const sums = nums2.reduce((acc, n) => {
  acc += n;
  return acc;
}, 0);

console.log(sums);

const users = [
  { id: 1, name: "An", active: false },
  { id: 2, name: "Binh", active: false },
  { id: 3, name: "Chi", active: false },
];

// Yêu cầu: tạo mảng mới, user có id=2 thành active=true (không mutate mảng gốc)

const newUser = users.map((n) => {
  return n.id === 2 ? { ...n, active: !n.active } : n;
});
console.log(newUser);
