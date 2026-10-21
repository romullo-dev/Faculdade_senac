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
#Parte 7: Classificação
def classificar_servidores(dados, nomes):
    medias = np.mean(dados, axis=1)
    
    print("--- Relatório de Classificação dos Servidores ---")
    for nome, media in zip(nomes, medias):
        if media < 60:
            classificacao = "Normal"
        elif 60 <= media < 75:
            classificacao = "Atenção"
        else:
            classificacao = "Crítico"
            
        print(f"{nome} (Média: {media:.2f}): {classificacao}")
classificar_servidores(dados_cpu, servidores)