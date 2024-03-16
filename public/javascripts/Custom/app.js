(function(){
  var app = angular.module('store',['store-products']);

  app.directive('productTitle', function(){
    return{
      restrict: 'E',
      templateUrl: 'product_title.ejs'
    };
  });

  app.controller('StoreController', function(){
    this.Nome = "Junior";
  });
})();
