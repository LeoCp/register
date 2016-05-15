angular.module("app")
  .controller("pessoasCtrl", function ($scope,$window,pessoasAPI){

    pessoasAPI.getPessoas().then((res) => {
      $scope.pessoas = res.data;
    });

    $scope.bAlterar = (pessoa) => {
      $scope.p = pessoa;
    };

    $scope.alterarPessoa = (pessoa) => {
      pessoasAPI.altPessoa(pessoa);
    };

    $scope.removePessoa = (pessoa) => {
      pessoasAPI.removePessoa(pessoa);
      $window.location.reload();
    };
  });
