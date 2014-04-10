module.exports = function (object, key) {
  object = object || {};
  var keys = key.split('.');
  var last = keys.length - 1;
  keys.reduce(function(obj, key, i){
    if (i === last && obj[key] !== undefined) {
      delete obj[key];
    } 
    return obj[key] || {};
  }, object);
  return object;
};
