module.exports.about = function(req,res){
  res.render('generic-text',{
    title: 'About Loc8r',
    content: 'Loc8r created to help people'
  });
};

module.exports.signin = function(req,res){
  res.render('signin-index',{title: 'Sign in to Loc8r'});
}