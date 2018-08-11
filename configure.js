var path = require('path'),
    routes = require('./router'),
    exphbs = require('express-handlebars'),
    express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler');
    moment = require('moment');

module.exports = function(app){
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({'extended': true}));
  app.use(methodOverride());
  routes(app);//move routes to route folder
  app.use('/public/', express.static(path.join(__dirname, './public')));

  if('development'=== app.get('env')){
    app.use(errorHandler());
  }

  app.engine('handlebars', exphbs.create({
    defaultLayout: 'main',
    layoutsDir: app.get('views') + '/layouts'
  }).engine);
  app.set('view engine', 'handlebars');
  return app;
};
