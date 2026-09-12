let nome_cliente = prompt("Digite o nome do cliente: ");
let valor_compra = parseFloat(prompt("Digite o valor da compra: "));
let regiao_entrega = prompt("Digite a região de entrega (Norte, Sul, Leste ou Oeste): ");
let cumpom_informado = prompt("Digite o cupom de desconto (se houver): ");
let forma_pagamento = prompt("Digite a forma de pagamento (dinheiro, cartão ou pix): ");


switch (regiao_entrega.toLowerCase()) {
    case "norte":
        valor_compra += 20;
        break;
    case "sul":
        valor_compra += 15;
        break;
    case "centro":
        valor_compra += 10;
        break;
    default:
        alert("Região de entrega inválida. Por favor, escolha uma região válida.");
}