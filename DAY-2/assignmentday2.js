// B Task 1 - "this" inside an object method
const user = {
name: "Swikar",
login() {
console.log(this.name);
}
};
user.login();

//B Task 2 - "this" losing context and fixing with .bind(this)
const button = {
name: "Click",
click() {
console.log(this.name);
}
};
const newClick = button.click.bind(button);
newClick();


//  Task 5 - Class representing a Product
class Product {
constructor(name, price) {
this.name = name;
this.price = price;
}
getInfo() {
return `Product: ${this.name}, Price: $${this.price}`;
}}
const laptop = new Product("Laptop", 999);
console.log(laptop.getInfo());

//Task 6 - Inheritance: FoodProduct extends Product
class FoodProduct extends Product {
 constructor(name, price, expiry) {
super(name, price);
this.expiry = expiry;
}}


// Task 6 - Inheritance: FoodProduct extends Product
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

getInfo() {
    return `Product: ${this.name}, Price: $${this.price}`;
    }
}

// FoodProduct inherits from Product and adds an expiry date
class FoodProduct extends Product {
    constructor(name, price, expiryDate) {
    super(name, price); // call parent constructor
        this.expiryDate = expiryDate;
    }
    getInfo() {
    // Extend the parent info with expiry date
    return `${super.getInfo()}, Expires: ${this.expiryDate}`;
    }}
const milk = new FoodProduct("Milk", 2.5, "2025-06-20");
console.log(milk.getInfo());


// Task 7 - Promise for fetching app settings

function getAppSettings() {
    return new Promise((resolve) => {
setTimeout(() => {
resolve({ theme: "dark", language: "English" });
        }, 2000);
    });
}

getAppSettings().then((settings) => {
    console.log("App Settings:", settings);

});

//Task 8 - async/await fetching mock user data
function fetchUsers() {
return new Promise((resolve) => {
        setTimeout(() => {
resolve([
        { id: 1, name: "Abijal" },
        { id: 2, name: "Pujan" },
        { id: 3, name: "Smaran" }
            ]);
        }, 1000);
    });
}
async function getUsers() {
    const users = await fetchUsers();
    console.log("Users:", users);
}

getUsers();

//Task 9 - try/catch for handling API errors

function fetchUsers() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    const success = Math.random() > 0.5;
        if (success) {
        resolve([{ id: 1, name: "Swikar" }, { id: 2, name: "Abijal" }]);
        } else {
        reject(new Error("Failed to fetch users from server."));
}
}, 1000);
    });
}

async function getUsers() {
    try {
        const users = await fetchUsers();
        console.log("Users loaded:", users);
    } catch (error) {

        console.log("Something went wrong:", error.message);
    }
}

getUsers();

// Task 10 - Mini end-to-end app combining everything

// Config (simulating imported config)
const API_BASE_URL = "https://api.example.com/v1";

// Utility function (simulating imported utils)
function formatCurrency(amount) {
    return "$" + amount.toFixed(2);
}

// Product class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return `${this.name} - ${formatCurrency(this.price)}`;
    }
}

function fetchProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.3; // 70% chance to succeed
            if (success) {
                resolve([
                    new Product("Keyboard", 49.99),
                    new Product("Mouse", 29.5),
                    new Product("Monitor", 299.0)
                ]);
            } else {
                reject(new Error("Unable to load products."));
            }
        }, 1000);
    });
}

// Main app function
async function runApp() {
    console.log("Connecting to:", API_BASE_URL);

    try {
        const products = await fetchProducts();
        console.log("Products loaded:");
        products.forEach((p) => console.log(" -", p.getInfo()));
    } catch (error) {
        console.log("Error:", error.message);
    }
}

runApp();