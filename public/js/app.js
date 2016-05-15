angular.module("app",['ngRoute'])
  .config($routeProvider => {
    $routeProvider
      .when('/', {
        templateUrl: '/public/views/home.html',
        controller: 'homeCtrl'
      })
      .when('/cadastro', {
        templateUrl: '/public/views/cadastro.html',
        controller: 'cadastroCtrl'
      })
      .when('/pessoas', {
        templateUrl: '/public/views/pessoas.html',
        controller: 'pessoasCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    });
