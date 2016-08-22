(function(){


  var app = angular.module('noozine', ['ngMaterial']);
  app.controller('zineController', ['$scope', function($scope){
    $scope.year = 2121;

    // $scope.timeUpdate = function() {
      $scope.time = new Date().getTime();
    //   while (true) {
    //     $scope.time = new Date().getTime();
    //   }
    // };
    //
    // $scope.timeUpdate();







  }]);


})();
