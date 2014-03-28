module.exports = function (object, key) {
  var keys = key.split('.');
  var last = keys.length - 1;
  keys.reduce(function(obj, key, i){
    if (i === last) {
      delete obj[key];
    } 
    return obj[key] || {};
  }, object);
};
