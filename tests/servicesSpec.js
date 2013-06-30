define(['angular.mocks', 'app'], function(mocks, app) {
  'use strict';

  describe('service', function() {
    beforeEach(mocks.module('myApp'));

    describe('version', function() {
      it('should return current version', mocks.inject(function(version) {
        expect(version).toEqual('0.1');
      }));
    });
  });

});
