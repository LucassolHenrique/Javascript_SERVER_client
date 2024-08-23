console.log(`Trabalhando com listas`);

// modo ruim de fazer quando são muitos itens
// const Salvador = `asas`;
// const Sãopaulo = `asas`;
// const Riodejaneiro = `asas`;

// modo list que tem muitos itens

const ListaDeDestinos = new Array(
    `Salvador`, //0
    `São Paulo`, //1
    `Rio de Janeiro` //2
);

console.log("Destinos Possiveis:");
console.log(ListaDeDestinos);


//===============================================================================

//qual idade do comprador
const idadeComprador = 21;
//ele esta acompanhado?
const estaAcompanhada = true;
const temPassagemComprada = true;

if (idadeComprador >= 18 || estaAcompanhada >= true) {

    console.log("Comprador maior de idade");
    ListaDeDestinos.splice(2, 1); //remove filme que não é recomendado para sua idade

} else {
    console.log("Não é maior que idade e não posso vender");
}


console.log("Embarque: \n \n")


if(idadeComprador > 18 && temPassagemComprada ) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode enbarcar");
}

// depois de 2 virgulas exclui 1 item (2,1)
console.log(ListaDeDestinos[1], ListaDeDestinos[0]); //primeiro valor é 0 

//
// push coloca algo dentro da lista(array)
//
// splice tira algo de dentro da lista
//
