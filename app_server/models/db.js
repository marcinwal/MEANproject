var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/loc8r';

mongoose.connect(dbURI);


mongoose.connection.on('connected',function(){
  console.log('Mongoose is connected to ' + dbURI);
});

mongoose.connection.on('error',function(error){
  console.log('Mongoose connection error ' + error);
});

mongoose.connection.on('disconnected',function(){
  console.log('Mongoose is disconnected');
});

var gracefullShutdown = function(msg,callback){
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through '+ msg);
    callback;
  });
};

process.once('SIGUSR2',function(){
  gracefullShutdown('nodemon restart',function(){
    process.kill(process.pid,'SIGUSR2');
  });
});

process.on('SIGINT',function(){
  gracefullShutdown('app termination',function(){
    process.exit(0);
  });
});

process.on('SIGTERM',function(){
  gracefullShutdown('heroku shutdown',function(){
    process.exit(0);
  });
});

