
// Task 1 - Array with 5 color names, log the third element

const colors = ["red", "blue", "green", "yellow", "purple"];
console.log(colors[2]); // green (index 2 = third element)



//  Task 2 - Object with book properties

const book = {
    title:"The alchemist",
    author:"Paulo coelho",
    pages:208,
    publishedYear:1988
};

console.log(book);


// Task 3 - Add isRead: true to book object immutably

const updatedBook = { ...book, isRead: true };
console.log(updatedBook);
// Original book is not changed
console.log(book.isRead); // undefined



// Task 4 - Array of 3 student objects

const students = [
 { name: "Swikar", grade: "A" },
 { name: "Abijal", grade: "B" },
 { name: "Pujan",  grade: "A+" }
];

console.log(students);


//  Task 5 - Nested object: company with employees array
const company = {
    name: "TechNepal",
    location: "Kathmandu",
    employees: ["Smaran", "Swikar", "Abijal"]
};
console.log(company);

//  Task 6 - Increase each value in numbers array by 5 (immutably)
const numbers = [10, 20, 30];
const increased = numbers.map((n) => n + 5);
console.log(increased); // [15, 25, 35]
console.log(numbers);   // [10, 20, 30] (unchanged)

// Task 7 - Add a new property color to car object immutably
const car = {
brand: "Toyota",
model: "Corolla"
};
const coloredCar = { ...car, color: "white" };
console.log(coloredCar);

//Task 8 - Add new item at beginning of shoppingList immutably
const shoppingList = ["milk", "eggs", "bread"];
const newShoppingList = ["butter", ...shoppingList];
console.log(newShoppingList); // ["butter", "milk", "eggs", "bread"]


// Task 9 - Object with nested address object
const profile = {
name: "Smaran",
address: {
city: "Pokhara",
country: "Nepal"
    }};

console.log(profile.address.city);    // Pokhara
console.log(profile.address.country); // Nepal

// Task 10 - From array of products, keep only name and price
const products = [
    { id: 1, name: "Pen", price: 10, stock: 100 },
    { id: 2, name: "Notebook", price: 50, stock: 30 },
    { id: 3, name: "Ruler",  price: 15, stock: 60 }
];
const simplified = products.map((p) => ({ name: p.name, price: p.price }));
console.log(simplified);