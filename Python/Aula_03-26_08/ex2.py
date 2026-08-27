numero = input("DIGITE UM NUIMERO  ")
    
if not numero.isdigit():
    print("Não pode digitar letras!")
else:
    numero = int(numero)
    if numero >= 10 and numero <= 20:
        print("NUMERO ESTÁ NO INTERVALO  ")
    else: 
        print("NÃO ESTA NO INTERVALO!  ")

