numeros = []
cont = 0
positivos = 0
negativos = 0
zeros = 0
pares = 0
impares = 0

for i in range(1,11):
    numero = int(input(f"Digite o {i}º número inteiro: "))
    numeros.append(numero)
    
for numero in numeros:
    cont += 1
    if numero > 0:
        positivos += 1
        text = f"Quantidade de numeros {positivos} positivo"
    elif numero < 0:
        negativos += 1
        text = f"Quantidade de numeros {negativos} negativo"
    elif numero == 0:
        zeros += 1
        text = f"Quantidade de numeros {zeros} zero"
    
    if numero % 2 == 0:
        pares += 1
        text2 = f"Quantidade de numeros {pares} par"
    elif numero % 2 != 0:
        impares += 1
        text3 = f"Quantidade de numeros {impares} ímpar"


print(text)
print(text2)
print(text3)

#print(f"Os números digitados foram: {numeros}")