define(['my1'], function(my1) {

  describe('My1 module', function() {

    it('says hi to us', function() {
      expect(my1.sayHi()).toBe('Hello from My1!');
    });

  });

});