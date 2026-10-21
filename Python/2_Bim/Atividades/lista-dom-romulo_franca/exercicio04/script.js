const campoParticipante = document.getElementById("participante");
const botaoAdicionar = document.getElementById("botao-adicionar");
const paragrafoMensagem = document.querySelector("#mensagem");
const contadorParticipantes = document.querySelector("#contador");
const listaParticipantes = document.querySelector("#lista-participantes");

const participantes = [];

function mostrarMensagem(texto, classe) {
    paragrafoMensagem.textContent = texto;
    paragrafoMensagem.className = classe;
}

function participanteJaCadastrado(nome) {
    const nomesMinusculos = participantes.map(function (participante) {
        return participante.toLowerCase();
    });

    return nomesMinusculos.includes(nome.toLowerCase());
}

function exibirParticipante(nome) {
    const itemLista = document.createElement("li");
    itemLista.textContent = nome;
    listaParticipantes.appendChild(itemLista);
}

function prepararNovoCadastro() {
    campoParticipante.value = "";
    campoParticipante.focus();
}

function adicionarParticipante() {
    const nome = campoParticipante.value.trim();

    if (nome === "") {
        mostrarMensagem("Erro: informe o nome do participante.", "erro");
        campoParticipante.focus();
        return;
    }

    if (participanteJaCadastrado(nome)) {
        mostrarMensagem(`Erro: ${nome} já está na lista.`, "erro");
        campoParticipante.focus();
        return;
    }

    participantes.push(nome);
    exibirParticipante(nome);
    contadorParticipantes.textContent = participantes.length;
    mostrarMensagem(`${nome} foi adicionado(a) com sucesso.`, "sucesso");
    prepararNovoCadastro();
}

botaoAdicionar.addEventListener("click", adicionarParticipante);
