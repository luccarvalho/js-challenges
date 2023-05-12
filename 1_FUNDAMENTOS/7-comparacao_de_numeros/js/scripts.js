// 7 - Comparação de números

function comparaNumeros() {

    const numero1 = parseInt(document.getElementById("numero1").value);

    const numero2 = parseInt(document.getElementById("numero2").value);

    const resultado = document.getElementById("resultado");

    if (numero1 == numero2) {
        resultado.innerHTML = "Os dois números são iguais";

    } else if (numero1 < numero2) {
        resultado.innerHTML = "O primeiro número é menor que o segundo número";

    } else {
        resultado.innerHTML = "O primeiro número é maior que o segundo número";
    }

}