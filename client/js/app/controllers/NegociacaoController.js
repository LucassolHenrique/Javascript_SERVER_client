class NegociacaoController {

    constructor() {
        
        let $ =  document.querySelector.bind(document); 
        //tratando o querSelector como uma função
        
               //alert('Chamei ação no controller')
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        // esta sendo usado o constructor para deixar mais rapido o site
        // na hora de pesquisar o codigo
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes)
        this._mensagem.texto = 'Negociação adicionado com sucesso';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();

        //console.log(this._listaNegociacoes.negociacoes);
        //mostra os resultados das informaões das tabelas

    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value); 

    } 
    
    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();

    }

}