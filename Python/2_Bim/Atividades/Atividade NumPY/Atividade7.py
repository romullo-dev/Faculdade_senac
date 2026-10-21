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

# Parte 7: Classificação
def classificar_media(media):
    if media < 60:
        return "Normal"
    elif media < 75:
        return "Atenção"
    else:
        return "Crítico"


def classificar_servidores(matriz, servidores):
    print("=== PARTE 7: CLASSIFICAÇÃO ===")

    medias = np.mean(matriz, axis=1)
    classificacoes = []

    for i in range(len(servidores)):
        classificacao = classificar_media(medias[i])
        classificacoes.append(classificacao)
        print(f"{servidores[i]} (Média: {medias[i]:.2f}): {classificacao}")

    return classificacoes

classificar_servidores(matriz, servidores)
