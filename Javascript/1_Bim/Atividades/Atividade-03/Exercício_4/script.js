let situacao = "";
let nome_estudante = prompt("Digite o nome do estudante: ");
let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let percentual_frequencia = parseFloat(prompt("Digite o percentual de frequência: "));

let media_final = (nota1 + nota2) / 2;

if(media_final < 5 || percentual_frequencia > 75) {
    situacao = "Reprovado";
} else if(media_final >= 5 && media_final < 7 || percentual_frequencia > 75) {
    situacao = "Recuperação";
} else if (percentual_frequencia < 75) {
    situacao = "Reprovado por falta";
} else {
    situacao = "Aprovado";
}