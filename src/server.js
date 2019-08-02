const express = require('express');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');
const bodyParser = require('body-parser')
var cors = require('cors')



// initializations
const app = express();
require('./db/database');
require('dotenv').config();
require('./handler-queued/consumer');


// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));  
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true })) 
app.use(bodyParser.json())
 
app.use(session({
  secret: 'mysecretsession',
  resave: false, 
  saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


// Starting the server
var server = app.listen(app.get('port'), () => {
  console.log('Server started in http://localhost:4000');
});

exports.io = require('socket.io').listen(server);

require('./microservices/handle-user-status/controller');

//routes
app.use(require('./microservices/create-user/controller'));
app.use(require('./microservices/update-user/controller'));
app.use(require('./microservices/delete-user/controller'));
app.use(require('./microservices/get-users/controller'));



