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

# Parte 8: Servidor com maior média
def servidor_maior_media_func(medias, servs, cont_alertas, classificacoes):
    print("=== PARTE 8: SERVIDOR COM MAIOR MÉDIA ===")

    maior_media = medias[0]
    posicao_maior = 0

    for i in range(1, len(medias)):
        if medias[i] > maior_media:
            maior_media = medias[i]
            posicao_maior = i

    print(f"Nome do servidor: {servs[posicao_maior]}")
    print(f"Valor da média: {maior_media:.2f}")
    print(f"Quantidade de alertas desse servidor: {cont_alertas[posicao_maior]}")
    print(f"Classificação recebida: {classificacoes[posicao_maior]}")
    print()

    return posicao_maior

def classificar_media(media):
    if media < 60:
        return "Normal"
    elif media < 75:
        return "Atenção"
    else:
        return "Crítico"


limite = float(input("Informe o limite crítico: "))
medias = np.mean(matriz, axis=1)
cont_alertas = np.sum(matriz >= limite, axis=1)
classificacoes = []
for i in range(len(servidores)):
    classificacoes.append(classificar_media(medias[i]))

servidor_maior_media_func(medias, servidores, cont_alertas, classificacoes)
