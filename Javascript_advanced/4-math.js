function divideBy(firstNumber) {
    return function (secondNumber) {
        return secondNumber / firstNumber;
    }
}


function addBy(firstName) {
    return function (secondNumber) {
        return firstName + secondNumber;
    }
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

// console.log(addBy100(20));
console.log(addBy100(101));
// console.log(divideBy10(20));
console.log(divideBy10(200));
console.log(divideBy100(200));
// console.log(addBy1000(20));
console.log(addBy1000(234));

