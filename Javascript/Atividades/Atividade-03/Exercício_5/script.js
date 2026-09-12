let tipo_veiculo = prompt("Digite o tipo de veículo (carro, moto ou caminhão): ").toLowerCase();
let quantidade_hrs = parseFloat(prompt("Digite a quantidade de horas de estacionamento: "));

if (quantidade_hrs <= 0) {
    alert("Quantidade de horas inválida. Por favor, digite uma quantidade positiva.");
} else {
    let valor_total = 0;

    switch (tipo_veiculo) {
        case "carro":
            valor_total = quantidade_hrs * 8;
            break;
        case "moto":
            valor_total = quantidade_hrs * 4;
            break;
        case "utilitario":
            valor_total = quantidade_hrs * 12;
            break;
        default:
            alert("Tipo de veículo inválido. Por favor, digite carro, moto ou caminhão.");
            break;
    }

    valor_total = quantidade_hrs * valor_total;

    if (quantidade_hrs > 8) {
        valor_total *= 0.85; // Aplica desconto de 15% para estacionamento acima de 8 horas
    }

    alert("Tipo de veículo: " + tipo_veiculo);
    alert("Quantidade de horas: " + quantidade_hrs);
    alert("Valor total do estacionamento: R$ " + valor_total.toFixed(2));
}