var connect= require('connect');
var cookieSession = connect.cookieSession;
var deleteItem = require('./lib/deleteItem');

module.exports = function (options) {
  var cookieSessionMiddleware = cookieSession.apply(connect, arguments); 
  var blacklist = options.blacklist;
  return function (req, res, next) {
    res.on('header', function () {
      if (blacklist) {
        blacklist.forEach(function(key) {
          deleteItem(req.session, key);
        });
      }
    });
    return cookieSessionMiddleware(req, res, next);
  };
};
