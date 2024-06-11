class DateHelper {
    //text 1 data
    
    
    constructor() {

        throw new Error('esta classe não pode ser instanciada')
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
         
    }
    //metodos staticos
    static textoParaData(texto) {
        
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no Formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2)); 
    
    }
}