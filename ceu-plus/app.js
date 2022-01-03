var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const hash = require('pbkdf2-password')();

var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var profileRouter = require('./routes/profile');
var usersRouter = require('./routes/users');
var cafeteriaRouter = require('./routes/cafeteria');
var actualidadRouter = require('./routes/actualidad');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  resave: false,
  saveUnitialized: false,
  secret: 'El secret que queramos'
}));

app.use(function (req, res, next) {
  let err = req.session.error;
  let msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.messages = '';
  if(err) res.locals.messages += '<p>' + err + '</p>';
  if(msg) res.locals.messages += '<p>' + msg + '</p>';
  next();
});

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/profile', restrict, profileRouter);
app.use('/users', usersRouter);
app.use('/cafeteria', cafeteriaRouter);
app.use('/actualidad', actualidadRouter);
app.get('/logout', function (req, res) {
  req.session.destroy(function () {
    res.redirect('/');
  })
});

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

function restrict(req, res, next){
  if(req.session.user){
    next();
  } else{
    req.session.error = 'Acceso denegado';
    res.redirect('/');
  }
}

module.exports = app;
