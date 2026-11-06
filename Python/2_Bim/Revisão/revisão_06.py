
import pandas as pd

vendas = pd.read_csv("vendas.csv")

vendas_quant = vendas.dropna(
    subset=["quantidade","preco_unitario"]
).copy()

vendas_quant ["faturamento"] = (
    vendas_quant["quantidade"] * vendas_quant["preco_unitario"]
) 

print(vendas_quant)

print("**************************************")

faturamento_categoria = (
    vendas_quant.groupby("categoria")["faturamento"].sum()
)

print(faturamento_categoria)