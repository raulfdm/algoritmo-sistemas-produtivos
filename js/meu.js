//Chama a api
jsdk.getAPI('maths');
//Cria o array com os valores
var array = [null, 7, 14, 13, 11, 8, null, 12, 22, 18, 7, 9, null, 7, 6, 12, 14, 9, null, 7, 6, 8, 2, 10, null];
//Cria a matriz usando a api
var A1 = mathsAPI.getInstance('masfufa', {
    data: array, //dados a serem usados
    dim: '5x5' //tamanho da matriz
});

//Função que faz o calculo
var calculate = function(sequence) {
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

    //Começando o trabalho
    while (stop) {
        //valida se o array ainda tem elementos
        if (sequence.length === 0) {
            stop = false;
        }
        //Atribui o primeiro elemento da sequence ao Atual
        currentPos = sequence[0];
        //Valida se o array já chegou ao final
        if (A1.get[prevPos][currentPos] === undefined) {
            currentPos = 0;
        }
        //pega o valor correspondente e soma no result
        result += A1.get[prevPos][currentPos];
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
        result: result
    };

    //Retorna o objeto
    return obj;

};

//Carrega quando terminar o load do documento
$(document).ready(function() {
    //pega os valores dos inputs
    function fillArray() {
        var sequence = [];
        sequence.push($('#value1').val());
        sequence.push($('#value2').val());
        sequence.push($('#value3').val());
        sequence.push($('#value4').val());
        return sequence;
    }
    //Preenchimento Randomico
    function fillArrayRandom() {
        //variável para guardar o valor
        var add;
        //Array que será enviado
        var sequence = [];
        //Função para preencher o array
        while (sequence.length < 4) {
            //Escolhe um número aleatório e randomico de 1 a 4
            add = Math.floor((Math.random() * 4) + 1);

            //Valida se o número já foi utilizado
            //Se for o result do indexOf vai ser a posição
            //Se não, vai ser -1
            if (sequence.indexOf(add) == -1) {
                sequence.push(add);
            }
        }
        //retorna o array randomico
        return sequence;
    }

    //Escuta o evento click do botão calcula
    $('#calculate').on('click', function() {
        //Pega o array preenchido nos inputs
        var array = fillArray();
        //manda o array para a função que calcula
        var obj = calculate(array);
        //preenche o h1 com o result retornado
        $('ul').append("<li><strong>Used Array:</strong> [" + obj.array + "]  " + "<strong>Value:</strong> " + obj.result + "</li>");
    });

    //Escuta o evento de click do botão random
    $('#randomCal').on('click', function() {
        var array = fillArrayRandom();
        var obj = calculate(array);
        $('ul').append("<li><strong>Used Array:</strong> [" + obj.array + "]  " + "<strong>Value:</strong> " + obj.result + "</li>");
    });

    //Escuta o evento do botão RODA 100
    $('#hundredCal').on('click', function() {
        var total = [];
        //Roda a função 100 vezes
        for (var i = 0; i < 1000; i++) {
            var array = fillArrayRandom();
            total.push(calculate(array));
            //console.log("result: " + total[i].result + " Array: " + total[i].array);
        }

        //Ordena por ordem decrescente de result (maior => menor)
        var objList = total.sort(function(o1, o2) {
            return o1.result - o2.result;
        });

        //Imprime no console para cada interação
        $.each(objList, function(index, value) {
            $('ul').append("<li><strong>Used Array:</strong> [" + value.array + "]  " + "<strong>Value:</strong> " + value.result + "</li>");
        });
    });

    //Somente 1 número no input
    $('input').on('input', function() {
        if (this.value.length > 1) {
            this.value = this.value.slice(0, 1);
        }
    });

    $('#removeElem').on('click', function() {
        $('ul li').remove();
    });
});
