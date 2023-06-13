// 22 - Frequência de elementos

function exibirFrequencia() {

    const sequencia = document.getElementById("sequencia");

    let arr = [];

    const resultado = document.getElementById("resultado");

    // validações
    if (sequencia < 1 || sequencia === "") {
        resultado.className = "fw-bold text-danger";
        resultado.innerHTML = "Número inválido!";
        return;
    }

    arr.push(sequencia.value);

    resultado.innerHTML = `O elemento mais frequente é: ${elementoMaisFrequente(arr)}`;
}

function elementoMaisFrequente(arr) {

    const contador = {};

    let elemento;

    let maxContagem = 1;

    for (const valor of arr) {

        if (!contador[valor]) {
            contador[valor] = 1;
        } else {
            contador[valor]++;
        }

        if (contador[valor] > maxContagem) {
            maxContagem = contador[valor];
            arr = valor;
        }
    }

    return arr;
}