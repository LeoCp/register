angular.module("app")
  .controller("homeCtrl",function ($scope){})
  .controller("cadastroCtrl", function ($scope,$http){


      $scope.addPessoa = (pessoa) => {
        $http.post('/addPessoa', pessoa)

        .success((data) => {
          if(data.a == true) {
            $scope.stiloAlert = "alert alert-success";
            $scope.jAlerta = true;
            $scope.menssagemAlert = pessoa.nome+ " foi cadasrado com sucesso!";
          }else{
            $scope.stiloAlert = "alert alert-danger";
            $scope.jAlerta = true;
            $scope.menssagemAlert = pessoa.nome+ " ja esta cadasrado!";
          }

        })
        .error((data) => {
          alert(data);
        });

        $scope.pessoa = "";
      };

  })

  .controller("pessoasCtrl", function ($scope, $http){

    $http.get('/showPessoas').then((res) => {
      $scope.pessoas = res.data;
    });

    $scope.bAlterar = (pessoa) => {
      $scope.p = pessoa;
    }

    $scope.alterarPessoa = (pessoa) => {
      $http.put('/alterarPessoa/' + pessoa._id,pessoa);
    };

    $scope.removePessoa = (pessoa) => {
      $http.delete("/removePessoa/" + pessoa._id);
    };

  });
