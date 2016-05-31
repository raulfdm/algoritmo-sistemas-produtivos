class Matriz {
    
    constructor(array, dimensao, qtdeElemArray, condicoes){
        this._array = new Array(array);
        this._dimensaoArray = dimensao;
        this._qtdeElemArray =  qtdeElemArray;
        this._condicoes = new Object(condicoes);
        Object.freeze(this);
    }
    
    
    get montaArray(){
        var array = mathsAPI.getInstance('masfufa', {
        data: array, //dados a serem usados
        dim: dimensaoArray //tamanho da matriz
        });
        return new Array(array);
    }
}