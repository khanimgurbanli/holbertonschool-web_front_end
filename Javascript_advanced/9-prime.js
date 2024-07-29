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

console.time('Execution time of printing countPrimeNumbers');
countPrimeNumbers(2, 100);
console.timeEnd('Execution time of printing countPrimeNumbers');
