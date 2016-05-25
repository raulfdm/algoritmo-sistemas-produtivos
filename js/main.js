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

    //Preenchimento Randomico
    function fillArrayRandom() {
        //variável para guardar o valor
        var add;
        //Array que será enviado
        var sequence = [];
        //Função para preencher o array
        while (sequence.length < elemArray) {
            //Escolhe um número aleatório e randomico de 1 à qtde de elementos do array
            add = Math.floor((Math.random() * elemArray) + 1);

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
        var start = time();
        cleanResults();
        //Pega o array preenchido nos inputs
        var array = fillArray();
        //manda o array para a função que calcula
        var obj = calculate(array);
        //preenche o h1 com o result retornado
        fillResult(obj);
        var end = time();

        printTime(start, end);
    });

    //Escuta o evento de click do botão random
    $('#randomCal').on('click', function() {
        var start = time();
        cleanResults();
        var array = fillArrayRandom();
        var obj = calculate(array);
        fillResult(obj);
        var end = time();

        printTime(start, end);
    });

    $('#randomTimesFunc').on('click', function() {
        var numberTimes = $('#randomTimes').val();
        if (!validaNumero(numberTimes)) {
            return;
        }
        var start = time();
        cleanResults();
        var total = [];
        //Roda a função x vezes
        for (var i = 0; i < numberTimes; i++) {
            var array = fillArrayRandom();
            total.push(calculate(array));
        }

        //Ordena por ordem decrescente de result (maior => menor)
        var objList = total.sort(function(o1, o2) {
            return o1.result - o2.result;
        });

        //Imprime no console para cada interação
        $.each(objList, function(index, value) {
            fillResult(value);
        });

        var end = time();
        printTime(start, end);
    });

    //Somente 1 número no input
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
        $('.result-list li').remove();
        $('.result-list').removeClass("alert alert-danger");
        $('.result-time p').text("Tempo de Execução: 0.00 segundos(ms) | 0 milisegundos (ms)");
    }

    function time() {
        return new Date().getTime();
    }

    function printTime(ini, end) {
        var total = end - ini;
        $('.result-time p').text("Tempo de Execução: " + ((total) / 1000).toFixed(2) + " segundos(ms) | " + total + " milisegundos (ms)");
    }

    function validaNumero(numberTimes) {
        console.log(numberTimes);
        if (numberTimes === undefined || numberTimes === "" || numberTimes === 0 || numberTimes.length === 0 || numberTimes <= 0) {
            cleanResults();
            $('.result-list').append("<li>Digite um valor válido</li>").addClass("alert alert-danger");
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
        if (obj.fabrica1 !== undefined) {
            /*resultado.append("<li><strong>Used Array:</strong> [" + obj.array + "] </li><li><strong>Custo:</strong> "+ obj.result+"<li> <strong>Fábrica 1: </strong>" + obj.fabrica1 + " unidades restantes <strong>Fábrica 2: </strong>" + obj.fabrica2 + " unidades restantes" + "</li><li><br></li>");*/

            resultado.append("<li><strong>Used Array:</strong> [" + obj.array + "] " + " | <strong>Custo: </strong>" + obj.result + " | <strong>Fábrica 1: </strong>" + obj.fabrica1 + " unidades restantes e <strong>Fábrica 2: </strong>" + obj.fabrica2 + " unidades restantes");
        } else {
            resultado.append("<li><strong>Used Array:</strong> [" + obj.array + "] " + " | <strong>Custo: </strong>" + obj.result);
        }

    }    
});
