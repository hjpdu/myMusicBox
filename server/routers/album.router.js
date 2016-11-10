var express = require('express');
var router = express.Router();
var Album = require('../models/album.model.js');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/albums', function(req, res){
  Album.find({}, function(err, foundAlbums){
    if(err){
      res.status(500).json({
        err:err
      });
    }
    res.status(200).json({
      albums: foundAlbums
    });
  });
});
router.get('/albums/:id', function(req, res){});
router.post('/albums', function(req, res){});
router.put('/albums/:id', function(req, res){});
router.delete('/albums/:id', function(req, res){});

module.exports = router;
