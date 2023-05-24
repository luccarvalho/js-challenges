// 15 - Par ou ímpar

function parOuImpar() {

    const numero = document.getElementById('numero').value;

    let resultado = document.getElementById('resultado');

    // validações
    if (numero < 1 || numero === "") {
        resultado.className = "fw-bold text-danger";
        resultado.innerHTML = "Número inválido!";
        return;
    }

    // lógica par ou ímpar
    if (numero % 2 === 0) {

        resultado.className = "badge bg-secondary";
        resultado.innerHTML = `O número ${numero} é par.`;

    } else {

        resultado.className = "badge bg-secondary";
        resultado.innerHTML = `O número ${numero} é impar.`;
    }

}