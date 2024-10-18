function fibonacci(number) {
    let a = 0; // First Fibonacci number
    let b = 1; // Second Fibonacci number
    const series = []; // Array to hold the Fibonacci series

    for (let i = 0; i < number; i++) {
        series.push(a); // Add the current Fibonacci number (a) to the series
        const c = a + b; // Calculate the next Fibonacci number
        a = b; // Move to the next number
        b = c; // Update b to the newly calculated Fibonacci number
    }
    return series; // Return the complete series
}

const number = 10; // Specify how many terms you want
console.log(fibonacci(number)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]