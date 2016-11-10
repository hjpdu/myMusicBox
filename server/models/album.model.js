var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var albumSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  artist:{
    type: String,
    required: true
  },

  ReleaseDate:{
    type: Date,
    required: true
  },

  isGood: {
    type: Boolean,
    required: true
  }
});

var Album = mongoose.model('Album', albumSchema);
//the Grand platonic 'Album'  form now exists
module.exports = Album;
