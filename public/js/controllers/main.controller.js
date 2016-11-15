(function() {
  angular.module('album-review-rec')
  .controller('MainController', MainController);

  MainController.$inject = ['$scope','AlbumService'];

  function MainController($scope, AlbumService){
    $scope.albums = AlbumService.get();
    $scope.addAlbum = addAlbum;
    $scope.saveAlbum = saveAlbum;

    $scope.$watch(function(){
      return AlbumService.get();
    }, function(){
      $scope.albums = AlbumService.get();
    });
    function addAlbum(){
      $scope.isAdding = true;
    }

    function saveAlbum(savedAlbum){
      $scope.isAdding = false;
    }

  }
}());
