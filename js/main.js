//Chama a api
jsdk.getAPI('maths');

//Cria a matriz usando a api
function mountArray(array, dim) {
    var arrayDone = mathsAPI.getInstance('masfufa', {
        data: array, //dados a serem usados
        dim: dimensaoArray //tamanho da matriz
    });

    return arrayDone;
}
$(document).ready(function() {
    //Função de Preenchimento Randomico
    function fillArrayRandom(qtdElem) {
        var add; //variável para guardar o valor        
        var sequence = []; //Array que será enviado        
        //Função para preencher o array
        while (sequence.length < qtdElem) {
            add = Math.floor((Math.random() * qtdElem) + 1); //Escolhe um número aleatório e randomico de 1 à qtde de elementos do array
            /*Valida se o número já foi utilizado
            Se for o result do indexOf vai ser a posição
            Se não, vai ser -1*/
            if (sequence.indexOf(add) == -1) {
                sequence.push(add);
            }
        }
        return sequence; //retorna a sequencia randomica
    }

    //Escuta o evento de click do botão random
    $('#randomCal').on('click', function() {
        cleanResults();
        var start = time();
        var array = fillArrayRandom(elemArray);
        var obj = calculate(array);
        var end;

        fillResult(obj);
        end = time();

        printTime(start, end);
    });

    $('#randomTimesFunc').on('click', function() {
        var numberTimes = $('#randomTimes').val(); //pega a qtde de vezes
        //faz validação para saber se é um número valido
        if (!validaNumero(numberTimes)) {
            return;
        }
        cleanResults(); //limpa os resultados
        var start = time(); //inicia o cronometro
        var total = [];
        var arraysUsados = [];
        var array;
        var qtdElem = elemArray;
        var objList;
        var end;
        //Roda a função x vezes
        for (var i = 0; i < numberTimes; i++) {
            var array = fillArrayRandom(qtdElem);
            total.push(calculate(array));
        }

        //Ordena por ordem decrescente de result (maior => menor)
        objList = total.sort(function(o1, o2) {
            return o1.result - o2.result;
        });

        //Imprime no console para cada interação
        $.each(objList, function(index, value) {
            fillResult(value);
        });

        end = time();
        printTime(start, end);
    });

    //Somente 4 digitos no input
    $('input').on('input', function() {
        if (this.value.length > 4) {
            this.value = this.value.slice(0, 4);
        }
    });

    $('#removeElem').on('click', function() {
        cleanResults();
    });

    function cleanResults() {
        removeErroField();
        $('.result-erro').addClass('hide');
        $('.resultado').remove();        
        $('.result-sec').text("0.00");
        $('.result-milli').text(0);
    }

    function time() {
        return new Date().getTime();
    }

    function printTime(ini, end) {
        var total = end - ini;
        $('.result-sec').text(((total) / 1000).toFixed(2));
        $('.result-milli').text(total);
    }

    function validaNumero(numberTimes) {
        if (!numberTimes) {
            cleanResults();
            $('.result-erro').removeClass('hide');
            addErroField();
            return false;
        } else {
            return true;
        }
    }

    function addErroField() {
        $('.from-group.input-group').addClass('has-error');
        var a = $('.from-group.input-group input');
        a.val("");
        a.focus();
    }

    function removeErroField() {
        $('.from-group.input-group').removeClass('has-error');
    }

    function fillResult(obj) {
        var resultado = $('.result-list');
        if (obj.fabrica1) {
            resultado.append('<li class="resultado"><strong>Array Utilizado:</strong> [' + obj.array + '] ' + ' | <strong>Custo: </strong>' + obj.result + ' | <strong>Fábrica 1: </strong>' + obj.fabrica1 + ' unidades restantes e <strong>Fábrica 2: </strong>' + obj.fabrica2 + ' unidades restantes');
        } else {
            resultado.append('<li class="resultado"><strong>Array Utilizado:</strong> [' + obj.array + '] ' + ' | <strong>Custo: </strong>' + obj.result);
        }

    }

    $('.teste').on('click',function(){
        var raul = $('.resultado').html();
        $('.result-list li:last').append(raul);
    });

});