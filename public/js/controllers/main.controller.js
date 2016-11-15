(function() {
  angular.module('album-review-rec')
  .controller('MainController', MainController);

  MainController.$inject = ['$scope'];

  function MainController($scope){
    $scope.addAlbum = addAlbum;
    $scope.saveAlbum = saveAlbum;

    function addAlbum(){
      $scope.isAdding = true;
    }

    function saveAlbum(savedAlbum){
      $scope.isAdding = false;
    }

  }
}());
