angular.module("app")
  .controller("homeCtrl",($scope) => {

  })
  .controller("cadastroCtrl",($scope) => {
    $scope.addPessoa = (pessoa) =>{
      console.log(pessoa);
    };
  })
  .controller("pessoasCtrl",($scope) => {

  });
