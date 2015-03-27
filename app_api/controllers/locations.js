var mongoose = require('mongoose');
var Loc = mongoose.model('Location');


var sendJsonResponse = function(res,status,content){
  res.status(200);
  res.json(content);
}

module.exports.locationsCreate = function(req,res){
  sendJsonResponse(res,200,{"status": "success"});
};


module.exports.locationsListByDistance = function(req,res){

};
module.exports.locationsReadOne = function(req,res){
  sendJsonResponse(res,200,{"status": "success"});
};
module.exports.locationsUpdateOne = function(req,res){

};
module.exports.locationsDeleteOne = function(req,res){

};
module.exports.reviewsCreate = function(req,res){

};
module.exports.reviewsReadOne = function(req,res){

};
module.exports.reviewsUpdateOne = function(req,res){

};
module.exports.reviewsDeleteOne = function(req,res){
  
};
