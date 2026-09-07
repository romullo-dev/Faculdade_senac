password = input("Digite a senha: ")
username = input("Digite o nome de usuário: ")

tentativas = 0

while tentativas < 3:
    if password == "python123" and username == "python123":
        print("Acesso permitido.")
        break
    else:
        print("Acesso negado.")
        tentativas += 1
        print(f"Tentativa {tentativas}")
