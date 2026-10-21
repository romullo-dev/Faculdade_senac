const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const campoQuantidade = document.getElementById("quantidade");
const botaoCadastrar = document.getElementById("botao-cadastrar");
const paragrafoMensagem = document.querySelector("#mensagem");
const totalProdutos = document.querySelector("#total-produtos");
const totalUnidades = document.querySelector("#total-unidades");
const valorEstoque = document.querySelector("#valor-estoque");
const listaProdutos = document.querySelector("#lista-produtos");

const produtos = [];

function calcularSubtotal(produto) {
    return produto.preco * produto.quantidade;
}

function formatarMoeda(valor) {
    return "R$ " + valor.toFixed(2);
}

function mostrarMensagem(texto, classe) {
    paragrafoMensagem.textContent = texto;
    paragrafoMensagem.className = classe;
}

function produtoJaCadastrado(nome) {
    return produtos.some(function (produto) {
        return produto.nome.toLowerCase() === nome.toLowerCase();
    });
}

function exibirProduto(produto) {
    const itemLista = document.createElement("li");
    itemLista.textContent = `${produto.nome} | Preço: ${formatarMoeda(produto.preco)} | ` +
        `Quantidade: ${produto.quantidade} | Subtotal: ${formatarMoeda(calcularSubtotal(produto))}`;
    listaProdutos.appendChild(itemLista);
}

function atualizarResumo() {
    let unidades = 0;
    let valorTotal = 0;

    for (const produto of produtos) {
        unidades += produto.quantidade;
        valorTotal += calcularSubtotal(produto);
    }

    totalProdutos.textContent = produtos.length;
    totalUnidades.textContent = unidades;
    valorEstoque.textContent = formatarMoeda(valorTotal);
}

function limparCampos() {
    campoNome.value = "";
    campoPreco.value = "";
    campoQuantidade.value = "";
    campoNome.focus();
}

function cadastrarProduto() {
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

    if (produtoJaCadastrado(nome)) {
        mostrarMensagem(`Erro: o produto ${nome} já está cadastrado.`, "erro");
        return;
    }

    const produto = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };

    produtos.push(produto);
    exibirProduto(produto);
    atualizarResumo();
    mostrarMensagem(`Produto ${nome} cadastrado com sucesso.`, "sucesso");
    limparCampos();
}

botaoCadastrar.addEventListener("click", cadastrarProduto);
