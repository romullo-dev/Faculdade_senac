let nome_cliente = prompt("Digite o nome do cliente: ");
let servico = prompt("Digite o serviço desejado: (numero 1 Instalação eletrica, numero 2 Manutenção Hidraulica, numero 3 configuração de internet numero 4 visita técnica) ");
let valor_servico = 0;

switch (servico) {
    case "1":
        valor_servico = 150;
        break;
    case "2":
        valor_servico = 120;
        break;
    case "3":
        valor_servico = 100;
        break;
    case "4":
        valor_servico = 80;
        break;
    default:
        alert("Serviço inválido. Por favor, escolha um serviço válido.");
}

servico_urgente = prompt("O serviço é urgente? (sim ou não)").toLowerCase();
if (servico_urgente === "sim") {
    valor_servico += valor_servico * 0.30; 
} else if (servico_urgente === "não") {
    valor_servico = valor_servico;
}

alert("Nome do cliente: " + nome_cliente);
alert("Serviço escolhido: " + servico);
alert("Valor total do serviço: R$ " + valor_servico.toFixed(2));    