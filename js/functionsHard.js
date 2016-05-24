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



        function calculate(sequence) {
          var condicoesMirror = condicoes;
            var f1 = condicoesMirror.fabrica1;
            var f2 = condicoesMirror.fabrica2;
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
                //console.log('fabrica1: ' + f1 + '\nvalores[currentPos]: ' + valores[currentPos] + '\nfabrica2: ' + f2);

                if (f1 - condicoesMirror.valores[currentPos] > 0) {
                    f1 -= condicoesMirror.valores[currentPos];
                } else if (f2 - condicoesMirror.valores[currentPos] > 0) {
                    f2 -= condicoesMirror.valores[currentPos];
                } else if (condicoesMirror.valores[currentPos] === undefined) {
                    console.log("fim");
                } else {
                    console.log("Sem capacidade");
                }
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
                result: result.toFixed(0),
                fabrica1: f1,
                fabrica2: f2
            };
            //Retorna o objeto
            return obj;
        }

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

        //Escuta o evento de click do botão random
        $('#randomCal').on('click', function() {
            var start = time();
            cleanResults();
            var array = fillArrayRandom();
            console.log(array);
            var obj = calculate(array);
            fillResult(obj);
            var end = time();

            printTime(start, end);
        });

        $('#randomTimesFunc').on('click', function() {
            var numberTimes = $('#randomTimes').val();
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
            $('.result-list li').remove();
            $('.result-list').removeClass("alert alert-danger");
            $('.result-time p').text("");

        }

        function time() {
            return new Date().getTime();
        }

        function printTime(ini, end) {
            $('.result-time p').text(((end - ini) / 1000).toFixed(2) + " seconds wasted");
        }

        function fillResult(obj) {
            $('.result-list').append("<li><strong>Used Array:</strong> [" + obj.array + "]  " + "<strong>Value:</strong> " + obj.result + " <strong>Fábrica 1: </strong>" + obj.fabrica1 + " <strong>Fábrica 2: </strong>" + obj.fabrica2 + " sobra" + "</li>");
        }
    });
