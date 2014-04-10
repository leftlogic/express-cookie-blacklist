var deleteItem = require('./lib/deleteItem');
var clone = require('clone');

module.exports = function (blacklist) {
  'use strict';
  if (blacklist && !Array.isArray(blacklist)) {
    blacklist = [blacklist];
  }
  return function (req, res, next) {
    res.on('header', function () {
      req._sessionBeforeBlacklist = clone(req.session);
      if (blacklist) {
        blacklist.forEach(function(key) {
          deleteItem(req.session, key);
        });
      }
    });
    next();
  };
};
