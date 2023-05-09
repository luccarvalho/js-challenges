// 5 - Verificação de divisibilidade

function calcularDivisibilidade(n1, n2) {
    return n1 % n2 === 0;
}

function verifica() {

    const numero1 = parseInt(document.getElementById("numero1").value);

    const numero2 = parseInt(document.getElementById("numero2").value);

    const resultado = document.getElementById("resultado");

    const divisivel = calcularDivisibilidade(numero1, numero2);

    resultado.innerHTML = `O número ${numero1} é divisível por ${numero2}? ${divisivel ? "Sim" : "Não"}`;
}