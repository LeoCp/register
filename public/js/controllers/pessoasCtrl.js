angular.module("app")
  .controller("pessoasCtrl", function ($scope,$window,pessoasAPI){

    pessoasAPI.getPessoas().then((res) => {
      pessoas = res.data;
      $scope.pessoas = res.data;
      if (quantPessoas > 5) $scope.pagination = true;
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
