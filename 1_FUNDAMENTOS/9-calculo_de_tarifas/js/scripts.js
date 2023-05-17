// 9 - Cálculo de tarifas

function verificaFaixaEtaria() {
    const idade = document.getElementById("idade").value;

    const resultado = document.getElementById("resultado");

    if (idade < 0 || idade === "") {
        resultado.className = "badge bg-danger";
        resultado.innerHTML = "Idade inválida!";
        return;
    }

    if (idade < 7) {
        resultado.className = "badge bg-secondary";
        resultado.innerHTML = "Isenção de tárifa pela faixa etária";

    } else if (idade >= 7 && idade < 60) {
        resultado.className = "badge bg-secondary";
        resultado.innerHTML = "Sua tárifa é regular no valor de R$2,50";

    } else {
        resultado.className = "badge bg-secondary";
        resultado.innerHTML = "A tárifa para idoso é de R$1,75";
    }

    if (document.getElementById("positivo").checked == true) {
        resultado.innerHTML = "A tárifa para estudante é de R$1,25";
    }
}
