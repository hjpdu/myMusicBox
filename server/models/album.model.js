var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var albumSchema = new Schema({
  cover:{
    type: String,

  },

  title: {
    type: String,
    required: true
  },

  artist:{
    type: String,
    required: true
  },

  releaseDate:{
    type: Date,
    required: true
  },

  isGood: {
    type: Boolean,
    required: true
  },

  ratingNum: {
    type: Number,
    // required: false,
    max:10
  }
});

var Album = mongoose.model('Album', albumSchema);
//the Grand platonic 'Album'  form now exists
module.exports = Album;
