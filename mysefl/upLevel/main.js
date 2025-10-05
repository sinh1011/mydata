// #6 Thay đổi nội dung
const title6 = document.getElementById("title6");
document.getElementById("btn6").addEventListener("click", () => {
  title6.textContent = "Chào Sinh đẹp trai 😎";
});

// #7 Đếm số lần click
const countEl7 = document.getElementById("count7");
let count7 = 0;
document.getElementById("btn7").addEventListener("click", () => {
  count7++;
  countEl7.textContent = `Số lần: ${count7}`;
});

// #8 Hiển thị giá trị input
const input8 = document.getElementById("name8");
const result8 = document.getElementById("result8");
document.getElementById("btn8").addEventListener("click", () => {
  const name = input8.value.trim();
  result8.textContent = name ? `Xin chào, ${name}!` : "Bạn chưa nhập tên.";
});

// #9 Thay đổi ảnh
const img9 = document.getElementById("img9");
const img9Src1 =
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop";
const img9Src2 =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=600&auto=format&fit=crop";
let isImg1 = true;

document.getElementById("btn9").addEventListener("click", () => {
  isImg1 = !isImg1;
  img9.src = isImg1 ? img9Src1 : img9Src2;
  img9.alt = isImg1 ? "Ảnh 1" : "Ảnh 2";
});

// #10 Bật/Tắt đèn
const bulb = document.getElementById("bulb10");
const bulbOff =
  "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=600&auto=format&fit=crop";
const bulbOn =
  "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=600&auto=format&fit=crop";
let isOn = false;

document.getElementById("btn10").addEventListener("click", () => {
  isOn = !isOn;
  bulb.src = isOn ? bulbOn : bulbOff;
  bulb.alt = isOn ? "Đèn ON" : "Đèn OFF";
});
