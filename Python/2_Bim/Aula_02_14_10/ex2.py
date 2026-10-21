import numpy as np

def analise_temperatura(temperaturas):
    print("===Análise de Temperaturas===")
    print("Média:", np.mean(temperaturas))
    print("Mínimo:", np.min(temperaturas))
    print("Máximo:", np.max(temperaturas))
    temperaturas_criticas  = temperaturas[temperaturas > 75]
    for i in range(temperaturas.size):
        if temperaturas[i] > 75:
            print(f"Sensor {i} está crítico com {temperaturas[i]}°C.")

