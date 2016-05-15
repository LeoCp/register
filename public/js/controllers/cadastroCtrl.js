angular.module("app")
  .controller("cadastroCtrl", function ($scope,pessoasAPI){
      $scope.addPessoa = (pessoa) => {
        pessoasAPI.setPessoa(pessoa)
          .success((data) => {
            if(data.a == true) {
              $scope.stiloAlert = "alert alert-success";
              $scope.jAlerta = true;
              $scope.menssagemAlert = pessoa.nome+ " foi cadasrado com sucesso!";
            }else{
              $scope.stiloAlert = "alert alert-danger";
              $scope.jAlerta = true;
              $scope.menssagemAlert ="Essa pessoa ja esta cadastrada!";
            }
          })
          .error((data) => {
            $scope.stiloAlert = "alert alert-danger";
            $scope.jAlerta = true;
            $scope.menssagemAlert = data;
          });
          $scope.pessoa = "";
        };
  });
