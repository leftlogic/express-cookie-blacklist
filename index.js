var connect= require('connect');
var cookieSession = connect.cookieSession;
var deleteItem = require('./lib/deleteItem');
var addItem = require('./lib/addItem');

module.exports = function (options) {
  var cookieSessionMiddleware = cookieSession.apply(connect, arguments); 
  var blacklist = options.blacklist;
  var whitelist = options.whitelist;
  return function (req, res, next) {
    res.on('header', function () {
      if (blacklist) {
        blacklist.forEach(function(key) {
          deleteItem(req.session, key);
        });
      } else {
        var newSession = whitelist.reduce(function (newSession, key) {
          return addItem(newSession, key, req.session);
        }, {});
        req.session = newSession;
      }
    });
    return cookieSessionMiddleware(req, res, next);
  };
};
