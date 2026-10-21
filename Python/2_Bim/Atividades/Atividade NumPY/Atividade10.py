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

# Parte 10: Relatório final
def classificar_media(media):
    if media < 60:
        return "Normal"
    elif media < 75:
        return "Atenção"
    else:
        return "Crítico"


def simular_otimizacao(m, lim, servs):
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

    return (
        media_antes,
        media_depois,
        alertas_antes,
        alertas_depois,
        reducao_media,
        criticos_depois
    )


def gerar_relatorio(m, lim, servs, medias, classificacoes,
                    pos_maior, resultado_melhoria):

    print("=== PARTE 10: RELATÓRIO FINAL ===")

    media_geral = np.mean(m)
    menor_medicao = np.min(m)
    maior_medicao = np.max(m)

    alertas = m >= lim
    total_alertas = np.sum(alertas)

    print(f"Média geral da matriz: {media_geral:.2f}")
    print(f"Maior medição: {maior_medicao}")
    print(f"Menor medição: {menor_medicao}")
    print(f"Quantidade total de alertas: {total_alertas}")

    print("\nServidor com maior média:")
    print(f"{servs[pos_maior]} - Média: {medias[pos_maior]:.2f}")

    print("\nServidores classificados como críticos:")

    encontrou_critico = False

    for i in range(len(servs)):
        if classificacoes[i] == "Crítico":
            print(servs[i])
            encontrou_critico = True

    if not encontrou_critico:
        print("Nenhum servidor.")

    print("\nResultado da simulação de redução de 12%:")
    print(f"Média antes: {resultado_melhoria[0]:.2f}")
    print(f"Média depois: {resultado_melhoria[1]:.2f}")
    print(f"Alertas antes: {resultado_melhoria[2]}")
    print(f"Alertas depois: {resultado_melhoria[3]}")
    print(f"Redução da média: {resultado_melhoria[4]:.2f}")

    print("\nServidores ainda críticos após a otimização:")

    if len(resultado_melhoria[5]) > 0:
        for servidor in resultado_melhoria[5]:
            print(servidor)
    else:
        print("Nenhum servidor.")

    print()


limite = float(input("Informe o limite crítico: "))

medias = np.mean(matriz, axis=1)

classificacoes = []
for i in range(len(servidores)):
    classificacoes.append(classificar_media(medias[i]))

maior_media = medias[0]
posicao_maior = 0
for i in range(1, len(medias)):
    if medias[i] > maior_media:
        maior_media = medias[i]
        posicao_maior = i

resultado_melhoria = simular_otimizacao(matriz, limite, servidores)

gerar_relatorio(matriz, limite, servidores, medias, classificacoes,
                posicao_maior, resultado_melhoria)

# DESAFIO DE INTERPRETAÇÃO (valores obtidos executando o programa com limite 80)
#
# 1) Qual servidor exige maior atenção?
#    O Servidor E.
#
# 2) Qual resultado numérico justifica essa conclusão?
#    Ele tem a maior média (86.38), a maior medição da matriz (95) e o maior
#    número de alertas (7 de 8 medições acima do limite 80).
#
# 3) O limite informado alterou a quantidade de servidores em alerta?
#    Sim. Com limite 80, apenas A, C e E têm alertas (B e D ficam sem).
#    Com limite 90, só C e E têm alertas; com limite 50, todos menos o B.
#    Quanto menor o limite, mais servidores entram em alerta.
#
# 4) A redução de 12% eliminou todos os problemas?
#    Não. A média geral caiu de 68.03 para 59.86 e os alertas caíram de 13 para 3,
#    mas o Servidor E continua Crítico (média 76.01) e C e E ainda têm medições
#    acima de 80.
#
# 5) Uma média aceitável garante que o servidor nunca apresentou valor crítico?
#    Não. O Servidor A tem média 65.00 (Atenção, não Crítico), mas registrou um
#    pico de 84, que gerou 1 alerta com limite 80. A média esconde os picos;
#    por isso é preciso olhar também o maior valor e a matriz booleana.
