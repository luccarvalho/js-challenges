// 14 - Fibonacci

function fibonacci() {
    const numero = document.getElementById("numero").value;

    let resultado = document.getElementById("resultado");

    let a = 0;
    let b = 1;

    let sequencia = []

    if (numero < 1 || numero === "") {
        resultado.className = "fw-bold text-danger";
        resultado.innerHTML = "Número inválido!";
        return;
    }

    resultado.innerHTML = "";

    while (a <= numero) {
        sequencia.push(a);
        const temp = a;
        a = b;
        b = temp + a
    }

    resultado.innerHTML = `A sequência de Fibonacci até ${numero} é ${fibonacci()}`;

}