function createCounter() {
    let count = 0; // Private variable

    // Arrow function that forms a closure
    return () => {
        count++;
        return count;
    };
}

const counter = createCounter(); // Create a counter function

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
