// 13 - Exibição de padrões

function exibirPadrao() {
    const numero = document.getElementById("numero").value;

    let resultado = document.getElementById("resultado");

    if (numero < 1 || numero === "") {
        resultado.className = "fw-bold text-danger";
        resultado.innerHTML = "Número inválido!";
        return;
    }

    resultado.innerHTML = "";

    for (let i = 1; i <= numero; i++) {

        resultado.className = "col-6 col-xl-3 bg-light border border-secondary rounded p-3";
        resultado.innerHTML += "*".repeat(i) + "</br>";

    }

}