class Negociacao {
    constructor(data, quantidade, valor) { //construindo a class Negociação e oq vai ficar dentro dela

        this._data = new Date(data.getTime()); //Date do propri js pegando em tempo real
        this._quantidade = quantidade; //quantidade que coloca no site
        this._valor = valor; //valor do produto
        Object.freeze(this);
    }


    get volume() { // perguntando pra negociação qual o seu volume
        return this._quantidade * this._valor; //O _ faz com que só por aqui o valor possa ser mudado não por outros lugares
    }

    get data() { //Programação defensiva JAVASCPRIT
        return new Date(this._data.getTime()); //este codigo serve para não deixar pelo console a data ser modificada por transformar a data em um monte de numeros que só o date conhece 
    }

    get quantidade() {//o get esta transformando em um metodo
        return this._quantidade;
    }

    get valor() {//o get esta transformando em um metodo
        return this._valor;
    }
}
