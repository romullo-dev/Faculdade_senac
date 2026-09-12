let nome_paciente = prompt("Digite o nome do paciente: ");
let idade_paciente = parseInt(prompt("Digite a idade do paciente: "));

let gravida = prompt("A paciente está grávida? (s/n)").toLowerCase();
let deficiência = prompt("A paciente possui alguma deficiência? (s/n)").toLowerCase();

if (idade_paciente < 0) {
    alert("Idade inválida. Por favor, digite uma idade positiva.");
} else {
    if (idade_paciente >= 60 || gravida === "s" || deficiência === "s") {
        test ="O paciente tem prioridade na fila de atendimento.";
    } else {
        test ="O paciente não tem prioridade na fila de atendimento.";
    }

    alert("Nome do paciente: " + nome_paciente+
        idade_paciente+ " anos" + "\n" + test
    );
}