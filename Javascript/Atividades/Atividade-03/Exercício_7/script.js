let nome_cliente = prompt("Digite o nome do cliente: ");
let valor_compra = parseFloat(prompt("Digite o valor da compra: "));
let regiao_entrega = prompt("Digite a região de entrega (Norte, Sul, Leste ou Oeste): ");
let cumpom_informado = prompt("Digite o cupom de desconto (se houver): ");
let forma_pagamento = prompt("Digite a forma de pagamento (dinheiro, cartão ou pix): ").toLowerCase();
let valor_frete = 0; 


switch (regiao_entrega.toLowerCase()) {
    case "norte":
        valor_frete += 20;
        break;
    case "sul":
        valor_frete += 15;
        break;
    case "centro":
        valor_frete += 10;
        break;
    default:
        alert("A região escolhida não é atendida");
}

alert(forma_pagamento)