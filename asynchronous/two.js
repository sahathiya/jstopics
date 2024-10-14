//Callbacks: A function passed as an argument to another function that gets executed once the asynchronous operation completes.

 console.log("first");
 
function getData(callback) {
    setTimeout(() => {
        callback("Data retrieved");
    }, 1000);
}

getData((data) => {
    console.log(data); // Output after 1 second: "Data retrieved"
});
 
console.log("second");
