const $ = id => document.getElementById(id);

const mensagem = (texto, classe = 'erro') => {
    $('mensagem').textContent = texto;
    $('mensagem').className = classe;
};

const moeda = valor => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const pacientes = [];

function atualizar() {
    $('lista').textContent = '';

    pacientes.forEach((paciente, indice) => {
        const li = document.createElement('li');
        const info = document.createElement('span');

        info.textContent = `${paciente.nome} — ${paciente.idade} anos — ${paciente.tipo} `;

        if (paciente.tipo === 'Prioritário') {
            info.className = 'prioritario';
        }

        const botao = document.createElement('button');
        botao.textContent = 'Remover';
        botao.className = 'remover';
        botao.addEventListener('click', () => {
            pacientes.splice(indice, 1);
            atualizar();
            mensagem('Paciente removido.', 'sucesso');
        });

        li.appendChild(info);
        li.appendChild(botao);
        $('lista').appendChild(li);
    });

    const prioritarios = pacientes.filter(p => p.tipo === 'Prioritário').length;
    $('resumo').textContent = pacientes.length
        ? `Pacientes: ${pacientes.length} | Prioritários: ${prioritarios}`
        : 'Fila vazia. Pacientes: 0 | Prioritários: 0';
}

$('adicionar').addEventListener('click', () => {
    const nome = $('nome').value.trim();
    const idadeTexto = $('idade').value.trim();
    const idade = Number(idadeTexto);
    const tipo = $('tipo').value;

    if (!nome || idadeTexto === '' || !Number.isInteger(idade) || idade <= 0 || !['Normal', 'Prioritário'].includes(tipo)) {
        return mensagem('Informe nome, idade inteira positiva e tipo de atendimento.');
    }

    pacientes.push({ nome, idade, tipo: idade >= 60 ? 'Prioritário' : tipo });
    atualizar();

    $('nome').value = '';
    $('idade').value = '';
    $('tipo').value = '';
    $('nome').focus();
    mensagem('Paciente cadastrado.', 'sucesso');
});

atualizar();
