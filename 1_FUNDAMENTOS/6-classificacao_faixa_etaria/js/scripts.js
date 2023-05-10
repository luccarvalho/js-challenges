// 6 - Classificação de faixa etária

function verificaFaixaEtaria() {
    const idade = parseInt(document.getElementById("idade").value);

    const resultado = document.getElementById("resultado");

    if (idade < 0) {
        resultado.className = "badge bg-danger";
        resultado.innerHTML = "Idade inválida!";
        return;
    }

    if (idade >= 0 && idade < 13) {
        resultado.className = "badge bg-secondary";
        resultado.innerHTML = "Sua faixa etária é de Criança";

    } else if (idade >= 13 && idade < 18) {
        resultado.className = "badge bg-secondary";
        resultado.innerHTML = "Sua faixa etária é de Adolescente";

    } else if (idade >= 18 && idade < 60) {
        resultado.className = "badge bg-secondary";
        resultado.innerHTML = "Sua faixa etária é de Adulto";

    } else {
        resultado.className = "badge bg-secondary";
        resultado.innerHTML = "Sua faixa etária é de Idoso";
    }
}
