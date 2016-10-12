(function(){


  var app = angular.module('noozine', ['ngMaterial']);
  app.controller('zineController', ['$scope', function($scope){
    $scope.year = 2121;

    // $scope.timeUpdate = function() {
      $scope.time = new Date().getTime();
      $scope.time = $scope.time + 1431734400000000000;
      $scope.time = $scope.time * 100;
    //   while (true) {
    //     $scope.time = new Date().getTime();
    //   }
    // };
    //
    // $scope.timeUpdate();







  }]);


})();
