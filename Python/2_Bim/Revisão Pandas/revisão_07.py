
import pandas as pd

#função carregar dados

def carregar_dados(vendas):
    dados = pd.read_csv(vendas)
    return dados

#Preparar os dados
def preparar_dados(df):
    dados = df.copy()

    dados = dados.dropna(
        subset=["quantidade", "preco_unitario"]
    )
    
    dados["faturamento"] = (
        dados["quantidade"] * dados["preco_unitario"]
    )
    
    return dados

#Exibir indicadores
def exibir_indicadores(df):
    total = df["faturamento"].sum()
    media = df["faturamento"].mean()
    maior = df["faturamento"].max()

    print(f"Faturamento total: R$ {total:.2f}")
    print(f"Faturamento medio: R$ {media:.2f}")
    print(f"Maior venda : R$ {maior:.2f}")

#Salvar o resultado

def salvar_resultado(df, vendas):
    df.to_csv(vendas,index=False)

#programa principal
vendas = carregar_dados("vendas.csv")

vendas = preparar_dados(vendas)

exibir_indicadores(vendas)

salvar_resultado(
    vendas,
    "vendas_analisadas.csv"
)

