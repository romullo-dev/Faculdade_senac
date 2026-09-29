def calcular(n):
    soma = 0

    for i in range(1, n + 1):
        soma += i
        if soma >= 6:
            return soma

resultado = calcular(5)
print(resultado)