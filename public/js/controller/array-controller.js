angular.module('app').controller('ArrayController', function($scope) {

    //Chama a api
    jsdk.getAPI('maths');
    //Cria o array com os valores
    var array = [null, 7, 14, 13, 11, 8, null, 12, 22, 18, 7, 9, null, 7, 6, 12, 14, 9, null, 7, 6, 8, 2, 10, null];
    //Cria a matriz usando a api
    var A1 = mathsAPI.getInstance('masfufa', {
        data: array, //dados a serem usados
        dim: '5x5' //tamanho da matriz
    });

    //Variáveis
    $scope.results = [];
    var obj = {};
    var objList = [];

    $('#randomCal').on('click', function() {
        obj = {
            array: '1,2,3,4',
            value: 48
        };

        $scope.results.push(obj);
        console.log($scope.results);
    })



});
