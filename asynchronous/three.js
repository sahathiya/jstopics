//promise
console.log("first");


let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data resolved"), 1000);
});

promise.then((data) => console.log(data)); // Output after 1 second: "Data resolved"


console.log("second");
