var express=require('express'),
app = express(),
path = require('path'),
session = require('express-session'),
fs = require('fs'),
passport = require('passport');
app.use(express.static(path.join(__dirname, '/public/dist')));
var bodyparser = require('body-parser');
app.use(session({ secret:'Kiwi Killer'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
require('./server/config/mongoose.js');
require('./server/config/passport.js')(passport);
var routes_path =path.join( __dirname , './server/routes');
fs.readdirSync(routes_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(routes_path + '/' + file)(app);
  }
})
app.listen(8147, function() {});
