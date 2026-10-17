const $ = id => document.getElementById(id);

const mensagem = (texto, classe = 'erro') => {
	$('mensagem').textContent = texto;
	$('mensagem').className = classe;
};

const moeda = valor => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

$('apresentar').addEventListener('click', () => {
	const nome = $('nome').value.trim();

	if (!nome) {
		return mensagem('Informe seu nome.');
	}

	mensagem(`Olá, ${nome}! Boas-vindas ao sistema.`, 'sucesso');
});
