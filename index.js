var deleteItem = require('./lib/deleteItem');
var _ = require('underscore');

module.exports = function (connect) {
  return function (options) {
    var cookieSessionMiddleware = connect.cookieSession.apply(connect, arguments);
    var blacklist = options.blacklist;
    return function (req, res, next) {
      res.on('header', function () {
        req._sessionBeforeBlacklist = _.clone(req.session);
        if (blacklist) {
          blacklist.forEach(function(key) {
            deleteItem(req.session, key);
          });
        }
      });
      return cookieSessionMiddleware(req, res, next);
    };
  };
};
