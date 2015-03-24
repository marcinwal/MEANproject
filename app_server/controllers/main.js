module.exports.about = function(req,res){
  res.render('index',{title: 'About'});
};

module.exports.signin = function(req,res){
  res.render('index',{title: 'Sign in'});
}