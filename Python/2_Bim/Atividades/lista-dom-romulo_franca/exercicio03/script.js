const campoEstudante = document.getElementById("estudante");
const campoNota1 = document.getElementById("nota1");
const campoNota2 = document.getElementById("nota2");
const botaoVerificar = document.getElementById("botao-verificar");
const areaResultado = document.querySelector("#resultado");

const classesSituacao = {
    "Aprovado": "aprovado",
    "Recuperação": "recuperacao",
    "Reprovado": "reprovado"
};

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function definirSituacao(media) {
    if (media >= 7) {
        return "Aprovado";
    }

    if (media >= 5) {
        return "Recuperação";
    }

    return "Reprovado";
}

function notaValida(nota) {
    return nota >= 0 && nota <= 10;
}

function mostrarErro(texto) {
    areaResultado.textContent = "";
    areaResultado.className = "";

    const paragrafoErro = document.createElement("p");
    paragrafoErro.textContent = texto;
    paragrafoErro.className = "erro";
    areaResultado.appendChild(paragrafoErro);
}

function adicionarLinha(rotulo, valor) {
    const linha = document.createElement("p");
    linha.textContent = `${rotulo}: ${valor}`;
    areaResultado.appendChild(linha);
}

function verificarSituacao() {
    const estudante = campoEstudante.value.trim();
    const nota1Digitada = campoNota1.value.trim();
    const nota2Digitada = campoNota2.value.trim();

    if (estudante === "" || nota1Digitada === "" || nota2Digitada === "") {
        mostrarErro("Erro: preencha todos os campos.");
        return;
    }

    const nota1 = Number(nota1Digitada);
    const nota2 = Number(nota2Digitada);

    if (!notaValida(nota1) || !notaValida(nota2)) {
        mostrarErro("Erro: as notas devem estar entre 0 e 10.");
        return;
    }

    const media = calcularMedia(nota1, nota2);
    const situacao = definirSituacao(media);

    areaResultado.textContent = "";
    areaResultado.className = classesSituacao[situacao];
    adicionarLinha("Estudante", estudante);
    adicionarLinha("Média", media.toFixed(2));
    adicionarLinha("Situação", situacao);
}

botaoVerificar.addEventListener("click", verificarSituacao);
