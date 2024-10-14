
function OuterFunction() {
    let outer = 2; // Variable defined in the outer function

    return function innerFunc() { // Inner function that forms a closure
        console.log(outer); // Logs the value of the outer variable
    };
}

// Call OuterFunction and store the returned innerFunc in variable a
let a = OuterFunction(); // This will log 2
console.log(a);

// Call the inner function a, which will log the value of outer
a(); // Output: 2
