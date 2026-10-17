function calcular() {
    const ClientName = prompt("Qual é seu nome?");

    let produto = [];
    let preco = 0;
    let quantidade = 0;
    let precofinal = 0;
    let finalizar_pedido = false;
    let desconto = 0;

    const clientevip = Number(prompt("Você é cliente Vip?,\n Digite 1 para sim e 0 para não ")) == 1;

    while (!finalizar_pedido == true) {

        const select = Number(prompt("Selecione a opção desejada...\n" +
            "1 - Café R$6,00\n " +
            "2 - Cappuccino R$10,00 " +
            "3 - Sanduíche R$15,00\n" +
            "4 - Combo R$22,00\n" +
            "5 - finalizar pedido"
        ))

        switch (select) {
            case 1:
                quantidade = Number(prompt("Qual a quantidade de cafés? "));
                if (quantidade > 0) {
                    preco += quantidade * 6;
                    produto.push({
                        nome: "Café",
                        quantidade: quantidade,
                        preco: 6
                    });
                } else {
                    alert("Quantidade inválida!");
                }
                break;
            case 2:
                quantidade = Number(prompt("Qual a quantidade de cappuccinos? "));
                if (quantidade > 0) {
                    preco += quantidade * 10;
                    produto.push({
                        nome: "Cappuccino",
                        quantidade: quantidade,
                        preco: 10
                    });
                } else {
                    alert("Quantidade inválida!");
                }
                break;
            case 3:
                alert("Sanduíche R$15,00");
                quantidade = Number(prompt("Qual a quantidade de sanduíches? "));
                if (quantidade > 0) {
                    preco += quantidade * 15;
                    produto.push({
                        nome: "Sanduíche",
                        quantidade: quantidade,
                        preco: 15
                    });
                } else {
                    alert("Quantidade inválida!");
                }

                break;
            case 4:
                alert("Combo R$22,00");
                quantidade = Number(prompt("Qual a quantidade de combos? "));
                if (quantidade > 0) {
                    preco += quantidade * 22;
                    produto.push({
                        nome: "Combo",
                        quantidade: quantidade,
                        preco: 22
                    });
                } else {
                    alert("Quantidade inválida!");
                }

                break;
            case 5:
                alert("Finalizando pedido...");

                if (preco >= 100) {
                    desconto = 0.15;
                    precofinal = preco - (preco * desconto);
                    alert("Seu pedido recebeu desconto, 15%");
                } else if (preco >= 50 || clientevip) {
                    desconto = 0.10;
                    precofinal = preco - (preco * desconto);
                    alert("Seu pedido recebeu desconto, 10%");  
                } else {
                    desconto = 0;
                    precofinal = preco;
                }

                let valorDesconto = preco * desconto;


                alert(
                    "=== SEU PEDIDO ===\n\n" +
                    "Cliente: " + ClientName + "\n\n" +
                    "Produtos:\n" +
                    produto.map(item =>
                        item.nome +
                        " | Quantidade: " + item.quantidade +
                        " | Preço Unitário: R$ " + item.preco.toFixed(2) +
                        " | Subtotal: R$ " + (item.quantidade * item.preco).toFixed(2)
                    ).join("\n") +
                    "\n\nSubtotal do pedido: R$ " + preco.toFixed(2) +
                    "\nDesconto: " + (desconto * 100) + "%" +
                    "\nValor do desconto: R$ " + valorDesconto.toFixed(2) +
                    "\nTotal final: R$ " + precofinal.toFixed(2)
                );

                finalizar_pedido = true;
                break;
            default:
                alert("Opção inválida!");
        }
    }

}