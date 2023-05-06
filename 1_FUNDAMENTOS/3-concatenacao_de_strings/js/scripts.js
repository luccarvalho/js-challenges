// 3 - Concatenando strings

function concatenandoDados() {

    const nome = document.getElementById("nome").value;

    const idade = parseInt(document.getElementById("idade").value);

    const cidade = document.getElementById("cidade").value;

    const resultado = document.getElementById("resultado");

    return resultado.innerHTML = `Seu nome é ${nome}, você tem ${idade} anos e é de ${cidade}`;
}
