// Task 4 - utils.js
// Reusable utility functions

// Format a number as currency (e.g. 1500 => "$1,500.00")
export function formatCurrency(amount) {
    return "$" + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Generate a simple random ID string
export function generateRandomId() {
    return Math.random().toString(36).substring(2, 10);
}

// Get today's date in YYYY-MM-DD format
export function getTodayDate() {
    const today = new Date();
    return today.toISOString().split("T")[0];
}
