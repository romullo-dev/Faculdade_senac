let nome_cliente = prompt("Digite o nome do cliente: ");
let valor_compra = parseFloat(prompt("Digite o valor da compra: "));
let regiao_entrega = prompt("Digite a região de entrega (Norte, Sul, Leste ou Oeste): ").toLowerCase();
let cumpom_informado = prompt("Digite o cupom de desconto (se houver): ").toLowerCase();
let forma_pagamento = prompt("Digite a forma de pagamento (dinheiro, cartão ou pix): ").toLowerCase();
let valor_frete = 0; 
let desconto_pix = 0;
let desconto_cupom = 0;
let valor_total = 0


switch (regiao_entrega) {
    case "norte":
        if (forma_pagamento > 250) {
            valor_frete = 0;
        } else{
            valor_frete += 20;
        }
        break;
    case "sul":
        if (forma_pagamento > 250) {
            valor_frete = 0;
        } else{
            valor_frete += 15;
        }
        break;
    case "centro":
        if (forma_pagamento > 250) {
            valor_frete = 0;
        } else{
            valor_frete += 10;
        }
        break;
    default:
        alert("A região escolhida não é atendida");
}

if (cumpom_informado == "ads10" && valor_compra >= 100 ) {
    desconto_pix = (valor_compra * 0.10)
}

if (forma_pagamento == "pix") {
    desconto_cupom = (valor_compra * 0.05)
}

valor_total = 





