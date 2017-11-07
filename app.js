const express = require('express');
const index = require('./routes/index');
const bodyParser = require('body-parser');
const path = require('path');

const Session = require('express-session');
const FileStore = require('session-file-store')(Session);

let app = express(); 


app.use(Session({
  store: new FileStore({
      path: path.join(__dirname, '/tmp'),
      encrypt: true
  }),
  secret: 'Super Secret !',
  resave: true,
  saveUninitialized: true,
  name : 'sessionId'
}));

app.use('/', index);

app.use(bodyParser.urlencoded({ extended: false }));

let server = app.listen(3000, function () {
  let port = server.address().port;
  console.log(`Server is listening on port ${port}`);
});