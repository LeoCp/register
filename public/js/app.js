
var app = angular.module("app",['ngRoute']);
  app.config( $routeProvider => {

        $routeProvider

        .when('/', {
          templateUrl: '/view/home.html',
          controller: 'homeCtrl'
        })

        .when('/cadastro', {
            templateUrl: '/view/cadastro.html',
            controller: 'cadastroCtrl'
        })

        .when('/pessoas', {
            templateUrl: '/view/pessoas.html',
            controller: 'pessoasCtrl'
        })

        .otherwise({
            redirectTo: '/'
        });

  });
