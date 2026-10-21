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

# Parte 2: Estatísticas gerais
def resumo_geral(matriz):
    print("=== PARTE 2: ESTATÍSTICAS GERAIS ===")

    media = np.mean(matriz)
    menor = np.min(matriz)
    maior = np.max(matriz)
    desvio = np.std(matriz)

    print(f"Média: {media:.2f}")
    print(f"Menor medição: {menor}")
    print(f"Maior medição: {maior}")
    print(f"Desvio padrão: {desvio:.2f}")

    return media, menor, maior, desvio

resumo_geral(matriz)
