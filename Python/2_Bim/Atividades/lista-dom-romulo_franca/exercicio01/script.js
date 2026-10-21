const campoNome = document.getElementById("nome");
const botaoApresentar = document.getElementById("botao-apresentar");
const paragrafoMensagem = document.querySelector("#mensagem");

function mostrarMensagem(texto, classe) {
    paragrafoMensagem.textContent = texto;
    paragrafoMensagem.className = classe;
}

function apresentarMensagem() {
    const nome = campoNome.value.trim();

    if (nome === "") {
        mostrarMensagem("Erro: informe o seu nome.", "erro");
        return;
    }

    mostrarMensagem(`Olá, ${nome}! Boas-vindas ao sistema.`, "sucesso");
}

botaoApresentar.addEventListener("click", apresentarMensagem);
