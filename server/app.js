
var express = require('express');
var dal = require('./dal/dataAccess');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
var SwapiController = require('./routes/swapi-controller');
var filmController = require('./routes/film-controller');
var specyController = require('./routes/specy-controller');
var pageController = require('./routes/pages-controller');
var cors = require('cors')
var app = express()
 
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dal.connectToData();


app.use('/api/people', SwapiController);
app.use('/api/films', filmController);
app.use('/api/species', specyController);
app.use('/api/page/',pageController);
app.use('*',(req,res)=>{
  res.json({msg:'route not avialble'})
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
