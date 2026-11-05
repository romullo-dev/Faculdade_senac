#DataFrame e Series

import pandas as pd

dados =  {
    "aluno" : ['Romulo Franca', "Santos", "Franca", "Estevao"],
    "nota_1": [10,5,4,7],
    "nota_2": [10,9,10,5]
}

tabela = pd.DataFrame(dados)

tabela["medias"]=(
    (tabela["nota_1"] + tabela["nota_2"])/2
)

print(tabela)