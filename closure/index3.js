function makeGreeting(greeting) {
    return (name) => {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = makeGreeting('Hello');
const sayHi = makeGreeting('Hi');

console.log(sayHello('Alice')); // Output: Hello, Alice!
console.log(sayHi('Bob'));       // Output: Hi, Bob!


//enabling functions to access and retain variables from their outer scope even after the outer function has returned.
// This behavior is possible due to lexical scope and the way JavaScript manages the lexical environment during function execution.