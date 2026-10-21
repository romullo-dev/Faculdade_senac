const campoProduto = document.getElementById("produto");
const campoPreco = document.getElementById("preco");
const campoQuantidade = document.getElementById("quantidade");
const botaoCalcular = document.getElementById("botao-calcular");
const paragrafoMensagem = document.querySelector("#mensagem");
const areaResultado = document.querySelector("#resultado");

function calcularTotal(preco, quantidade) {
    return preco * quantidade;
}

function formatarMoeda(valor) {
    return "R$ " + valor.toFixed(2);
}

function mostrarMensagem(texto, classe) {
    paragrafoMensagem.textContent = texto;
    paragrafoMensagem.className = classe;
}

function adicionarLinha(rotulo, valor) {
    const linha = document.createElement("p");
    linha.textContent = `${rotulo}: ${valor}`;
    areaResultado.appendChild(linha);
}

function calcularCompra() {
    areaResultado.textContent = "";

    const produto = campoProduto.value.trim();
    const precoDigitado = campoPreco.value.trim();
    const quantidadeDigitada = campoQuantidade.value.trim();

    if (produto === "" || precoDigitado === "" || quantidadeDigitada === "") {
        mostrarMensagem("Erro: preencha todos os campos.", "erro");
        return;
    }

    const preco = Number(precoDigitado);
    const quantidade = Number(quantidadeDigitada);

    if (preco <= 0) {
        mostrarMensagem("Erro: o preço deve ser maior que zero.", "erro");
        return;
    }

    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        mostrarMensagem("Erro: a quantidade deve ser um número inteiro maior que zero.", "erro");
        return;
    }

    const total = calcularTotal(preco, quantidade);

    mostrarMensagem("Compra calculada com sucesso.", "sucesso");
    adicionarLinha("Produto", produto);
    adicionarLinha("Preço unitário", formatarMoeda(preco));
    adicionarLinha("Quantidade", quantidade);
    adicionarLinha("Total da compra", formatarMoeda(total));
}

botaoCalcular.addEventListener("click", calcularCompra);
