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
  if(req.params && req.params.locationid){
    Loc
      .findById(req.params.locationid)
      .exec(function(err,location){
        if(!location){
          sendJsonResponse(res,404,{"message": "locationid not found"});
        }else if(err){
          sendJsonResponse(res,)
        }else
        sendJsonResponse(res,200,location);
      });
  } else {
    sendJsonResponse(res,404,{"message": "No locationid provided"});
  }  
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
