contador = 1
continuar = "s"

while continuar == "s":
    print(contador, " Tentar novamente..")
    contador += 1
    continuar = input("Deseja tentar novamente? (s/n): ")
    
print("Fim do programa")