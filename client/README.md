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