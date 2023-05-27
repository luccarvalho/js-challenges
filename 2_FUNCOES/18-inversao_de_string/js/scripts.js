// 18 - Invertendo String

function resultadoInversao() {

    const str = document.getElementById("texto").value;

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `A string "${str}" invertida fica assim: "${invertendoString(str)}"`;
}

function invertendoString(str) {

    return str.split("").reverse().join("");
}

// abaixo segue outra opção, um pouco mais verbosa
// function invertendoString(str) {

//     let inverso = '';

//     for (let i = str.length - 1; i >= 0; i--) {

//         inverso += str[i];
//     }

//     return inverso;
// }
