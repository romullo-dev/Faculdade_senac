import numpy as np

def analisar_servedor(medicoes):
    print("Quantidade de amostras:", medicoes.size)
    print("Média:", np.mean(medicoes))
    print("Mínimo:", np.min(medicoes))
    print("Máximo:", np.max(medicoes))
    cpus_criticas  = medicoes[medicoes > 80]
    #print("===CPUs críticas===")
    #print(cpus_criticas)
    for i in range(medicoes.size):
        if medicoes[i] > 80:
            print(f"CPU {i} está crítica com {medicoes[i]}% de uso.")
#CHAMADA DE FUNÇÃO
medicoes = np.array([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
analisar_servedor(medicoes)