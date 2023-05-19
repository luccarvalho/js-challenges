// 11 - Tabuada

function tabuada() {
    const numero = document.getElementById("numero").value;

    let resultado = document.getElementById("resultado");

    if (numero < 1 || numero > 10 || numero === "") {
        resultado.className = "fw-bold text-danger";
        resultado.innerHTML = "Número inválido!";
        return;
    }

    resultado.innerHTML = "";

    for (let i = 1; i <= 10; i++) {

        resultado.className = "col-6 col-xl-3 bg-light border border-secondary rounded p-3";
        resultado.innerHTML += `${numero} x ${i} = ${numero * i} </br>`;

    }

}
