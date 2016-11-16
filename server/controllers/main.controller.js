(function() {
  angular.module('album-review-rec')
  .controller('MainController', MainController);

  MainController.$inject = ['$scope, AlbumService'];

  function MainController($scope, AlbumService){
    $scope.isAdding = false;

    function addAlbum(newAlbum){
      $scope.isAdding = true;
    }

  }
}());
