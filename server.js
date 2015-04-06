var express = require('express');
var app = express();
var server = require('http').createServer(app);
require('./app_api/models/db'); //models for dbs


var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('logger');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');



app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'/app_server/views'));
app.set('view engine','jade');
// app.set('view engine','ejs')

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(favicon(__dirname + '/public/images/favicon.ico'));
// app.use(expressLayouts);  

// app.use(express.static(__dirname,'/public')).use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));


require('./routes')(app);  //main
require('./app_api/routes')(app); //api 

server.listen(app.get('port'),function(){
  console.log("Server is running at port:" + app.get('port'));
});

module.exports = server;