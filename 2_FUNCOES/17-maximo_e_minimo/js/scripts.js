// 17 - Máximo e mínimo

function resultadoMaxMin() {

    const numero1 = document.getElementById("numero1").value;

    const numero2 = document.getElementById("numero2").value;

    const resultado = document.getElementById("resultado");

    // validações
    if (numero1 < 1 || numero2 < 1 || numero1 === "" || numero2 === "") {
        resultado.className = "fw-bold text-danger";
        resultado.innerHTML = "Número inválido!";
        return;
    }

    resultado.innerHTML = `O maior valor entre ${numero1} e ${numero2} é: ${maximo(numero1, numero2)}! E o menor valor é: ${minimo(numero1, numero2)}!`;
}

function maximo(numero1, numero2) {

    return Math.max(numero1, numero2);
}

function minimo(numero1, numero2) {

    return Math.min(numero1, numero2);
}
