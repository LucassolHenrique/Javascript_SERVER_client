class MensagemView extends View{
   //extends pega class do View

    constructor(elemento) {
        super(elemento);
    }
    template(model) {

        return model.texto ? `<p class="alert alert-info"> ${model.texto}</p>` : `<p></p>` ;
    } 

} //pagina para criar o texto na parte a cima falando que foi feito o import