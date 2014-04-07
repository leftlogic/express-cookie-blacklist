module.exports = {
  'should not send back cookie data that\'s in the blacklist': function(test){
    test.open('localhost:8462')
      .assert.cookie('test', 'okay=youcanseeme')
      .open('localhost:8462/close')
      .done();
  }
};

