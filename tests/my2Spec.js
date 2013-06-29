define(['my2'], function(my2) {

  describe('My2 module', function() {

    it('says hi to us', function() {
      expect(my2.sayHi()).toBe('Hello from My2!');
    });

  });

});