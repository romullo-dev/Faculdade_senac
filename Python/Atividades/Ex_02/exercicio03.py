numero = int(input("Digite um número inteiro: "))
type_num = ""

if numero < 0:
    type_num = "negativo"
elif numero == 0:
    type_num = "zero"
else:
    type_num = "positivo"

if numero % 2 == 0:
    print(f"O número {numero} é par com o tipo {type_num}")
else:
    print(f"O número {numero} é ímpar com o tipo {type_num}")