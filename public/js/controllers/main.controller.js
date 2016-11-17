(function() {
  angular.module('album-review-rec')
  .controller('MainController', MainController);

  MainController.$inject = ['$scope','AlbumService'];

  function MainController($scope, AlbumService){
    $scope.albums = AlbumService.get();
    $scope.addAlbum = addAlbum;
    $scope.saveAlbum = saveAlbum;
    $scope.cancelOut = cancelOut;
    $scope.deleteAlbum = deleteAlbum;
    $scope.updateAlbum = updateAlbum;
    $scope.editAlbumRec = editAlbumRec;
    $scope.moreDetails = moreDetails;
    $scope.lessDetails = lessDetails;
    $scope.dragControlListeners = {
    accept: function (sourceItemHandleScope, destSortableScope) {return boolean}//override to determine drag is allowed or not. default is true.
    itemMoved: function (event) {//Do what you want},
    orderChanged: function(event) {//Do what you want},
    containment: '#board'//optional param.
    clone: true //optional param for clone feature.
    allowDuplicates: false //optional param allows duplicates to be dropped.
};

$scope.dragControlListeners1 = {
        containment: '#board'//optional param.
        allowDuplicates: true //optional param allows duplicates to be dropped.
};


    $scope.$watch(function(){
      return AlbumService.get();
    }, function(){
      $scope.albums = AlbumService.get();
    });
    function addAlbum(){
      $scope.isAdding = true;
    }

    function saveAlbum(newAlbum){
      AlbumService.create(newAlbum);
      $scope.newAlbum = '';
      // $scope.isAdding = false;
    }

    function cancelOut(){
      $scope.isAdding = false;

    }
    function deleteAlbum(index, album){
      AlbumService.delete(index, album);
    }
    function updateAlbum(index, album){
      AlbumService.update(index, album);
      album.isUpdating = false;
    }

    function editAlbumRec(album){
      album.isUpdating = true;
    }

    function moreDetails(album){
      album.isShowing = true;
    }

    function lessDetails(album){
      album.isShowing = false;
    }

  }
}());
