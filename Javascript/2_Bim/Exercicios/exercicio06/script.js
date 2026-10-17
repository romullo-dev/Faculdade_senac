const $ = id => document.getElementById(id);

const mensagem = (texto, classe = 'erro') => {
	$('mensagem').textContent = texto;
	$('mensagem').className = classe;
};

const moeda = valor => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const tarefas = [];

function atualizar() {
	$('lista').textContent = '';

	tarefas.forEach(t => {
		const li = document.createElement('li');
		li.textContent = `${t.descricao} — ${t.responsavel} — ${t.prioridade}`;
		li.className = ({ Baixa: 'baixa', Média: 'media', Alta: 'alta' })[t.prioridade];
		$('lista').appendChild(li);
	});

	const altaPrioridade = tarefas.filter(t => t.prioridade === 'Alta').length;
	$('resumo').textContent = `Tarefas: ${tarefas.length} | Alta prioridade: ${altaPrioridade}`;
}

$('adicionar').addEventListener('click', () => {
	const descricao = $('descricao').value.trim();
	const responsavel = $('responsavel').value.trim();
	const prioridade = $('prioridade').value;

	if (!descricao || !responsavel || !['Baixa', 'Média', 'Alta'].includes(prioridade)) {
		return mensagem('Preencha descrição, responsável e prioridade.');
	}

	tarefas.push({ descricao, responsavel, prioridade });
	atualizar();

	$('descricao').value = '';
	$('responsavel').value = '';
	$('prioridade').value = '';
	$('descricao').focus();
	mensagem('Tarefa cadastrada.', 'sucesso');
});
