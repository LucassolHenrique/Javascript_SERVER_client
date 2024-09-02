
// selecionando que a h1 vai ganhar algum valor
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Adivinha o número';


// selecionando que o p vai ter esta mensagem dentro dele
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//esta função vai servir para não precisar fazer da forma comentada a cima
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//a função foi feito para pegar todo tag e transformar em oq voce quiser como a baixo


exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


//onclick no botão
function verificarChute() {
    console.log("botão esta sendo clickado");
}
