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

# Parte 4: Análise por horário
def analisar_horarios(matriz):
    print("=== PARTE 4: ANÁLISE POR HORÁRIO ===")

    medias_h = np.mean(matriz, axis=0)
    menores_h = np.min(matriz, axis=0)
    maiores_h = np.max(matriz, axis=0)

    for i in range(matriz.shape[1]):
        print(f"Horário {i + 1}")
        print(f"Média: {medias_h[i]:.2f}")
        print(f"Menor valor: {menores_h[i]}")
        print(f"Maior valor: {maiores_h[i]}")
        print("=" * 20)

analisar_horarios(matriz)