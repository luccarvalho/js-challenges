// 22 - Frequência de elementos

function exibirFrequencia() {

    const sequencia = parseInt(document.getElementById("sequencia").value);

    const resultado = document.getElementById("resultado");

    // validações
    if (sequencia < 1 || sequencia === "") {
        resultado.className = "fw-bold text-danger";
        resultado.innerHTML = "Número inválido!";
        return;
    }

    resultado.innerHTML = `O array gerado de números aleatórios é: ${gerarArrayAleatorio(tamanho, numero)}`;
}