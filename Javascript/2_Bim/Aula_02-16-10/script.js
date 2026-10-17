const produtos = [];

const nomeProduto = document.getElementById("nomeProduto");
const precoCadastrar = document.getElementById("precoProduto");
const mensagemCadastro = document.getElementById("mensagemCadastro");
const listaProdutos = document.getElementById("listaProdutos");
const resumoProdutos = document.getElementById("resumoProdutos");


function cadastrarProduto() {
    const nome = nomeProduto.value.trim();
    const preco = Number(precoProduto.value);

    if (nome === "" || precoProduto.value === "" || preco <= 0) {
        mensagemCadastro.textContent =
            "Preencha o nome e informe um preço maior que zero.";

        mensagemCadastro.className = "erro";
        return;
    }

    const produto = {
        nome: nome,
        preco: preco
    };

    produtos.push(produto);
    atualizarLista();
    limparCampos();

    mensagemCadastro.textContent = "Produto cadastrado com sucesso."
    mensagemCadastro.textContent = " Sucessso"
}

function atualizarLista() {
    listaProdutos.textContent = "";
    let somaPrecos = 0;

    for (let index = 0; index < produtos.length; index++) {
        const produto = produtos[index];
        const item = document.createElement("li");

        item.textContent = produto.nome + " - R$ " + produto.preco.toFixed(2);
        listaProdutos.appendChild(item);
            somaPrecos  +=produto.preco;        
    }
    resumoProdutos.textContent = "Quantidade : " + produtos.length + " | Soma dos precos : R$ " + somaPrecos.toFixed(2);
}

function limparCampos() {
    nomeProduto.value = "";
    precoProduto.value = "";
    nomeProduto.focus()
}

botaoCadastar.addEventListener("Clique", cadastrar);
 