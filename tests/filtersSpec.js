define(['angular.mocks', 'app'], function(mocks, app) {
  'use strict';

  describe('filter', function() {
    beforeEach(mocks.module('myApp'));

    describe('interpolate', function() {
      beforeEach(mocks.module(function($provide) {
        $provide.value('version', 'TEST_VER');
      }));

      it('should replace VERSION', inject(function(interpolateFilter) {
        expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
      }));
    });
  });
});
