var express  = require('express');
var auth = require('basic-auth-connect');
var app = express();
var path     = require('path');
var compress = require('compression');
var logger   = require('morgan');

var settings = {
  root: path.resolve(process.cwd(), 'public'),
  port: process.env.PORT || 5000,
  logLevel: process.env.NODE_ENV ? 'combined' : 'dev',
  staticOptions: {
    extensions: ['html'],
    maxAge: '31556926'
  }
};


app.use(compress()).use(logger(settings.logLevel));

// add auth
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'staging' ){
  app.use(auth(process.env.AUTH_USER || 'admin', process.env.AUTH_PASS || 'testing'));
}

app.use('/', express.static(settings.root, settings.staticOptions)).listen(settings.port, function(){
	console.log('Start server @', settings.port);
});
