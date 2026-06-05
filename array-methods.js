// Task 1 -use of Map FUnction
let numbers=[1,2,3,4,5]
let newNumbers= numbers.map(n=>n*2)
console.log("numbers: ", numbers)
console.log("newNumbers: ", newNumbers)

// Task  2- use of filter Function
let number=[1,2,3,4,5,6]
let evennumber=number.filter(n=>n%2==0)
console.log("number: ", number)
console.log("evennumber: ", evennumber)

// Task  3- Use of reduce Function
let num=[10,20,30,40]
let sum=num.reduce((acc,curr)=>acc+curr,0)
console.log("num: ", num)
console.log("sum: ", sum)

// Task  4- Use of find Function
let users=[
    {id:1, name:"Abijal", age:19 },
    {id:2, name:"Smaran", age:23},
    {id:3, name:"Swikar", age:16},
]

let adult = users.find(user=> user.age>18);
console.log(adult)

//  Task  5- Use of forEach Function
let fruits=["Mango", "Apple", "Grapes"]
fruits.forEach((fruit,index) => {
console.log(`${index}:${fruit}`)
})

// Task  6- use of map function 
let user = [
    { name: "Abijal", age: 16 },
    { name: "Pujan",  age: 20 },
    { name: "Smaran", age: 22 }
]    
let names = user.map(user => user.name)
console.log(names)

// Task  7- Use of Filter
let products = [
    { name: "Pen",    price: 10 },
    { name: "Laptop", price: 999 },
    { name: "Bag",    price: 80 }
];

let affordable = products.filter(product => product.price < 10000);
console.log(affordable);

// Task 8- use of reduce 
let nums = [3, 17, 5, 42, 8];

const max = nums.reduce((highest, current) => {
  return current > highest ? current : highest;
}, numbers[0]);

console.log(max);

// Task  9- use of map and filter together
let usr = [
    { name: "swikar", age: 22 },
    { name: "abijal", age: 15 },
    { name: "pujan",  age: 19 }
];

let adultNames = usr
  .filter(usr => usr.age >= 18)
  .map(usr => usr.name.toUpperCase());

console.log(adultNames);

// Task 10- Use OF foreach
let items = ["Home", "About", "Services", "Contact"];

let html = "<ul>\n";
items.forEach(item => {
  html += `  <li>${item}</li>\n`;
});
html += "</ul>";

console.log(html);