
import pandas as pd

dados = {
    "produto": [
        "Mouse", "Teclado", "Monitor",
        "Webcam", "Notebook", "Mouse"
    ],
    "categoria": [
        "Periféricos", "Periféricos", "Monitores",
        "Periféricos", "Computadores", "Periféricos"
    ],
    "quantidade": [10, 5, 3, None, 2, 15],
    "preco_unitario": [80, 150, 900, 200, None, 80],
    "vendedor": [
        "Ana", "Bruno", "Caio",
        "Ana", "Caio", "Bruno"
    ],
    "cidade": [
        "Brasília", "Ceilândia", "Taguatinga",
        None, "Brasília", "Ceilândia"
    ]
}

#dentificando valores ausentes com isna()
vendas = pd.DataFrame(dados)

print(vendas.isna())

#quantidade valores ausentes com isna()

print(vendas.isna().sum())

#Preenchendo valores ausentes com fillna()
vendas["cidade"] = vendas["cidade"].fillna(
    "Não informado!"
)

#Removendo registros incompletos com dropna()
vendas_validas = vendas.dropna(
    subset=["quantidade","preco_unitario"]
)

#Criando a coluna de faturamento
vendas_validas = vendas.dropna(
    subset=["quantidade","preco_unitario"]
).copy()

vendas_validas["faturamento"] = (
    vendas_validas["quantidade"] * vendas_validas["preco_unitario"]
)

print (vendas_validas)

print("************************************")

print(vendas)

print("************************************")

#Criando a coluna de faturamento
faturamento_categoria = (
    vendas_validas.groupby("categoria")["faturamento"].sum()
)

print(faturamento_categoria)