(function(){
  var app = angular.module('store-products',[]);

  app.controller('ProdutoController', ['$http', function($http){
    var teste = this;

    teste.products = [];

    $http.get('http://localhost:60229/CapimBambu.svc/rest/ListaProdutos').success(function(data){
      teste.products = data;
    });
  }]);
})();
