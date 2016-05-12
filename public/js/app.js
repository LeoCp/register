angular.module("app",['ngRoute'])

  .config( function ($routeProvider, $locationProvider) {

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