numero = int(input("DIGITE UM NUIMERO  "))

if numero % 3 == 0 and numero % 5 == 0:
    print("O NUMERO É MULTPLO DE 3 E DE 5  ")
elif numero % 3 == 0: 
    print("O NUMERO É MULTPLO DE 3  ")
elif numero % 5 == 0: 
    print("O NUMERO É MULTPLO DE 5  ")
else:
    print("NÃO E MULTIPLO DE 5 E 3")
