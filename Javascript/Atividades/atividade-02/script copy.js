const nomecliente = prompt("Qual seu nome? ")
let produto = null;
let preco = 0;
let quantidade = 0;
let precofinal = 0;
const clientevip = test(prompt("Você é cliente Vip?,\n Digite S para sim e  N para não ")) == "";
const select = Number(prompt("Selecione a opção desejada...\n"+
    "1 - Café R$6,00\n "+
    "2 - Cappuccino R$10,00 "+
    "3 - Sanduíche R$15,00\n"+
    "4 - Combo R$22,00"
))
switch (opcao){
    case 1:
        alert ("Café R$6,00");
        break;
    case 2:
        alert ("Cappuccino R$10,00");
        break;
    case 3:
        alert("Sanduíche R$15,00");
        break;
    case 4:
        alert ("Combo R$22,00");
        break;
    default:
        alert ("Opção valida")
}
if (produto !== null){
    while (quantidade <= 0) {
        quantidade = Number (prompt("Qual a quantidade? "));
        if (quantidade <= 0 || isNaN (quantidade));
    }
}
    precofinal = precounitario * quantidade;
    if (preco >= 100){
        precofinal = precofinal-
        (precofinal * 15);
        alert("Seu pedido recebeu desconto, 15%")
    }
    else if (precofinal >= 50 || clientevip){
        precofinal = precofinal-
        (precofinal * 0.10)
    }
    alert("===SEU PEDIDO===\n"+
        "Cliente\n "+ nomecliente +
        "Produto\n " + produto+
        "Quantidade\n "+ quantidade +
        "Preço\n R$ "+ preco +
        "Preço Final\n " + precofinal);