var cookieBlacklistSession = require('../index');
var express = require('express');

var app = express();

app.use(express.cookieParser());
app.use(cookieBlacklistSession({
  blacklist: [
    'safety'
  ],
  key: 'test'
}));

app.get('/', function (req, res, next) {
  console.log(req.session);
  req.session.safety = 'you should never see me';
  req.session.okay = 'you can see me';
  res.send(200);
});

app.get('/close', function () {
  server.close();
});

var server = app.listen(8462);
