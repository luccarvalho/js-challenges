// 2 - Cálculo de IMC

function resultadoImc() {

    const altura = parseFloat(document.getElementById("altura").value);

    const peso = parseFloat(document.getElementById("peso").value);

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `Seu IMC é ${calcularImc(altura, peso)}`;
}

function calcularImc(altura, peso) {

    return (peso / (altura * altura)).toFixed(2);
}
