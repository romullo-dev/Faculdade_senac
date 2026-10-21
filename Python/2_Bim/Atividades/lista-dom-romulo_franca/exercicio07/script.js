const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const campoQuantidade = document.getElementById("quantidade");
const botaoAdicionar = document.getElementById("botao-adicionar");
const botaoLimpar = document.getElementById("botao-limpar");
const paragrafoMensagem = document.querySelector("#mensagem");
const totalUnidades = document.querySelector("#total-unidades");
const valorPedido = document.querySelector("#valor-pedido");
const listaItens = document.querySelector("#lista-itens");

const itens = [];

function calcularSubtotal(item) {
    return item.preco * item.quantidade;
}

function formatarMoeda(valor) {
    return "R$ " + valor.toFixed(2);
}

function mostrarMensagem(texto, classe) {
    paragrafoMensagem.textContent = texto;
    paragrafoMensagem.className = classe;
}

function exibirPedidoVazio() {
    const itemVazio = document.createElement("li");
    itemVazio.textContent = "O pedido está vazio.";
    itemVazio.className = "vazio";
    listaItens.appendChild(itemVazio);
}

function exibirItem(item) {
    const itemLista = document.createElement("li");
    itemLista.textContent = `${item.nome} | Preço: ${formatarMoeda(item.preco)} | ` +
        `Quantidade: ${item.quantidade} | Subtotal: ${formatarMoeda(calcularSubtotal(item))}`;
    listaItens.appendChild(itemLista);
}

function atualizarPedido() {
    listaItens.textContent = "";

    let unidades = 0;
    let valorTotal = 0;

    for (const item of itens) {
        exibirItem(item);
        unidades += item.quantidade;
        valorTotal += calcularSubtotal(item);
    }

    if (itens.length === 0) {
        exibirPedidoVazio();
    }

    totalUnidades.textContent = unidades;
    valorPedido.textContent = formatarMoeda(valorTotal);
}

function limparCampos() {
    campoNome.value = "";
    campoPreco.value = "";
    campoQuantidade.value = "";
    campoNome.focus();
}

function adicionarItem() {
    const nome = campoNome.value.trim();
    const precoDigitado = campoPreco.value.trim();
    const quantidadeDigitada = campoQuantidade.value.trim();

    if (nome === "" || precoDigitado === "" || quantidadeDigitada === "") {
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

    const item = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };

    itens.push(item);
    atualizarPedido();
    mostrarMensagem(`${nome} adicionado ao pedido.`, "sucesso");
    limparCampos();
}

function limparPedido() {
    if (itens.length === 0) {
        mostrarMensagem("Erro: não há itens no pedido para limpar.", "erro");
        return;
    }

    itens.length = 0;
    atualizarPedido();
    mostrarMensagem("Pedido limpo com sucesso.", "sucesso");
}

botaoAdicionar.addEventListener("click", adicionarItem);
botaoLimpar.addEventListener("click", limparPedido);

atualizarPedido();
