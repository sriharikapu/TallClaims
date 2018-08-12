var express = require('express');
var config = require('./configure.js');
var app = express();
var mongoose = require('mongoose');
app.set('port', process.env.PORT || 5000);
app.set('views','./views');
app = config(app);

/*mongoose.connect('mongodb://127.0.0.1/tallClaims');
mongoose.connection.on('open', function() {
  console.log('Mongoose connected.');
});*/

app.listen(app.get('port'), function(){
  console.log('System up at localhost:' + app.get('port'));
});
