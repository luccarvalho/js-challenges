// 10 - Somatório de 1 a N

function somaTotal() {

    const numero = parseInt(document.getElementById("numero").value);

    let resposta = document.getElementById("resultado");

    resposta.innerHTML = `A soma dos números de 1 a ${numero} é ${soma(numero)}`;
}

function soma(numero) {

    let resultado = 0;

    for (let i = 1; i <= numero; i++) {
        resultado += i;
    }

    return resultado;
}