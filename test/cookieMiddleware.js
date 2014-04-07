module.exports = {
  'should not send back cookie data that\'s in the blacklist': function(){
    console.log('test started'); 
    dalek.open('localhost:8462')
      .assert.cookie('test', 'okay=you can see me')
      .done();
  }
};

