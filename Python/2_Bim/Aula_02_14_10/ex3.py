import pandas as pd

dados = {
    "produto": ["Mouse", "Teclado", "Monitor"],
    "quantidade": [15, 5, 3],
    "preco": [80.0, 150.0, 900.0]
}

tabela = pd.DataFrame(dados)

print(tabela)