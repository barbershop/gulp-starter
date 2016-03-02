var compress = require('compression')
var config   = require('../config')
var express  = require('express')
var gulp     = require('gulp')
var gutil    = require('gulp-util')
var logger   = require('morgan')
var open     = require('open')
var path     = require('path')
var auth = require('basic-auth-connect')
var app = express()

var settings = {
  root: path.resolve(process.cwd(), config.root.dest),
  port: process.env.PORT || 5000,
  logLevel: process.env.NODE_ENV ? 'combined' : 'dev',
  staticOptions: {
    extensions: ['html'],
    maxAge: '31556926'
  }
}

var serverTask = function() {
  var url = 'http://localhost:' + settings.port

  app
    .use(compress())
    .use(logger(settings.logLevel))

    // add auth
   if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'staging' ){
     app.use(auth(process.env.AUTH_USER || 'admin', process.env.AUTH_PASS || 'testing'))
   }

   app
    .use('/', express.static(settings.root, settings.staticOptions))
    .listen(settings.port)

  gutil.log('production server started on ' + gutil.colors.green(url))
  open(url)
}

gulp.task('server', serverTask)
module.exports = serverTask
