var ctrl = require('../app_server/controllers/locations')


module.exports = function(app){
  app.get('/', ctrl.homelist);
  app.get('/location/:locationid', ctrl.locationInfo);
  app.get('/location/:locationid/reviews/new', ctrl.addReview);
  app.post('/location/:locationid/reviews/new', ctrl.doAddReview);
};