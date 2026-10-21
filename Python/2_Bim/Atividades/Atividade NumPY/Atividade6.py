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

#PARTE 6: ALERTAS POR SERVIDOR
limite = float(input("Informe o limite crítico: "))
alertas = matriz >= limite

def alertas_por_servidor(alertas, lista_servidores):
    print("\n=== PARTE 6: ALERTAS POR SERVIDOR ===")

    contagem = np.sum(alertas, axis=1)
    
    servidores_sem_alerta = []
    
    for i in range(len(lista_servidores)):
        if contagem[i] == 1:
            print(f"{lista_servidores[i]}: {contagem[i]} alerta")
        else:
            print(f"{lista_servidores[i]}: {contagem[i]} alertas")
            
        if contagem[i] == 0:
            servidores_sem_alerta.append(lista_servidores[i])
            
    print("\nServidores que não apresentaram nenhum alerta:")
    if len(servidores_sem_alerta) > 0:
        for servidor in servidores_sem_alerta:
            print(servidor)
    else:
        print("Todos os servidores apresentaram pelo menos um alerta.")

alertas_por_servidor(alertas, servidores)