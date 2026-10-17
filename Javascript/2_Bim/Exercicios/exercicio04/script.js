const $ = id => document.getElementById(id);

const mensagem = (texto, classe = 'erro') => {
	$('mensagem').textContent = texto;
	$('mensagem').className = classe;
};

const moeda = valor => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const participantes = [];

$('adicionar').addEventListener('click', () => {
	const nome = $('nome').value.trim();

	if (!nome) {
		return mensagem('Informe o nome.');
	}

	const nomeNormalizado = nome.toLocaleLowerCase('pt-BR');
	const existe = participantes
		.map(p => p.toLocaleLowerCase('pt-BR'))
		.includes(nomeNormalizado);

	if (existe) {
		return mensagem('Participante já cadastrado.');
	}

	participantes.push(nome);

	const li = document.createElement('li');
	li.textContent = nome;
	$('lista').appendChild(li);

	$('contador').textContent = participantes.length;
	$('nome').value = '';
	$('nome').focus();
	mensagem('Participante adicionado.', 'sucesso');
});
