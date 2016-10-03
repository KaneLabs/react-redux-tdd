var express = require('express');
var app = express();

app.use(function(req, res, next) {


  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if(req.connection.encrypted){
    res.send('Do to The API in use, this app only works on http connections');
  };
  next();
});

app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 8080);
