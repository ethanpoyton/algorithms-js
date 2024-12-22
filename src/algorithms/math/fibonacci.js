// Function takes in an integer n, generates an array of the first n Fibonacci numbers, and calculates their sum
function fibonacciSum(n) {
    if (n <= 0) {
        return { sum: 0, sequence: [] };
    }

    const fibonacciSequence = [0];

    if (n === 1) {
        return { sum: 0, sequence: fibonacciSequence };
    }

    fibonacciSequence.push(1);

    for (let i = 2; i < n; i++) {
        const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
    }

    const sum = fibonacciSequence.reduce((acc, num) => acc + num, 0);

    return { sum, sequence: fibonacciSequence };
}

/*
For testing purposes, change the value of integer n below
const n = 7;
*/
const result = fibonacciSum(n);

console.log(`Sum of the first ${n} Fibonacci numbers:`, result.sum);
console.log(`Fibonacci sequence:`, result.sequence);
