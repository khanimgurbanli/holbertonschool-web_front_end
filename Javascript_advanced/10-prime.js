function countPrimeNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(String(`${i} is prime`));
        }
    }
}
function isPrime(num) {
    for (let i= 2; i <= num/2; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}

countPrimeNumbers(2, 100);
let startTime = performance.now();

for (let i = 0; i < 100; i++) {
    countPrimeNumbers(2, 100);
}

setTimeout(() => {
    let endTime = performance.now();
    let timeTaken = endTime - startTime;
    console.log(`Execution time of calculating prime numbers 100 times was NUMER_OF_MILISECONDS milliseconds.`);
}, 0);

