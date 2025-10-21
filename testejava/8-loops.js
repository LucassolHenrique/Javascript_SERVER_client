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
let temPassagemComprada = true;
const destino = "Rio de Janeiro";

const podeComprar = idadeComprador >= 18 || estaAcompanhada >= true;

let contador = 0;
let destinoExiste = false;
while(contador < 3) {

    if(ListaDeDestinos[contador] == destino){ 
    //compara com a class destino que só tem o Rio de Janeiro
        destinoExiste = true;
        break;
    }
    contador +=1;
}


console.log("Destino exite: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");

}else{
    console.log("Desculpe tivemos um erro!");
}
//cont começa com 0 vai parar quando maior que 3 e cont ++ sempre aumenta de 1 em 1
for(let cont = 0 ; cont <3 ; cont++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;

        }
}

//cont ++ soma +1 ao contador sempre