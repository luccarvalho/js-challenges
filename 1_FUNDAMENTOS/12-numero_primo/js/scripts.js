// 12 - Número primo

function primo() {
    const inicio = document.getElementById('inicio').value;

    const fim = document.getElementById('fim').value;

    let resultado = document.getElementById('resultado');

    let texto = '';

    let divisores;

    // validações
    if (inicio < 1 || inicio === "") {
        resultado.className = "fw-bold text-danger";
        resultado.innerHTML = "Número inválido!";
        return;

    } else if (fim === "") {
        resultado.className = "fw-bold text-danger";
        resultado.innerHTML = "Insira o segundo número!";
        return;

    } else if (fim <= inicio) {
        resultado.className = "fw-bold text-danger";
        resultado.innerHTML = "O segundo número precisa ser maior que o primeiro!";
        return;

    }

    // lógica para exibir os números primos entre os valores informados
    for (let count = inicio; count <= fim; count++) {

        divisores = 0;

        for (let aux = 1; aux <= count; aux++) {
            if (count % aux == 0) {
                divisores++;
            }
        }

        if (divisores == 2) {
            texto += count + '</br>';

        }
    }

    resultado.className = "col-6 col-xl-2 bg-light border border-secondary rounded p-3";
    resultado.innerHTML = texto;
}