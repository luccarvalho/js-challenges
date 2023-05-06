// 1 - Conversão de temperatura

function converter() {
    const num = parseInt(document.getElementById("num").value);

    const resp = document.getElementById("resultado");

    if (document.getElementById("CtoF").checked == true) {
        resp.innerHTML = `${num} graus Celsius equivalem a ${celsiusToFahrenheit(num)} graus fahrenheit`;
    }

    if (document.getElementById("FtoC").checked == true) {
        resp.innerHTML = `${num} graus Fahrenheit equivalem a ${fahrenheitToCelsius(num)} graus Celsius`;
    }
}

function celsiusToFahrenheit(num) {
    return (num * 9) / 5 + 32;
}

function fahrenheitToCelsius(num) {
    return ((num - 32) * 5) / 9;
}
