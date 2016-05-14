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

    $scope.bAlterar = (id) =>{
      console.log(id);
      $http.get('/pessoas/' + id ).success(function(response) {

      });
    }

    $scope.alterarPessoa = () => {
      console.log($scope.p._id);
      $http.put('/pessoas' + $scope.p._id, $scope.p).success(function(response) {
        console.log("foi");
      });
    };

    $scope.remove = (id) => {
      console.log(id);
      $http.delete("/pessoas/" + id).success(function (res) {

      });
    }




  });
