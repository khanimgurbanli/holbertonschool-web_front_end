function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.size = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const body = document.body;

    const p = document.createElement('p');
    p.innerText = 'Welcome Holberton!';
    body.appendChild(p);

    const buttonSpooky = document.createElement('button');
    buttonSpooky.innerText = 'Spooky';
    body.appendChild(buttonSpooky);

    const buttonDarkMode = document.createElement('button');
    buttonDarkMode.innerText = 'Dark mode';
    body.appendChild(buttonDarkMode);

    const buttonScreamMode = document.createElement('button');
    buttonScreamMode.innerText = 'Scream mode';
    body.appendChild(buttonScreamMode);

    buttonSpooky.onclick = spooky;
    buttonDarkMode.onclick = darkMode;
    buttonScreamMode.onclick = screamMode;
}

main();