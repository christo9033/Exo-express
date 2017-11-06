let express = require('express');
let index = require('./routes/index');
const bodyParser = require('body-parser');

let hostname = 'localhost'; 
let app = express(); 

app.use('/', index);

app.use(bodyParser.urlencoded({ extended: false }));

let server = app.listen(3000, function () {
  let port = server.address().port;
  console.log(`Server is listening on port ${port}`);
});