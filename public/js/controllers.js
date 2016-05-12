angular.module("app")
  .controller("homeCtrl",function ($scope){})
  .controller("cadastroCtrl", function ($scope,$http){

      $scope.addPessoa = (pessoa) => {
        $http.post('/addPessoa', pessoa);
        $scope.pessoa = "";
      };
      
  })
  .controller("pessoasCtrl", function ($scope, $http){

    $http.get('/showPessoas').then((res) => {
      $scope.pessoas = res.data;
    });
    
  });
