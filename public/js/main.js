angular.module('app',['ngRoute'])
.config(function($routeProvider){


  $routeProvider.when('/matriz1',{
    templateUrl: 'partials/array1.html'
  });

  $routeProvider.when('/matriz2',{
    templateUrl: 'partials/array2.html'
  });

  $routeProvider.when('/matriz3',{
    templateUrl: 'partials/array3.html'
  });

  $routeProvider.otherwise({
    redirectTo: '/matriz1'
  });

});
