console.log("trabalhando com ");

const nome = "Lucas";
const sobrenome = "Sol";
const somaidade = idade+2;

console.log(nome + "" + sobrenome)
console.log(nome, sobrenome)
console.log(`class ${nome}`);



let idade = prompt("Digite sua idade:");

if (idade >= 18) {

  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}


let porcentagemDesconto = 0;
let quantidadeMilhas = 6000;

if(quantidadeMilhas >= 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
} else {
    if(quantidadeMilhas > 5000){
    porcentagemDesconto = porcentagemDesconto + 10;
}

}

console.log(porcentagemDesconto, quantidadeMilhas);