const name = document.getElementById("ten");
const city = document.getElementById("city");
const sex = document.querySelectorAll("input[type='radio'][name='sex']");

const display = document.getElementById("display");

console.log(city.value);

const handleSubmit = () => {
  let valSex = "";
  sex.forEach((item) => {
    if (item.checked) {
      valSex = item.value;
    }
  });

  display.innerHTML = `<p>Ho va ten: ${name.value}</p>
  <p>Thanh pho: ${city.value}</p>
  <p>Gioi tinh: ${valSex}</p>`;
};
