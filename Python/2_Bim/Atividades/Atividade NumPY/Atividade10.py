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
gerar_relatorio()