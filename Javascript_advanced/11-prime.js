
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

let startTime = performance.now();
let callCount=0;

function  callCountPrimeNumbers(){
    countPrimeNumbers(2,100);

    callCount +=1;

    if(callCount<100){
        setTimeout(callCountPrimeNumbers,0);
    }
    else{
       let endTime = performance.now();
       let timeTaken = endTime - startTime;
        console.log(`Execution time of calculating prime numbers 100 times was ${timeTaken.toFixed(17)} milliseconds.`);
    }
}


setTimeout(callCountPrimeNumbers, 0);
