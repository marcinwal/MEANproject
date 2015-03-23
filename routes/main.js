var express = require('express');
var router = express.Router();
var ctrl = require('../app_server/controllers/main'); 

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });



// module.exports = router;

module.exports = function(app) {
  app.get('/',ctrl.index);
};