for produto in range(5):
    produto_nome = input(f"Digite o nome do {produto+1}º produto: ")
    valor = float(input(f"Digite o valor do {produto+1}º produto: "))
    qntidade = int(input(f"Digite a quantidade do {produto+1}º produto: "))
    total = valor * qntidade
    print(f"Produto: {produto_nome} | Valor: R${valor:.2f} | Quantidade: {qntidade} | Total: R${total:.2f}")
    