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
  if(req.params && req.params.locationid && req.params.reviewid)
  {
    Loc
      .findById(req.params.locationid)
      .select('name review')
      .exec(function(err,location){
        var response, review;
        if(!location){
          sendJsonResponse(res,404,{"message": "locationid not found"});
          return;
        } else if(err){
          sendJsonResponse(res,400,err);
          return;
        }
        if(location.reviews && location.reviews.length > 0){
          review = location.reviews.id(req.params.reviewid);
          if (!review){
            sendJsonResponse(res,404,{"message": "not found"});
          } else {
            response = {
              location : {
                name : location.name,
                id : req.params.locationid
              },
              review : review
            };
            sendJsonResponse(res,200,response);
          }
        } else {
          sendJsonResponse(res,404,{"message": "No reviews found"});
        }
      });
  }else
  {
    sendJsonResponse(res,404,{"message": "wrong parameters"});
  }


};
module.exports.reviewsUpdateOne = function(req,res){

};
module.exports.reviewsDeleteOne = function(req,res){

};
