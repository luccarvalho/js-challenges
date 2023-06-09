// 20 - Palíndromo

function conferePalindromo() {

    const str = document.getElementById("texto").value;

    const resultado = document.getElementById("resultado");

    // validações
    if (str === "") {
        resultado.className = "fw-bold text-danger";
        resultado.innerHTML = "Campo vazio!";
        return;
    }

    resultado.className = "badge bg-secondary";
    resultado.innerHTML = `A string "${str}" é um palíndromo? ${palindromo(str) ? "SIM!" : "NÃO!"}`;
}

function palindromo(str) {

    // remover caracteres especiais, espaços e converter para minúsculas
    let alteraStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    // inverter a ordem da string em alteraStr
    let reverteStr = alteraStr.split('').reverse().join('');

    return alteraStr === reverteStr;

}
