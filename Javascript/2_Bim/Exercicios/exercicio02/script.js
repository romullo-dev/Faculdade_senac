const $ = id => document.getElementById(id);

const mensagem = (texto, classe = 'erro') => {
  $('mensagem').textContent = texto;
  $('mensagem').className = classe;
};

const moeda = valor => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}

$('calcular').addEventListener('click', () => {
  const nome = $('produto').value.trim();
  const precoTexto = $('preco').value.trim();
  const quantidadeTexto = $('quantidade').value.trim();
  const preco = Number(precoTexto);
  const qtd = Number(quantidadeTexto);

  $('resultado').textContent = '';

  if (
    !nome
    || precoTexto === ''
    || quantidadeTexto === ''
    || !Number.isFinite(preco)
    || preco <= 0
    || !Number.isInteger(qtd)
    || qtd <= 0
  ) {
    return mensagem('Preencha os campos: preço positivo e quantidade inteira positiva.');
  }

  mensagem('Compra calculada.', 'sucesso');
  $('resultado').textContent = `Produto: ${nome} | Preço: ${moeda(preco)} | Quantidade: ${qtd} | Total: ${moeda(calcularTotal(preco, qtd))}`;
});
