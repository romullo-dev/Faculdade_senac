#Estatística com NumPy

import numpy as np

def analisar_servidor (medicoes):
    print("qnt : " , medicoes.size)
    print("Media : ", np.mean(medicoes))
    print("menor uso : ", np.min(medicoes))
    print("maior uso : ", np.max(medicoes))
    print("Desvio padrão: ", np.std(medicoes))

    criticos = medicoes[medicoes> 80]

    print("Valores crítico: ", criticos)
    print("Total de alertas : ", criticos.size)

servidor = np.array([45,72,88,91,67])

analisar_servidor(servidor)

