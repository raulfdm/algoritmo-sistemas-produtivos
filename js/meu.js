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
var calcula = function(sequencia) {
    //Um array espelho para retornar.
    var getArray = sequencia.toString();

    //Variável do resultado
    var resultado = 0;
    //Posição Atual
    var numeroAtual = 0;
    //Posição Anterior
    var numeroAnterior = 0;
    //Sinalizador de fim do array
    var verdadeiro = true;

    //Começando o trabalho
    while (verdadeiro) {
        //valida se o array ainda tem elementos
        if (sequencia.length === 0) {
            verdadeiro = false;
        }
        //Atribui o primeiro elemento da sequencia ao Atual
        numeroAtual = sequencia[0];
        //Valida se o array já chegou ao final
        if (A1.get[numeroAnterior][numeroAtual] === undefined) {
            numeroAtual = 0;
        }
        //pega o valor correspondente e soma no resultado
        resultado += A1.get[numeroAnterior][numeroAtual];
        //Imprime o array
        //console.log("numeroAtual " + numeroAtual + " | " + "numeroAnterior" + numeroAnterior);
        //Salva o número atual
        numeroAnterior = numeroAtual;
        //Remove o elemento do array
        indiceAtual = sequencia.indexOf(numeroAtual);
        sequencia.splice(indiceAtual, 1);
    }

    //Cria um objeto com o array que foi utilizado e o valor da conta
    var obj = {
        array: getArray,
        resultado: resultado
    };

    //Retorna o objeto
    return obj;

};

//Carrega quando terminar o load do documento
$(document).ready(function() {
    //pega os valores dos inputs
    function preencheArray() {
        var sequencia = [];
        sequencia.push($('#valor1').val());
        sequencia.push($('#valor2').val());
        sequencia.push($('#valor3').val());
        sequencia.push($('#valor4').val());
        return sequencia;
    }
    //Preenchimento Randomico
    function preencheArrayRandom() {
        //variável para guardar o valor
        var add;
        //Array que será enviado
        var sequencia = [];
        //Função para preencher o array
        while (sequencia.length < 4) {
            //Escolhe um número aleatório e randomico de 1 a 4
            add = Math.floor((Math.random() * 4) + 1);

            //Valida se o número já foi utilizado
            //Se for o resultado do indexOf vai ser a posição
            //Se não, vai ser -1
            if (sequencia.indexOf(add) == -1) {
                sequencia.push(add);
            }
        }
        //retorna o array randomico
        return sequencia;
    }

    //Escuta o evento click do botão calcula
    $('#calcula').on('click', function() {
        //Pega o array preenchido nos inputs
        var array = preencheArray();
        //manda o array para a função que calcula
        var obj = calcula(array);
        //preenche o h1 com o resultado retornado
        $('ul').append("<li><strong>Array Utilizado:</strong> [" + obj.array + "]  " + "<strong>Valor:</strong> " + obj.resultado + "</li>");
    });

    //Escuta o evento de click do botão random
    $('#calculaRandom').on('click', function() {
        var array = preencheArrayRandom();
        var obj = calcula(array);
        $('ul').append("<li><strong>Array Utilizado:</strong> [" + obj.array + "]  " + "<strong>Valor:</strong> " + obj.resultado + "</li>");
    });

    //Escuta o evento do botão RODA 100
    $('#calcula100').on('click', function() {
        var total = [];
        //Roda a função 100 vezes
        for (var i = 0; i < 1000; i++) {
            var array = preencheArrayRandom();
            total.push(calcula(array));
            //console.log("Resultado: " + total[i].resultado + " Array: " + total[i].array);
        }

        //Ordena por ordem decrescente de resultado (maior => menor)
        var hu3 = total.sort(function(o1, o2) {
            return o1.resultado - o2.resultado;
        });

        //Imprime no console para cada interação
        $.each(hu3, function(index, value) {
            $('ul').append("<li><strong>Array Utilizado:</strong> [" + value.array + "]  " + "<strong>Valor:</strong> " + value.resultado + "</li>");
        });
    });

    //Somente 1 número no input
    $('input').on('input', function() {
        if (this.value.length > 1) {
            this.value = this.value.slice(0, 1);
        }
    });

    $('#removeElementos').on('click', function() {
        $('ul li').remove()
    });
});
