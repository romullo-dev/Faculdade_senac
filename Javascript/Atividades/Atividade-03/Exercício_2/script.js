let nome_passageiro = prompt("Digite o nome do passageiro: ");
let distancia_viagem = parseFloat(prompt("Digite a distância da viagem em km: "));
let tatifa_inicial = 6;

let valor_total = distancia_viagem * tatifa_inicial;
if (distancia_viagem <= 0) {
    alert("Distância inválida. Por favor, digite uma distância positiva.");
} else {
    if (distancia_viagem > 20) {
        let taxa_viagem_6 = 2.8;
        valor_total_bruto = valor_total + taxa_viagem_6;
    }
    else {
        let taxa_viagem_50 = valor_total - (valor_total * 0.10);
        valor_total_bruto = taxa_viagem_50;
    }

    alert("Nome do passageiro: " + nome_passageiro);
    alert("Distância da viagem: " + distancia_viagem + " km");
    alert("Valor total da viagem: R$ " + valor_total_bruto.toFixed(2));

}




