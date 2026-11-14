const produtos = [];

const produto1 = {
    nome: "Mouse",
    preco: 50
};

const produto2 = {
    nome: "Teclado",
    preco: 150
};

produtos.push(produto1);
produtos.push(produto2);

for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];

    console.log(produto.nome);
}