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

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    ListaDeDestinos.splice(1, 1); //remove filme que não é recomendado para sua idade
} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    ListaDeDestinos.splice(1, 1);
} else {
    console.log("Não é maior que idade e não posso vender");
}

// depois de 2 virgulas exclui 1 item (2,1)
console.log(ListaDeDestinos[1], ListaDeDestinos[0]); //primeiro valor é 0 

//
// push coloca algo dentro da lista(array)
//
// splice tira algo de dentro da lista
//
