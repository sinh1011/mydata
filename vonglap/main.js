// In dấu sao
for (let i = 1; i <= 6; i++) {
  console.log("*".repeat(i));
}

// Ghép chuỗi có lặp (nếu dùng)
let solap = prompt("Nhập vào số cần lặp:");
let ketqualap = Array(11).fill(solap).join("-");
console.log(ketqualap);

// Tính giai thừa
let n = parseInt(prompt("Nhập số cần tính giai thừa:"));
let giaiThua = 1;
for (let i = 2; i <= n; i++) {
  giaiThua *= i;
}
console.log(giaiThua);
