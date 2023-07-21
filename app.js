var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const guestRouter = require('./routes/guests');
const mongoose = require('mongoose');
const eventModel = require('./models/eventModel');
const getalleventsRouter=require('./routes/events');
const parkingRouter = require('./routes/parkings');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// initiate db connections
const port = 3000;

const DB_USER = 'rachealk';
const DB_PASS = 't4wU5Re7X4cXFvt5';
const DB_NAME = 'guest_portal_db';
// Finish db conns

const DB_URL =  "mongodb+srv://"+DB_USER+":"+DB_PASS+"@cluster0.ifn6xrn.mongodb.net/"+DB_NAME
// connect to db
mongoose.connect(DB_URL);

// create an insatnce
const db = mongoose.connection;

// check if okay
db.on("open", () => {
  console.log("Database coneccted successfuly");
});

// check if error
db.on("error", () => {
  console.log("Error connecting to db");
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/guests", guestRouter);
app.use('/events',getalleventsRouter);
app.use("/parkingslots", parkingRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;