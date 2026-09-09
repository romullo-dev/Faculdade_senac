Resp = "S"
valor_total = 0

while Resp == "S":
    nome_produto = input("Digite o nome do produto: ")
    qntidade = int(input("Digite a quantidade do produto: "))
    preco = float(input("Digite o preço do produto: "))
    valor_total += qntidade * preco
    Resp = input("Deseja continuar? (S/N): ").upper()

print(f"Valor total da compra: R$ {valor_total:.2f}")