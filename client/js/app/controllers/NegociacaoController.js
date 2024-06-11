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
        
        event.preventDefault()

        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value 
        );
        

        console.log(negociacao);
        
        console.log(DateHelper.dataParaTexto(negociacao.data));
        
        



    }

}