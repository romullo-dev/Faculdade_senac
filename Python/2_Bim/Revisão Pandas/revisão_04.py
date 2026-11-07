#DataFrame e Series

import pandas as pd

vendas = pd.read_csv("vendas.csv")

tabela = pd.DataFrame(vendas)

filtro = tabela[(vendas["quantidade"]>=8)&(vendas["cidade"]=="Brasília")]

print(filtro)
