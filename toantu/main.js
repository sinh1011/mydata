// const text = "bien";
// const a = null;
// const b = 1;
// // console.log(a ?? b);

// const date = new Date()
// console.log(date.getMinutes());

//------------------------------------

// let a = prompt("nhap so nguyen duong chan");
// if(a % 2 ===0){
//     console.log("ban da nhap dung");

// }else{
//     console.log("ban da nhap sai");

// }

// a % 2 === 0 ? console.log("Ban da nhap dung") : console.log("Ban da nhap sai");

//==================
let canha = prompt("nhap canh a cua tam giac");
let canhb = prompt("nhap canh b cua tam giac");
let canhc = prompt("nhap canh c cua tam giac");

if (canha === canhb && canhb === canhc) {
  console.log("Day la tam giac deu");
} else if (canha === canhb || canhb === canhc || canha === canhc) {
  console.log("Day la tam giac can");
} else if (
  canha ** 2 + canhb ** 2 == canhc ** 2 ||
  canhc ** 2 + canhb ** 2 == canha ** 2 ||
  canhc ** 2 + canha ** 2 == canhb ** 2
) {
  console.log("Day la tam giac vuong");
}
