// 8 - Calculadora com switch

function calcular(tipo, valor) {

    if (tipo === "acao") {

        switch (valor) {
            case "c":
                document.getElementById("resultado").value = "";
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                document.getElementById("resultado").value += valor;
                break;
            case "=":
                let valor_campo = eval(document.getElementById("resultado").value);
                document.getElementById("resultado").value = valor_campo;
                break;
        }

    } else if (tipo === "valor") {

        document.getElementById("resultado").value += valor;
    }
}
