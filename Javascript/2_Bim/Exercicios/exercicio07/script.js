const $ = id => document.getElementById(id);

const mensagem = (texto, classe = 'erro') => {
	$('mensagem').textContent = texto;
	$('mensagem').className = classe;
};

const moeda = valor => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const itens = [];

function atualizar() {
	$('lista').textContent = '';

	let unidades = 0;
	let total = 0;

	itens.forEach(item => {
		const subtotal = item.preco * item.quantidade;
		unidades += item.quantidade;
		total += subtotal;

		const li = document.createElement('li');
		li.textContent = `${item.nome} | ${item.quantidade} x ${moeda(item.preco)} | Subtotal: ${moeda(subtotal)}`;
		$('lista').appendChild(li);
	});

	$('resumo').textContent = itens.length
		? `Unidades: ${unidades} | Total: ${moeda(total)}`
		: 'Pedido vazio.';
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
		return mensagem('Informe item, preço positivo e quantidade inteira positiva.');
	}

	itens.push({ nome, preco, quantidade });
	atualizar();

	$('nome').value = '';
	$('preco').value = '';
	$('quantidade').value = '';
	mensagem('Item adicionado.', 'sucesso');
});

$('limpar').addEventListener('click', () => {
	if (!itens.length) {
		return mensagem('Não há itens para limpar.');
	}

	itens.length = 0;
	atualizar();
	mensagem('Pedido limpo.', 'sucesso');
});

atualizar();
