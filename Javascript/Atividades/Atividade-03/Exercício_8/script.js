let nome_hospede = prompt("Digite o nome do hóspede:");

let tipo_quarto = Number(
    prompt("Digite o tipo de quarto:\n1 - Standard\n2 - Família\n3 - Suíte")
);

let qtd_diarias = Number(
    prompt("Digite a quantidade de diárias:")
);

let qnd_hospede = Number(
    prompt("Digite a quantidade de hóspedes:")
);

let inclusao_cafe = prompt(
    "Incluir café da manhã? (S/N)"
).toLowerCase();

let forma_pagamento = prompt(
    "Forma de pagamento:\n1 - À vista\n2 - Parcelado"
);

let valor_diaria = 0;
let capacidade_maxima = 0;
let valor_cafe = 0;
let valor_diarias = 0;

let desconto_diarias = 0;
let desconto_pagamento = 0;

let valor_total = 0;
let nome_quarto = "";

let reserva_valida = true;


// TIPO DE QUARTO

switch (tipo_quarto) {

    case 1:
        valor_diaria = 180;
        capacidade_maxima = 2;
        nome_quarto = "Standard";
        break;

    case 2:
        valor_diaria = 280;
        capacidade_maxima = 4;
        nome_quarto = "Família";
        break;

    case 3:
        valor_diaria = 420;
        capacidade_maxima = 2;
        nome_quarto = "Suíte";
        break;

    default:
        alert("Opção de quarto inválida.");
        reserva_valida = false;
        break;
}


// VALIDAÇÃO DAS DIÁRIAS

if (qtd_diarias <= 0) {
    alert("A quantidade de diárias deve ser maior que zero.");
    reserva_valida = false;
}


// VALIDAÇÃO DOS HÓSPEDES

if (qnd_hospede <= 0) {
    alert("A quantidade de hóspedes deve ser maior que zero.");
    reserva_valida = false;
}


// VERIFICA CAPACIDADE DO QUARTO

if (qnd_hospede > capacidade_maxima) {
    alert("A quantidade de hóspedes ultrapassa a capacidade do quarto.");
    reserva_valida = false;
}


// SE A RESERVA FOR VÁLIDA

if (reserva_valida) {

    // VALOR DAS DIÁRIAS
    valor_diarias = valor_diaria * qtd_diarias;


    // CAFÉ DA MANHÃ
    if (inclusao_cafe == "s") {

        valor_cafe = 35 * qnd_hospede * qtd_diarias;

    }


    // 12% DE DESCONTO PARA 7 DIÁRIAS OU MAIS
    if (qtd_diarias >= 7) {

        desconto_diarias = valor_diarias * 0.12;

    }


    // CALCULA O TOTAL
    valor_total =
        valor_diarias
        - desconto_diarias
        + valor_cafe;


    // 5% DE DESCONTO PARA PAGAMENTO À VISTA
    if (forma_pagamento == "1") {

        desconto_pagamento = valor_total * 0.05;

        valor_total =
            valor_total - desconto_pagamento;

    }


    // RESULTADO

    alert(
        "RESUMO DA RESERVA\n\n" +

        "Hóspede: " + nome_hospede + "\n" +

        "Quarto: " + nome_quarto + "\n" +

        "Quantidade de hóspedes: " + qnd_hospede + "\n" +

        "Quantidade de diárias: " + qtd_diarias + "\n\n" +

        "Valor das diárias: R$ " +
        valor_diarias.toFixed(2) + "\n" +

        "Valor do café da manhã: R$ " +
        valor_cafe.toFixed(2) + "\n" +

        "Desconto das diárias: R$ " +
        desconto_diarias.toFixed(2) + "\n" +

        "Desconto pagamento à vista: R$ " +
        desconto_pagamento.toFixed(2) + "\n\n" +

        "VALOR FINAL: R$ " +
        valor_total.toFixed(2)
    );

}