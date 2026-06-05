//Core JavaScript Hands-On Tasks
// Task 1 - Variables and Template Literals

let firstName = "Swikar";
let lastName = "Sharma";
let greeting = `Hello, my name is ${firstName} ${lastName}!`;

console.log(greeting);

// Task 2 - let and const Scope
{
let number = 10;
console.log(number);
}
console.log(number); // Error: number is not defined
{
const name = "Dexter";
console.log(name);
}
console.log(name); // Error: name is not defined

// Task 3 - Arrow Function Simple
const greet = (name) => `Hello, ${name}!`;

// Test with a name
console.log(greet("Abijal"));

// Task 4 - Arrow Function with Multiple Parameters
const multiply = (a, b) => a * b;
console.log(multiply(5, 6));

// Task 5 - Object Destructuring

const person = {
name: "Pujan",
age: 21,
country: "Nepal"
};

const { name, country } = person;

console.log(name);    // Pujan
console.log(country); // Nepal

// Task 6 - Array Destructuring

const numbers = [10, 20, 30, 40];
const [first, second] = numbers;

console.log(first);  // 10
console.log(second); // 20

// Task 7 - Default Parameters

// name defaults to "Guest" if no argument is passed
function sayHello(name = "Guest") {
console.log(`Hello, ${name}!`);
}

sayHello("Smaran"); // Hello, Smaran!
sayHello();         // Hello, Guest!

// Task 8 - Rest Operator (Sum of Numbers)
function sumAll(...numbers) {
let total = 0;
for (let num of numbers) {
total += num;
}
return total;
}
console.log(sumAll(1, 2, 3, 4)); // 10

// Task 9 - Spread Operator with Arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5]

// Task 10 - Merge and Destructure Objects

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// Merge both objects using spread
const merged = { ...obj1, ...obj2 };
// Destructure a and d from the merged object
const { a, d } = merged;
console.log(a); // 1
console.log(d); // 4