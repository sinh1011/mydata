change1 = document.getElementById("text1");
doanVan = document.getElementById("colorChange");
display = document.getElementById("display")
countInput = document.getElementById("count")

change1.innerHTML = `xin chao Sinh`;
const btnColor = () => {
  doanVan.style.color = "red";
  doanVan.style.fontSize = "24px";
};

countInput.addEventListener("input",()=>{
    display.innerHTML=`So ki tu da nhap: ${countInput.value.length}`
})