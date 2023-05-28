// 19 - Contagem de Vogais

function resultadoVogais() {

    const str = document.getElementById("texto").value;

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `Existe o total de ${contandoVogais(str)} vogais na string "${str}"`;
}

function contandoVogais(str) {

    const vogais = "aeiouAEIOU";

    let totalVogal = 0;

    for (let i = 0; i < str.length; i++) {
        if (vogais.indexOf(str[i]) != -1) {
            totalVogal++;
        }
    }

    return totalVogal;
}