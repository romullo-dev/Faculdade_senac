import numpy as np

dados_cpu = [
    [42, 55, 61, 78, 84, 73, 68, 59],
    [35, 40, 38, 45, 50, 48, 44, 41],
    [70, 76, 82, 91, 88, 79, 85, 90],
    [55, 60, 58, 62, 67, 72, 69, 65],
    [80, 83, 79, 86, 92, 95, 89, 87]
]

servidores = [
    "Servidor A",
    "Servidor B",
    "Servidor C",
    "Servidor D",
    "Servidor E"
]

matriz = np.array(dados_cpu)

# Parte 5: Identificação de alertas
def identificar_alertas(matriz, limite):
    print("=== PARTE 5: IDENTIFICAÇÃO DE ALERTAS ===")

    alertas = matriz >= limite
    print("Matriz booleana de alertas:")
    print(alertas)

    medicoes_criticas = matriz[alertas]
    print("Medições que atingiram ou ultrapassaram o limite:")
    print(medicoes_criticas)

    total_alertas = np.sum(alertas)
    print("Quantidade total de alertas:", total_alertas)

    return alertas

limite = float(input("Informe o limite crítico: "))
identificar_alertas(matriz, limite)
