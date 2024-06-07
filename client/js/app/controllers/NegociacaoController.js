class NegociacaoController {


    adiciona(event) {
        
        event.preventDefault();
        //alert('Chamei ação no controller')
        let inputData = document.querySelector('#data');
        let inputQuantidade = document.querySelector('#quantidade');
        let inputValor = document.querySelector('#valor');

        console.log(inputData.Value);
        console.log(inputQuantidade.Value);
        console.log(inputValor.Value);

    }

}