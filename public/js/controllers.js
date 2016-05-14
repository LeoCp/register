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

    $scope.bAlterar = (pessoa) =>{
      $scope.p = pessoa;
    }

    $scope.alterarPessoa = () => {
      console.log($scope.p._id);
      $http.put('/pessoas/' + $scope.p.nome, $scope.p).success(function(response) {
        console.log("foi");
      });
    };




  });
