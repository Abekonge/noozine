(function(){


  var app = angular.module('noozine', ['ngMaterial']);
  app.controller('zineController', ['$scope', function($scope){
    $scope.year = 2121;
    setTimeout(function(){$scope.year++; console.log($scope.year);}, 1000);

    $scope.add = function() {
      $scope.year++;
    };




  }]);


})();
