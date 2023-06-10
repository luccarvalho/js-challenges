// 21 - Array de números aleatórios

function exibirArray() {

    const tamanho = document.getElementById("tamanho").value;

    const numero = document.getElementById("numero").value;

    const resultado = document.getElementById("resultado");

    // validações
    if (numero < 1 || numero === "") {
        resultado.className = "fw-bold text-danger";
        resultado.innerHTML = "Número inválido!";
        return;
    }

    resultado.innerHTML = `O array gerado de números aleatórios é: ${gerarArrayAleatorio(tamanho, numero)}`;
}

function gerarArrayAleatorio(tamanho, numero) {

    const arr = [];

    for (let i = 0; i < tamanho; i++) {
        arr.push(Math.floor(Math.random() * numero) + 1);
    }

    return arr;
}

const resultadoArray = gerarArrayAleatorio(tamanho, numero);
