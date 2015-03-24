var ctrl = require('../app_server/controllers/main'); 

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });



// module.exports = router;

module.exports = function(app) {
  app.get('/about',ctrl.about);
  app.get('/signin',ctrl.signin);
};

