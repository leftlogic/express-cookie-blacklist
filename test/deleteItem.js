var should = require('should');
var deleteItem = require('../lib/deleteItem');

describe('deleteItem', function () {

  it('should return the same object it is passed', function () {
    var initialObject = { 
      type: 'object',
      other: {
        name: 'initialObject',
        base: true
      }
    };
    var afterObject = deleteItem(initialObject, 'other.base');
    afterObject.should.equal(initialObject, 'they\'re the same object');
  });

  it('should modify the object it is passed', function () {
    var initialObject = { 
      type: 'object',
      other: {
        name: 'initialObject',
        base: true
      }
    };
    var afterObject = deleteItem(initialObject, 'other.base');
    initialObject.other.should.not.have.property('base');
  });

  it('should work with single depth strings', function () {
    var object = {
      name: 'fabien',
      age: 20,
      password: 'base'
    };
    deleteItem(object, 'password');
    object.should.not.have.property('password');
  });

  it('should work with multi depth strings', function () {
    var depth = Math.ceil(Math.random() * 100);
    var string = '';
    var object = {};
    var depthObj = object;
    console.log(depth);
    for (var i = 0; i < depth; i++) {
      depthObj.newDepth = {};
      depthObj = depthObj.newDepth; 
      string += '.newDepth';
    }
    string = string.substring(1);
    deleteItem(object, string);
    depthObj.should.not.exist;
  });

});
