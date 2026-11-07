import pandas as pd

#Carregamento e inspeção
def carregar_dados(vendas):
    dados = pd.read_excel(vendas)
    return dados

def preparar_dados(df):
    dados = df.copy()
    #Limpeza dos dados
    dados = dados.dropna(
        subset=["quantidade", "preco_unitario"]
    )
    dados["cidade"] = dados["cidade"].fillna(
        "Não informado!"
    )
    #Cálculo de faturamento
    dados["faturamento"] = (
        dados["quantidade"] * dados["preco_unitario"]
    )
    return dados

#Análise comercial
def exibir_indicadores(df):
    total = df["faturamento"].sum()
    media = df["faturamento"].mean()
    maior = df["faturamento"].max()
    print(f"Faturamento total: R$ {total:.2f}")
    print(f"Faturamento medio: R$ {media:.2f}")
    print(f"Maior venda : R$ {maior:.2f}")

def salvar_resultado(df, arquivo):
    df.to_excel(arquivo, index=False)
    print(f"Arquivo {arquivo} salvo com sucesso!")

vendas = carregar_dados("vendas.xlsx")

vendas = preparar_dados(vendas)

exibir_indicadores(vendas)

salvar_resultado(
    vendas,
    "vendas_analisadas.xlsx"
)