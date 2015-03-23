var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('favicon');
var logger = require('logger');


var app = express();

app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'/app_server/views'));
app.set('view engine','jade');
// app.use(favicon());
// app.use(logger('dev'));
// app.use(expess.json());
// app.use(express.urlencoded());
// app.use(express.cookieParser('your secret key'));
// app.use(express.session());
// app.use(app.router);
app.use(express.static(path.join(__dirname,'public')));



require('./routes')(app);

http.createServer(app).listen(app.get('port'),function(){
  console.log('Express server is listening on port' + app.get('port'));
});