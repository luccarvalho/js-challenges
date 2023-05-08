// 4 - Cálculo de área e perímetro de um retângulo

function calcularArea(comprimento, largura) {
    return comprimento * largura;
}

function calcularPerimetro(comprimento, largura) {
    return 2 * (comprimento + largura);
}

function calculandoDados() {

    const comprimento = parseInt(document.getElementById("comprimento").value);

    const largura = parseInt(document.getElementById("largura").value);

    const resultado = document.getElementById("resultado");

    const area = calcularArea(comprimento, largura);

    const perimetro = calcularPerimetro(comprimento, largura);

    resultado.innerHTML = `A área do retângulo é de ${area} e o perímetro é de ${perimetro}`;
}
