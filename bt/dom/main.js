const logButton = () => {
  const nameValue = document.getElementById("ten").value;
  const sex = document.querySelector('input[name="sex"]:checked');
  const cityValue = document.getElementById("City").value;

  if (sex) {
    document.getElementById("ketQua").innerHTML =
      `Tên: ${nameValue}<br>Giới tính: ${sex.value}<br>Thành phố: ${cityValue}`;
  } else {
    document.getElementById("ketQua").innerHTML =
      `Tên: ${nameValue}<br>Chưa chọn giới tính!<br>Thành phố: ${cityValue}`;
  }

  console.log(nameValue);
};

document.getElementById("buttonHienThi").addEventListener("click", logButton);
