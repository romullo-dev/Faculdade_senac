const { captureOwnerStack } = require("react")

let nome_hospede = prompt("Digite o nome do Hospide: ")
let tipo_quarto = prompt("Digite o tipo de quarto: 1 - Standard 2 - Família 3 - Suíte")
let qtd_diarias = prompt ("digite a quantidade de diárias :")
let qnd_hospede = prompt("Digite a quantidade de hospede (S/N): ".toLowerCase())
let inclusao_cafe = prompt ("Incluir café da manhã")
let forma_pagamento = prompt ("Forma de pagamaneto :")

let valor_diaria = 0;
let capacidade_maxima = 0;
let valor_cafe = 0;

switch (tipo_quarto) {
    case 1:
        valor_diaria = 180;
        capacidade_maxima = 2;
        break;
    case 2:
        valor_diaria = 280;
        capacidade_maxima = 4;
        break;
    case 3:
        valor_diaria = 420;
        capacidade_maxima = 2
        break;
    default:
        print("Quarto Invalido")
        break;
}

if (qnd_hospede <= capacidade_maxima) {
    print("A quantidade de Hospede não pode ser maior do que a quantidade permetidada no quarto.")
} 

if (qtd_diarias < 0) {
    print("Quantidade de diárias invalida.")
}

if (inclusao_cafe == "s") {
    valor_cafe = (35*qtd_diarias)*qnd_hospede;
}

alert(valor_cafe)