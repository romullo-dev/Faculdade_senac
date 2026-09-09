resp = 0
valor = 1000
while resp != 4:
    print("Caixa eletronico:")
    print("1 - Consultar saldo")
    print("2 - Depositar")
    print("3 - Sacar")
    print("4 - Sair")
    resp = int(input("Digite a opção desejada: "))
    
    match resp:
        case 1:
            print(f"Saldo: R$ {valor:.2f}")
        case 2:
            if valor_deposito <= 0:
                print("Não é possível realizar depósitos. Valor inválido.")
            else:
                valor_deposito = float(input("Digite o valor a ser depositado: "))
                valor += valor_deposito
                print(f"Depósito de R$ {valor_deposito:.2f} realizado com sucesso!")
        case 3:
            valor_saque = float(input("Digite o valor a ser sacado: "))
            if valor_saque <= valor:
                valor -= valor_saque
                print(f"Saque de R$ {valor_saque:.2f} realizado com sucesso!")
            else:
                print("Saldo insuficiente.")
        case 4:
            print("Saindo do caixa eletrônico...")
        case _:
            print("Opção inválida. Tente novamente.")