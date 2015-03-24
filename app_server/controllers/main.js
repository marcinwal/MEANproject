module.exports.about = function(req,res){
  res.render('index',{title: 'About'});
};

module.exports.signin = function(req,res){
  res.render('signin-index',{title: 'Sign in to Loc8r'});
}