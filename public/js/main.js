        var app = angular.module("contatooh", ['ngRoute']);
        app.config(function($routeProvider) {
        $routeProvider
        .when('/home', {
             templateUrl : 'partial/home.html',
             controller : 'HomeController'
        })
        .when('/contatos', {
             templateUrl : 'partial/contatos.html',
             controller : 'ContatosController'
        })
        .when('/contato/:contatoId', {
              templateUrl : 'partial/contato.html',
              controller : 'ContatoController'
        })
        .otherwise({redirectTo: '/'});
        });

        app.controller("ContatoController", function($scope, $routeParams){
          console.log($routeParams.contatoId);
          $scope.message = 'Contato';
        });

        app.controller("ContatosController", function($scope, $http){
           $scope.message = 'Contatos';
           $scope.filtro = "";
           $scope.contatos = [];

           // Express connection
           $http.get('/contatos')
           .success(function(data) {
             $scope.contatos = data;
           })
           .error(function(statusText) {
             console.log("Não foi possível obter a lista de contatos");
             console.log(statusText);
          });
          ////////////////

          $scope.total = 0;
          $scope.incrementa = function(){
            $scope.total++;
          };
        });

        app.controller("HomeController", function($scope){
            $scope.message = 'Bem-vindo ao Contatooh';
        });
