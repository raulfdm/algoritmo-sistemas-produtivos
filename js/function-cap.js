function calculate(sequence) {
    var condicoesMirror = condicoes;
    var f1 = condicoesMirror.fabrica1;
    var f2 = condicoesMirror.fabrica2;    
    var getArray = sequence.toString(); //Um array espelho para retornar.
    var result = 0; //Variável do result   
    var currentPos = 0; //Posição Atual
    var prevPos = 0;  //Posição Anterior 
    var stop = true; //Sinalizador de fim do array
    var valPosition = 0;
    var obj; //obj de retorno
    //Começando o trabalho
    while (stop) {
        //valida se o array ainda tem elementos
        if (sequence.length === 0) {
            stop = false;
        }        
        currentPos = sequence[0]; //Atribui o primeiro elemento da sequence ao Atual                
        //Valida se o array já chegou ao final
        if (f1 - condicoesMirror.valores[currentPos] > 0) {
            f1 -= condicoesMirror.valores[currentPos];
        } else if (f2 - condicoesMirror.valores[currentPos] > 0) {
            f2 -= condicoesMirror.valores[currentPos];
        } 
        //Valida se a posição atual é undefined
        if (!currentPos) {
            currentPos = 0;
        }        
        valPosition = A1.get[prevPos][currentPos];//pega o valor correspondente e soma no resultado
        result += valPosition;                
        prevPos = currentPos; //Salva o número atual        
        currentIndex = sequence.indexOf(currentPos); //encontra a posição no array
        sequence.splice(currentIndex, 1);//Remove o elemento do array
    }
    
    //Cria um objeto com o array que foi utilizado e o valor da conta
    obj = {
        array: getArray,
        result: result.toFixed(0),
        fabrica1: f1,
        fabrica2: f2
    };
    //Retorna o objeto
    return obj;
}