
alert('Jogo dos numero tem que acertar o numero');

let numeroSecreto = 29; //variavel

let chute = prompt('Escolha um número entre 1 e 30');

if(chute == numeroSecreto) {
        alert('acertou ' + numeroSecreto, 'ola' + chute);
} else {
        alert('Vocé errou');
}

