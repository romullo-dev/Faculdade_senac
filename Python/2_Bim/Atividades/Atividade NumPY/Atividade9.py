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

# Parte 9: Simulação de melhoria
def simular_otimizacao(m, lim, servs):
    print("=== PARTE 9: SIMULAÇÃO DE MELHORIA ===")

    # Redução de 12%, sem modificar a matriz original
    matriz_otimizada = m * 0.88

    media_antes = np.mean(m)
    media_depois = np.mean(matriz_otimizada)

    alertas_antes = np.sum(m >= lim)
    alertas_depois = np.sum(matriz_otimizada >= lim)

    reducao_media = media_antes - media_depois

    medias_otimizadas = np.mean(matriz_otimizada, axis=1)
    criticos_depois = []

    for i in range(len(servs)):
        if classificar_media(medias_otimizadas[i]) == "Crítico":
            criticos_depois.append(servs[i])

    print(f"Média geral antes: {media_antes:.2f}")
    print(f"Média geral depois: {media_depois:.2f}")
    print(f"Quantidade de alertas antes: {alertas_antes}")
    print(f"Quantidade de alertas depois: {alertas_depois}")
    print(f"Redução obtida na média: {reducao_media:.2f}")

    print("\nServidores que continuam críticos:")

    if len(criticos_depois) > 0:
        for servidor in criticos_depois:
            print(servidor)
    else:
        print("Nenhum servidor.")

    print()

    return (
        media_antes,
        media_depois,
        alertas_antes,
        alertas_depois,
        reducao_media,
        criticos_depois
    )