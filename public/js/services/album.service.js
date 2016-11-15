(function() {
  angular.module('album-review-rec')
         .factory('AlbumService', AlbumService);

  AlbumService.$inject = ['$http'];

  function AlbumService($http){
    init();
    var albums = [];
    return {
      get: getAllAlbums,
      create: createOneAlbum
    };

    function init(){
      $http.get('/albums')
           .then(function(response){
             albums = response.data.albums;
           })
           .catch(function(err){
             console.log(err);
           });
    }
    function getAllAlbums(){
      return albums;
    }
    function createOneAlbum(album){
      // debugger;
      $http.post('/albums', album)
           .then(function(response){
             albums.push(album);
           })
           .catch(function(err){
             console.log(err);
           });
    }

  }
}());
