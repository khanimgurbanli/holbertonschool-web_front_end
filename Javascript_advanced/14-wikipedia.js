function createElement(data) {
    const p = document.createElement("p"); // Küçük harfle "p" kullanımı yaygındır
    p.innerText = data;

    const body = document.querySelector("body");
    body.appendChild(p);
}

function queryWikipedia(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = JSON.parse(xhttp.responseText);
            const page = response.query.pages[Object.keys(response.query.pages)[0]]; // Dinamik olarak ilk sayfayı al
            callback(page.extract);
        }
    };
    const URL =
        "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

    xhttp.open("GET", URL, true);
    xhttp.send(); // Yanıt türünü belirtmeye gerek yok, JSON otomatik olarak ayrıştırılır
}

queryWikipedia(createElement);
