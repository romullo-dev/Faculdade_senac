#DataFrame e Series

import pandas as pd

dados = {
    'produto' : ["mouse", "Teclado", "Monitor"],
    'quantidade': [10,15,3],
    "preco_unitario" : [80.0,150.0,900.0]
}

produtos = dados["produto"]

tabela = pd.DataFrame(dados)

#print(tabela)

print(produtos)

#Criando nossa primeira coluna calculada

tabela["faturamento"] = (
    tabela["quantidade"] * tabela["preco_unitario"]
)

print(tabela)
