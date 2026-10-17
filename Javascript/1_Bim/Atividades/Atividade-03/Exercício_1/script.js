let taxa_embalagem = 0; 

let nome_lnche = prompt("Digite o nome do lanche: ");
let preco_lnche = parseFloat(prompt("Digite o preço do lanche: "));
let qtd_lnche = parseInt(prompt("Digite a quantidade do lanche: "));

if (qtd_lnche < 3) {
    taxa_embalagem = 2.5;
} else{
    taxa_embalagem = 0;
}

const total_lanche = preco_lnche * qtd_lnche + taxa_embalagem;

alert("Nome do lanche: " + nome_lnche);
alert("Preço do lanche: " + preco_lnche);
alert("Quantidade do lanche: " + qtd_lnche);
alert("Taxa de embalagem: " + taxa_embalagem);
alert("Total do lanche: " + total_lanche);

