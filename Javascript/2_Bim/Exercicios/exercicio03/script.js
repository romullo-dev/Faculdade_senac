const $ = id => document.getElementById(id);

const mensagem = (texto, classe = 'erro') => {
	$('mensagem').textContent = texto;
	$('mensagem').className = classe;
};

const moeda = valor => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function calcularMedia(a, b) {
	return (a + b) / 2;
}

function definirSituacao(media) {
	return media >= 7 ? 'Aprovado' : media >= 5 ? 'Recuperação' : 'Reprovado';
}

$('verificar').addEventListener('click', () => {
	const nome = $('aluno').value.trim();
	const nota1Texto = $('nota1').value.trim();
	const nota2Texto = $('nota2').value.trim();
	const a = Number(nota1Texto);
	const b = Number(nota2Texto);

	$('resultado').textContent = '';
	$('resultado').className = '';

	if (
		!nome
		|| nota1Texto === ''
		|| nota2Texto === ''
		|| !Number.isFinite(a)
		|| !Number.isFinite(b)
		|| a < 0
		|| a > 10
		|| b < 0
		|| b > 10
	) {
		return mensagem('Informe nome e duas notas entre 0 e 10.');
	}

	const media = calcularMedia(a, b);
	const situacao = definirSituacao(media);

	$('resultado').textContent = `${nome} — Média: ${media.toFixed(2)} — ${situacao}`;
	$('resultado').className = ({ Aprovado: 'aprovado', Recuperação: 'recuperacao', Reprovado: 'reprovado' })[situacao];
	mensagem('Situação verificada.', 'sucesso');
});
