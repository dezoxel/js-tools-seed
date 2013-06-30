define([], function() {
  'use strict';

  return function(version) {
    return function(scope, element, attrs) {
      element.text(version);
    };
  };
});
