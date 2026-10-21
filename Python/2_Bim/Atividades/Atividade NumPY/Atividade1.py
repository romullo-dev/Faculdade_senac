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

# Parte 1: Estrutura da matriz
def exibir_estrutura(matriz):
    print("=== PARTE 1: ESTRUTURA DA MATRIZ ===")
    print("Quantidade de dimensões:", matriz.ndim)
    print("Formato da matriz:", matriz.shape)
    print("Quantidade total de elementos:", matriz.size)
    print("Tipo dos elementos:", matriz.dtype)
    print("Quantidade de bytes por elemento:", matriz.itemsize)
    print("Quantidade total de bytes ocupada:", matriz.nbytes)

    print("\n=== Explicação do formato ===")
    print(f"O formato {matriz.shape} indica {matriz.shape[0]} linhas (servidores) "
          f"e {matriz.shape[1]} colunas (horários de medição).")
    print(f"Ao todo são {matriz.size} medições, cada uma ocupando {matriz.itemsize} "
          f"bytes, totalizando {matriz.nbytes} bytes.")

exibir_estrutura(matriz)
