const arr = ["sinh", "truong", "vo"];
const lengthArr = arr.map((item) => {
  return item;
});
// console.log(lengthArr);

const arrNumber = [1, 2, 3, 4, 5, 6];
const arrFilter = arrNumber.filter(function (item) {
  return item % 2 !== 0;
});
// console.log(arrFilter);

const id = 2;
const users = [
  { id: 1, name: "User1" },
  { id: 2, name: "User2" },
  { id: 3, name: "User3" },
];

const newUser = users.filter(function (item) {
  return item.id != 2;
});
console.log(newUser);

const cars = [
  { brand: "Toyota", year: 2015 },
  { brand: "Ford", year: 2020 },
  { brand: "Chevrolet", year: 2018 },
  { brand: "Honda", year: 2010 },
];

const newCars= cars.filter(function(item){
    return item.year<=2018
})
console.log(newCars);
