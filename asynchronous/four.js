
//async/await

async function fetchData() {
    try {
        let data = await new Promise((resolve) => {
            setTimeout(() => resolve("Async data"), 1000);
        });
        console.log(data); // Output after 1 second: "Async data"
    } catch (error) {
        console.log(error);
        
    }
    
}

fetchData();
