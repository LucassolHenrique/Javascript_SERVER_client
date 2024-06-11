class NegociacaoController {

    constructor() {
        
        let $ =  document.querySelector.bind(document); 
        //tratando o querSelector como uma função
        
               //alert('Chamei ação no controller')
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        // esta sendo usado o constructor para deixar mais rapido o site
        // na hora de pesquisar o codigo
    }

    adiciona(event) {
        
        event.preventDefault();

        //2016-11-12 fazendo o ano com split e Date e map
        let data = new Date(...
//os ... fazem que o numero não começe em 0, 1, 2 e sim 1, 2, 3
            this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2) 
                //arrow function nome disso =>
        );
         //cria a - entre os elementos que voce quiser
        
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
            
        );

        console.log(negociacao);


    }

}