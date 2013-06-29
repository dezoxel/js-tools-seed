define(['my3'], function(my3) {

  describe('My3 module', function() {

    it('says hi to us', function() {
      expect(my3.sayHi()).toBe('Hello from My3!');
    });

  });

});