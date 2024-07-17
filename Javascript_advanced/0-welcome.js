function welcome(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;

    function displayFullName() {
        alert(`Welcome ${fullName}!`);
    }

    return displayFullName;
}

//let assignFullName = welcome('Holberton', 'School');
let assignFullName = welcome('eggceptional', 'individual');
assignFullName(); 
