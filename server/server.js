'use strict';

const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

app.use(logger('dev'));
app.use(bodyParser.json());

const messages = require('./routes/classifieds');
app.use('/api/classifieds',messages);
app.use('/js', express.static(path.join(__dirname, '../client/js')));
app.use('/templates', express.static(path.join(__dirname, '../client/templates')));
app.use('/css', express.static(path.join(__dirname, '../client/css')));

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: './client/'});
});

const port = process.env.PORT || 3000;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
