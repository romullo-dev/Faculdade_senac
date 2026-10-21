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

# Parte 3: Análise por servidor
def analisar_servidores(matriz, servidores):
    print("=== PARTE 3: ANÁLISE POR SERVIDOR ===")

    medias = np.mean(matriz, axis=1)
    menores = np.min(matriz, axis=1)
    maiores = np.max(matriz, axis=1)
    desvios = np.std(matriz, axis=1)

    for i in range(len(servidores)):
        print(servidores[i])
        print("Média: ", round(medias [i], 2))
        print("Menor uso: ", round(menores[1], 2))
        print("Maior uso: ", round(maiores[1], 2))
        print("Desvio padrão: ", round(desvios[1], 2))
        print("-" * 20)
    return medias
analisar_servidores(matriz, servidores)