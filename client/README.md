# Javascript_SERVER_client
# Anotações_Javascript
 fazendo um servidor usando javascript para hospedar informações fornecidas no site

dia 05/06 
gastei mais de 30 minutos vendo código e tentando entender pra ver que uma letra estava em maiuculos

Document.querySelector('.form') (esta selecionando a class form no css e html) 

.addEventListener('submit', function(event) { ... }) (add um evento ao elemento selecionado no caso o submit, o function está criando criando uma função de evento que quando acontece o submit ele ativa) 

 var campos =  

 

[ 
    document.querySelector('#data'),  campos 0 

 document.querySelector('#quantidade'),  campos 1 

 document.querySelector('#valor') campos 2]; 

 
console.log(campos); 
 

 
Var campos: (criei uma variavel campos que vai armazer as informações que forem colocadas em lugares no html que tiverem data, quantidade e valor) 


Document.querySelector('#data), (ele ve o html e puxa o lugar que estiver o id) 



 dia 06/06

queria dizer um valor em uma quantidade para sempre sem qualquer tipo de pessoa conseguir mexer 

Object.freeze(n1); //o freeze faz o valor nunca ser alterado
       ** // n1.quantidade = 10; sentando uma quantidade na quantidade
        // n1.valor = 200.50; colocando um valor pronto para o valor

        // var n2 = new Negociacao(); //variavel criada com nome de n2 
        // console.log(n2); //mostra no console
        // n2.quantidade = 20;**


                console.log(n1.quantidade); //por ser um metodo só chamar a quantidade dentro do n1
        //Object.freeze(n1); //o freeze não permite o valor ser alterado
        console.log(n1.data);   //por ser um metodo só chamar a quantidade dentro do n1
        console.log(n1.valor);  //por ser um metodo só chamar a quantidade dentro do n1
        console.log(n1.volume); //por ser um metodo só chamar a quantidade dentro do n1
    

Dia 07/06 

usar let em vez de var é melhor no sentido de segurança, 
quando o let cria uma variavel ela apenas vai existir dentro do let em que a variavel foi criada, não sendo possivel chamar ela de outros lugar

        for(let i = 1; i <= 100; i++) { //loop for conta de 1 ao 100
            console.log(i)
        }

        alert(i) //variaveis tem escopo de bloco

o alert não vai funcionar por não existir a variavel i 

        for(let i = 1; i <= 100; i++) { //loop for conta de 1 ao 100
            console.log(i)
            alert(i) //variaveis tem escopo de bloco
        }
com o alert dentro do for(let) agora sim vai funcionar chamando a função e seu resultado ou informação armazenada. 
    
    estamos fazendo um loop nesta parte conta de 1 ao 100 
    o i++ é oq faz ser de 1 a 1 caso colocar i++, i++ vai 
    ser de 2 em 2

    for(let i = 1; i <= 100; i++)
    resultado 1 2 3 4 5 6 7 8 9... 100
    for(let i = 1; i <= 100; i++, i++)
    resultado 2 4 6 8 10 12 .... 99


    class Pessoa {

    constructor(nome, sobrenome) {

        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    obtemNomeCompleto() {
         return this.nome + ' ' + this.sobrenome;
    }
}

var pessoa = new Pessoa('Flávio', 'Almeida');
console.log('Nome completo: ' + pessoa.obtemNomeCompleto());

<!-- // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
dia 10/06


    // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );

finalizado a controler do site, aonde conseguimos as informações que são colocadas no sistema.

controler cria uma Negociação, 



coisas a pesquisar corretamente oq faz

spli
bind
replace
arrow function