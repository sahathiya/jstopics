function factorial(n) {
    // Base case: when n is 1, return 1
    if (n === 1) {
      return 1;
    }
    // Recursive case: n * factorial of (n - 1)
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // Output: 120
  