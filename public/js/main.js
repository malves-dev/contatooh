
        // Substituting $http for $resource
        var app = angular.module("contatooh", ['ngRoute', 'ngResource']);
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

        // Substituting $http for $resource
        app.controller("ContatosController", function($scope, $resource){
           $scope.message = 'Contatos';
           $scope.filtro = "";
           $scope.contatos = [];

           var Contato = $resource('/contatos');

           // Express connection
           function buscaContatos() {
              Contato.query(
                  function(contatos) {
                    $scope.contatos = contatos;
                  },
                  function(erro) {
                    console.log("Não foi possível obter a lista de contatos");
                    console.log(erro);
                  }
              );
            }
            buscaContatos();
            ////////////////

            $scope.total = 0;
            $scope.incrementa = function(){
            $scope.total++;
          };
        });

        app.controller("HomeController", function($scope){
            $scope.message = 'Bem-vindo ao Contatooh';
        });
