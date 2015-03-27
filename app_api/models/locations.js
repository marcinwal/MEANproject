var mongoose = require('mongoose'); //have to call it in db.js now

//definition of nested schema before the main 

var openingTimeSchema = new mongoose.Schema({
  days: {type: String, required: true},
  opening: String,
  closing: String,
  closed: {type: Boolean, required: true} 
});

var reviewSchema = new mongoose.Schema({
  author: {displayName: String},
  rating: {type: Number, required: true, min: 0, max: 5},
  reviewText: String,
  createdOn: {type: Date, "default": Date.now}
});

var locationSchema = new mongoose.Schema({
  name: {type: String,required: true},
  address: String,
  rating: {type: Number, "default": 0, min: 0, max: 5},
  facilities: [String],
  coords: {type: [Number], index: '2sphere'},
  openingTimes: [openingTimeSchema],
  reviews: [reviewSchema]
});

mongoose.model('Location',locationSchema);



