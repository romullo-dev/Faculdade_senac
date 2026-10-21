const campoDescricao = document.getElementById("descricao");
const campoResponsavel = document.getElementById("responsavel");
const campoPrioridade = document.getElementById("prioridade");
const botaoCadastrar = document.getElementById("botao-cadastrar");
const paragrafoMensagem = document.querySelector("#mensagem");
const totalTarefas = document.querySelector("#total-tarefas");
const totalAlta = document.querySelector("#total-alta");
const listaTarefas = document.querySelector("#lista-tarefas");

const tarefas = [];

const classesPrioridade = {
    "Baixa": "prioridade-baixa",
    "Média": "prioridade-media",
    "Alta": "prioridade-alta"
};

function mostrarMensagem(texto, classe) {
    paragrafoMensagem.textContent = texto;
    paragrafoMensagem.className = classe;
}

function contarTarefasAlta() {
    return tarefas.filter(function (tarefa) {
        return tarefa.prioridade === "Alta";
    }).length;
}

function exibirTarefa(tarefa) {
    const itemLista = document.createElement("li");
    itemLista.textContent = `${tarefa.descricao} | Responsável: ${tarefa.responsavel} | ` +
        `Prioridade: ${tarefa.prioridade}`;
    itemLista.className = classesPrioridade[tarefa.prioridade];
    listaTarefas.appendChild(itemLista);
}

function atualizarResumo() {
    totalTarefas.textContent = tarefas.length;
    totalAlta.textContent = contarTarefasAlta();
}

function limparFormulario() {
    campoDescricao.value = "";
    campoResponsavel.value = "";
    campoPrioridade.value = "";
    campoDescricao.focus();
}

function cadastrarTarefa() {
    const descricao = campoDescricao.value.trim();
    const responsavel = campoResponsavel.value.trim();
    const prioridade = campoPrioridade.value;

    if (descricao === "" || responsavel === "") {
        mostrarMensagem("Erro: preencha a descrição e o responsável.", "erro");
        return;
    }

    if (prioridade === "") {
        mostrarMensagem("Erro: selecione a prioridade da tarefa.", "erro");
        return;
    }

    const tarefa = {
        descricao: descricao,
        responsavel: responsavel,
        prioridade: prioridade
    };

    tarefas.push(tarefa);
    exibirTarefa(tarefa);
    atualizarResumo();
    mostrarMensagem("Tarefa cadastrada com sucesso.", "sucesso");
    limparFormulario();
}

botaoCadastrar.addEventListener("click", cadastrarTarefa);
