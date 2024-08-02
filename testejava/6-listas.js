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

ListaDeDestinos.push(`Curitiba`); //coloca curitiba dentro da lista

console.log("Destinos Possiveis:");

console.log(ListaDeDestinos);

ListaDeDestinos.splice(2,1); // depois de 2 virgulas exclui 1 item (2,1)

console.log(ListaDeDestinos[1], ListaDeDestinos[0]);//primeiro valor é 0 


//
// push coloca algo dentro da lista(array)
//
// splice tira algo de dentro da lista
//
