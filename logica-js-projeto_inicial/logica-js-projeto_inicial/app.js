
let numeronegativo = 10;
let numeropositivo = 1;

while (numeronegativo != 0) {
        console.log('de 10 a 1 ' + numeronegativo);
        numeronegativo--;
}
console.log(`--------------------------------`);

while (numeropositivo != 11) {
        console.log('de 1 a 11 ' + numeropositivo);
        numeropositivo++;
}

let rand;

rand = prompt('Jogo dos numero tem que acertar o numero, escolha quantos numeros quer');

let numeroSecreto = parseInt(Math.random() * rand + 1); //variavel
console.log(numeroSecreto);
let chute;
let tentativas = 1;

let contador = 1;


while (chute != numeroSecreto) {
        chute = prompt(`Escolha um numero entre 1 e 100`);
        if (chute == numeroSecreto) {
                break;
        } else {
                if (chute > numeroSecreto) {
                        alert(`O número secreto é menor que ${chute}`);
                } else {
                        alert(`O número secreto é maior que ${chute}`);
                }
                tentativas++;
        }

}

//esta criando uma norma dentro do let palavraTentativa (caso tentativas maior que 1 algo acontece)
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        alert('o numero era ' + numeroSecreto + ' o total de ' + tentativas + ' numero de ' + palavraTentativa);


// if (tentativas > 1) {
//         alert('acertou ' + numeroSecreto + ' ola ' + chute + ' numero de tentativas ' + tentativas);
// } else {
//         alert('acertou ' + numeroSecreto + ' ola ' + chute + ' numero de tentativa ' + tentativas);
// }

