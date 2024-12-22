// Function takes in an integer n and tells the user whether or not it is a prime number
function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

/*
For testing purposes, change the value of integer inputNumber
const inputNumber = 23;
*/

if (isPrime(inputNumber)) {
    console.log(`${inputNumber} is a prime number.`);
} else {
    console.log(`${inputNumber} is not a prime number.`);
}
