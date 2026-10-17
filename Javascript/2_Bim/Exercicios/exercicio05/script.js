const $ = id => document.getElementById(id);

const mensagem = (texto, classe = 'erro') => {
    $('mensagem').textContent = texto;
    $('mensagem').className = classe;
};

const moeda = valor => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const produtos = [];

function atualizar() {
    $('lista').textContent = '';

    let unidades = 0;
    let valor = 0;

    produtos.forEach(produto => {
        const subtotal = produto.preco * produto.quantidade;
        unidades += produto.quantidade;
        valor += subtotal;

        const li = document.createElement('li');
        li.textContent = `${produto.nome} | ${moeda(produto.preco)} | ${produto.quantidade} unidade(s) | Subtotal: ${moeda(subtotal)}`;
        $('lista').appendChild(li);
    });

    const produtosDiferentes = new Set(produtos.map(p => p.nome.toLocaleLowerCase('pt-BR'))).size;
    $('resumo').textContent = `Produtos diferentes: ${produtosDiferentes} | Unidades: ${unidades} | Valor: ${moeda(valor)}`;
}

$('adicionar').addEventListener('click', () => {
    const nome = $('nome').value.trim();
    const precoTexto = $('preco').value.trim();
    const quantidadeTexto = $('quantidade').value.trim();
    const preco = Number(precoTexto);
    const quantidade = Number(quantidadeTexto);

    if (
        !nome
        || precoTexto === ''
        || quantidadeTexto === ''
        || !Number.isFinite(preco)
        || preco <= 0
        || !Number.isInteger(quantidade)
        || quantidade <= 0
    ) {
        return mensagem('Informe nome, preço positivo e quantidade inteira positiva.');
    }

    produtos.push({ nome, preco, quantidade });
    atualizar();

    $('nome').value = '';
    $('preco').value = '';
    $('quantidade').value = '';
    $('nome').focus();
    mensagem('Produto cadastrado.', 'sucesso');
});
