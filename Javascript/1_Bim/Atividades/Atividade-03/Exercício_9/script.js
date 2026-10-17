let nome_cliente = prompt("Digite o nome do cliente:");

let idade_motorista = Number(
    prompt("Digite a idade do motorista:")
);

let tipo_veiculo = Number(
    prompt(
        "Digite o tipo de veículo:\n" +
        "1 - Econômico\n" +
        "2 - Sedan\n" +
        "3 - SUV\n" +
        "4 - Executivo"
    )
);

let qtd_diarias = Number(
    prompt("Digite a quantidade de diárias:")
);

let km_prevista = Number(
    prompt("Digite a quilometragem total prevista:")
);

let contratar_seguro = prompt(
    "Deseja contratar seguro? (S/N)"
).toUpperCase();

let cupom = prompt(
    "Digite o cupom promocional:"
).toUpperCase();

let forma_pagamento = Number(
    prompt(
        "Forma de pagamento:\n" +
        "1 - PIX\n" +
        "2 - Cartão de débito\n" +
        "3 - Cartão de crédito"
    )
);


// VARIÁVEIS

let valor_diaria = 0;
let valor_km_excedente = 0;
let valor_seguro_diaria = 0;

let categoria_veiculo = "";
let nome_pagamento = "";

let valor_original_diarias = 0;

let taxa_motorista_jovem = 0;

let percentual_desconto_diarias = 0;
let desconto_diarias = 0;

let valor_diarias_descontadas = 0;

let desconto_cupom = 0;

let valor_seguro = 0;

let km_incluidos = 0;
let km_excedentes = 0;
let custo_km_excedente = 0;

let subtotal = 0;

let desconto_pagamento = 0;
let acrescimo_pagamento = 0;

let valor_final = 0;

let locacao_valida = true;


// TIPO DO VEÍCULO

switch (tipo_veiculo) {

    case 1:
        categoria_veiculo = "Econômico";
        valor_diaria = 120;
        valor_km_excedente = 0.80;
        valor_seguro_diaria = 25;
        break;

    case 2:
        categoria_veiculo = "Sedan";
        valor_diaria = 180;
        valor_km_excedente = 1.00;
        valor_seguro_diaria = 35;
        break;

    case 3:
        categoria_veiculo = "SUV";
        valor_diaria = 260;
        valor_km_excedente = 1.30;
        valor_seguro_diaria = 45;
        break;

    case 4:
        categoria_veiculo = "Executivo";
        valor_diaria = 350;
        valor_km_excedente = 1.60;
        valor_seguro_diaria = 60;
        break;

    default:
        alert("Tipo de veículo inválido.");
        locacao_valida = false;
        break;
}


// VALIDAÇÃO DA IDADE

if (idade_motorista < 21) {

    alert(
        "Locação recusada. O motorista precisa ter pelo menos 21 anos."
    );

    locacao_valida = false;
}


// VALIDAÇÃO DAS DIÁRIAS

if (qtd_diarias <= 0) {

    alert(
        "Locação recusada. A quantidade de diárias deve ser maior que zero."
    );

    locacao_valida = false;
}


// VALIDAÇÃO DA QUILOMETRAGEM

if (km_prevista <= 0) {

    alert(
        "Locação recusada. A quilometragem prevista deve ser maior que zero."
    );

    locacao_valida = false;
}


// CONTINUA SOMENTE SE FOR VÁLIDA

if (locacao_valida == true) {

    // 1 - VALOR ORIGINAL DAS DIÁRIAS

    valor_original_diarias =
        valor_diaria * qtd_diarias;


    // 2 - TAXA MOTORISTA JOVEM

    if (idade_motorista >= 21 && idade_motorista <= 24) {

        taxa_motorista_jovem =
            40 * qtd_diarias;

    }


    // 3 - DESCONTO PELA QUANTIDADE DE DIÁRIAS

    if (qtd_diarias <= 3) {

        percentual_desconto_diarias = 0;

    } else if (qtd_diarias >= 4 && qtd_diarias <= 6) {

        percentual_desconto_diarias = 0.05;

    } else if (qtd_diarias >= 7 && qtd_diarias <= 10) {

        percentual_desconto_diarias = 0.10;

    } else {

        percentual_desconto_diarias = 0.15;

    }


    desconto_diarias =
        valor_original_diarias *
        percentual_desconto_diarias;


    valor_diarias_descontadas =
        valor_original_diarias -
        desconto_diarias;


    // 4 - CUPOM PROMOCIONAL

    if (
        cupom == "ADS15" &&
        qtd_diarias >= 5 &&
        valor_original_diarias >= 900
    ) {

        desconto_cupom =
            valor_diarias_descontadas * 0.15;

        valor_diarias_descontadas =
            valor_diarias_descontadas -
            desconto_cupom;

    }


    // 5 - SEGURO

    if (contratar_seguro == "S") {

        valor_seguro =
            valor_seguro_diaria *
            qtd_diarias;

    }


    // 6 - QUILOMETRAGEM EXCEDENTE

    km_incluidos =
        qtd_diarias * 150;


    if (km_prevista > km_incluidos) {

        km_excedentes =
            km_prevista -
            km_incluidos;


        custo_km_excedente =
            km_excedentes *
            valor_km_excedente;

    }


    // 7 - SUBTOTAL

    subtotal =
        valor_diarias_descontadas +
        taxa_motorista_jovem +
        valor_seguro +
        custo_km_excedente;


    // 8 - FORMA DE PAGAMENTO

    switch (forma_pagamento) {

        case 1:

            nome_pagamento = "PIX";

            desconto_pagamento =
                subtotal * 0.05;

            break;


        case 2:

            nome_pagamento =
                "Cartão de débito";

            break;


        case 3:

            nome_pagamento =
                "Cartão de crédito";

            acrescimo_pagamento =
                subtotal * 0.03;

            break;


        default:

            alert(
                "Forma de pagamento inválida."
            );

            locacao_valida = false;

            break;
    }


    // 9 - VALOR FINAL

    if (locacao_valida == true) {

        valor_final =
            subtotal -
            desconto_pagamento +
            acrescimo_pagamento;


        alert(
            "RESUMO DA LOCAÇÃO\n\n" +

            "Cliente: " +
            nome_cliente + "\n" +

            "Idade do motorista: " +
            idade_motorista + "\n" +

            "Veículo: " +
            categoria_veiculo + "\n" +

            "Diárias: " +
            qtd_diarias + "\n\n" +

            "Valor original das diárias: R$ " +
            valor_original_diarias.toFixed(2) +
            "\n" +

            "Desconto pelas diárias: R$ " +
            desconto_diarias.toFixed(2) +
            "\n" +

            "Desconto do cupom: R$ " +
            desconto_cupom.toFixed(2) +
            "\n" +

            "Taxa motorista jovem: R$ " +
            taxa_motorista_jovem.toFixed(2) +
            "\n" +

            "Seguro: R$ " +
            valor_seguro.toFixed(2) +
            "\n\n" +

            "KM incluídos: " +
            km_incluidos +
            " km\n" +

            "KM excedentes: " +
            km_excedentes +
            " km\n" +

            "Valor KM excedente: R$ " +
            custo_km_excedente.toFixed(2) +
            "\n\n" +

            "Subtotal: R$ " +
            subtotal.toFixed(2) +
            "\n" +

            "Forma de pagamento: " +
            nome_pagamento +
            "\n" +

            "Desconto do pagamento: R$ " +
            desconto_pagamento.toFixed(2) +
            "\n" +

            "Acréscimo do pagamento: R$ " +
            acrescimo_pagamento.toFixed(2) +
            "\n\n" +

            "VALOR FINAL: R$ " +
            valor_final.toFixed(2)
        );

    }

}