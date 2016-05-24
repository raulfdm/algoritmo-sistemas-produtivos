//Função que faz o calculo
function calculate(sequence) {
    //Um array espelho para retornar.
    var getArray = sequence.toString();
    //Variável do result
    var result = 0;
    //Posição Atual
    var currentPos = 0;
    //Posição Anterior
    var prevPos = 0;
    //Sinalizador de fim do array
    var stop = true;
    var valPosition = 0;
    //Começando o trabalho
    while (stop) {
        //valida se o array ainda tem elementos
        if (sequence.length === 0) {
            stop = false;
        }
        //Atribui o primeiro elemento da sequence ao Atual
        currentPos = sequence[0];
        //console.log('currentPos: '+currentPos);
        //Valida se o array já chegou ao final
        if (currentPos === undefined) {
            currentPos = 0;
        }
        //pega o valor correspondente e soma no result
        valPosition = A1.get[prevPos][currentPos];
        //console.log('prevPos: '+prevPos +'\ncurrentPos: '+currentPos+"\nvalPosition: "+valPosition);
        result += valPosition;
        //Imprime o array
        //console.log("currentPos " + currentPos + " | " + "prevPos" + prevPos);
        //Salva o número atual
        prevPos = currentPos;
        //Remove o elemento do array
        currentIndex = sequence.indexOf(currentPos);
        sequence.splice(currentIndex, 1);
    }
    //Cria um objeto com o array que foi utilizado e o valor da conta
    var obj = {
        array: getArray,
        result: result.toFixed(0)
    };
    //Retorna o objeto
    return obj;
}