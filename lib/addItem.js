module.exports = function(dest, key, source) {
  var keys = key.split('.');
  var last = keys.length - 1;
  var container = {
    dest: dest,
    src: source
  };
  keys.reduce(function(container, key, i) {
    if (i === last) {
      container.dest[key] = container.src[key]; 
    }
    container.dest[key] = container.dest[key] || {}; 
    container.src[key] = container.src[key] || {}; 
    container.dest = container.dest[key];
    container.src = container.src[key];
    return container;
  }, container);
};
