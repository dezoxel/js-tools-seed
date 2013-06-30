define([], function() {
  'use strict';

  return function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  };

});
