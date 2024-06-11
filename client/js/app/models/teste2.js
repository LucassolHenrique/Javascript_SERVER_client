
let lista1 = ['laranja', 'banana', 'mamão'];
let lista2 = ['caju', 'tangerina', 'abacaxi'];

let lista3 = [lista1 + lista2];

lista1.push(...lista2);

console.log(lista3);
console.log(lista1);
//["banana", "laranja", "mamão", "caju", "tangerina", "abacaxi"]

//calulo de numeros impares ou não
let numeros = [3,2,11,20,8,7];
let novosNumeros = [];

numeros.forEach(item => {

    if(item % 2  != 0) {
        novosNumeros.push(item * 2);
    } else {
        novosNumeros.push(item);
    }
});
console.log(novosNumeros);

class Aluno {

    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {

    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}

let avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];


let aprovados = avaliacoes
    .filter(function(prova) { return prova.nota >= 7; })
    .map(function(prova) { return prova.aluno.nome;});

console.log(aprovados);

console.log(avaliacoes);