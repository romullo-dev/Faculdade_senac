precos = (100, 120, 40, 30, 50, 134)

menu = 0

while menu != 5:

    print("\n===== MENU =====")
    print("1 - Mostrar o menor preço")
    print("2 - Mostrar o maior preço")
    print("3 - Mostrar a soma dos preços")
    print("4 - Buscar um preço")
    print("5 - Sair")

    menu = int(input("Qual a opção? "))

    if menu == 1:
        print("Menor preço:", min(precos))

    elif menu == 2:
        print("Maior preço:", max(precos))

    elif menu == 3:
        print("Soma dos preços:", sum(precos))

    elif menu == 4:
        busca = int(input("Digite o preço que deseja buscar: "))

        if busca in precos:
            print("O preço está na tupla.")
        else:
            print("O preço não está na tupla.")

    elif menu == 5:
        print("Programa encerrado.")

    else:
        print("Opção inválida.")