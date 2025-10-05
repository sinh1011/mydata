const myObject ={
    name: "sinh",
    age: "22",
    weight:"",
    height: "",
    phonenumber: 0,
}
let newObject={}
for (const key in myObject) {
    
   if(myObject[key]){
    newObject[key]= myObject[key]
   }
}
console.log(newObject);
