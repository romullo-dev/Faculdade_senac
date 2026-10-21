const campoNome = document.getElementById("nome");
const campoIdade = document.getElementById("idade");
const campoTipo = document.getElementById("tipo");
const botaoCadastrar = document.getElementById("botao-cadastrar");
const paragrafoMensagem = document.querySelector("#mensagem");
const totalPacientes = document.querySelector("#total-pacientes");
const totalPrioritarios = document.querySelector("#total-prioritarios");
const fila = document.querySelector("#fila");

const pacientes = [];

function mostrarMensagem(texto, classe) {
    paragrafoMensagem.textContent = texto;
    paragrafoMensagem.className = classe;
}

function definirTipo(idade, tipoEscolhido) {
    if (idade >= 60) {
        return "Prioritário";
    }

    return tipoEscolhido;
}

function contarPrioritarios() {
    return pacientes.filter(function (paciente) {
        return paciente.tipo === "Prioritário";
    }).length;
}

function exibirFilaVazia() {
    const itemVazio = document.createElement("li");
    itemVazio.textContent = "A fila de atendimento está vazia.";
    itemVazio.className = "vazio";
    fila.appendChild(itemVazio);
}

function exibirPaciente(paciente, posicao) {
    const itemLista = document.createElement("li");
    itemLista.className = paciente.tipo === "Prioritário" ? "prioritario" : "normal";

    const dadosPaciente = document.createElement("span");
    dadosPaciente.textContent = `${paciente.nome} | ${paciente.idade} anos | ${paciente.tipo}`;

    const botaoRemover = document.createElement("button");
    botaoRemover.type = "button";
    botaoRemover.textContent = "Remover";
    botaoRemover.className = "botao-remover";
    botaoRemover.addEventListener("click", function () {
        removerPaciente(posicao);
    });

    itemLista.appendChild(dadosPaciente);
    itemLista.appendChild(botaoRemover);
    fila.appendChild(itemLista);
}

function reconstruirFila() {
    fila.textContent = "";

    pacientes.forEach(exibirPaciente);

    if (pacientes.length === 0) {
        exibirFilaVazia();
    }

    totalPacientes.textContent = pacientes.length;
    totalPrioritarios.textContent = contarPrioritarios();
}

function limparCampos() {
    campoNome.value = "";
    campoIdade.value = "";
    campoTipo.value = "Normal";
    campoNome.focus();
}

function cadastrarPaciente() {
    const nome = campoNome.value.trim();
    const idadeDigitada = campoIdade.value.trim();

    if (nome === "") {
        mostrarMensagem("Erro: informe o nome do paciente.", "erro");
        return;
    }

    const idade = Number(idadeDigitada);

    if (idadeDigitada === "" || !Number.isInteger(idade) || idade <= 0) {
        mostrarMensagem("Erro: a idade deve ser um número inteiro maior que zero.", "erro");
        return;
    }

    const paciente = {
        nome: nome,
        idade: idade,
        tipo: definirTipo(idade, campoTipo.value)
    };

    pacientes.push(paciente);
    reconstruirFila();

    if (idade >= 60) {
        mostrarMensagem(`${nome} cadastrado(a) como prioritário(a) por ter 60 anos ou mais.`, "sucesso");
    } else {
        mostrarMensagem(`${nome} cadastrado(a) na fila.`, "sucesso");
    }

    limparCampos();
}

function removerPaciente(posicao) {
    const pacienteRemovido = pacientes[posicao];

    pacientes.splice(posicao, 1);
    reconstruirFila();
    mostrarMensagem(`${pacienteRemovido.nome} foi removido(a) da fila.`, "sucesso");
}

botaoCadastrar.addEventListener("click", cadastrarPaciente);

reconstruirFila();
