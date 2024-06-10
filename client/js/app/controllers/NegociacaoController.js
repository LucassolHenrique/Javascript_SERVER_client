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

        //2016-11-12
        let data = new Date(this._inputData.value.split('-')); //cria a - entre os elementos que voce quiser
        console.log(data);




    }

}