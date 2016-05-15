angular.module("app").factory("pessoasAPI",($http) => {

  let _getPessoas = () => {
    return $http.get('/showPessoas');
  }
  ,_setPessoa = (pessoa) => {
    return $http.post('/addPessoa', pessoa);
  }
  ,_removePessoa = (pessoa) => {
    return $http.delete("/removePessoa/" + pessoa._id);
  }
  ,_altPessoa = (pessoa) => {
    return $http.put('/alterarPessoa/' + pessoa._id,pessoa);
  };

  return {
    getPessoas:_getPessoas,
    setPessoa:_setPessoa,
    altPessoa:_altPessoa,
    removePessoa: _removePessoa
  }

});
