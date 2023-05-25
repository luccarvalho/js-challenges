// 16 - Fatorial

function resultadoFatorial() {

    const numero = document.getElementById('numero').value;

    const resposta = document.getElementById('resultado');

    // validações
    if (numero < 1 || numero === "") {
        resultado.className = "fw-bold text-danger";
        resultado.innerHTML = "Número inválido!";
        return;
    }

    resultado.className = "badge bg-secondary";
    resposta.innerHTML = `A multiplicação de ${numero} por seus antecessores é: ${fatorial(numero)}`;
}

function fatorial(numero) {

    let resultado = numero;

    for (let i = 1; i < numero; i++) {

        resultado = resultado * i;
    }

    return resultado;
}

