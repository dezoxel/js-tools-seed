define(function(require) {
  'use strict';

  return require('angular').module('myApp', [])
    .config(['$routeProvider', require('routes')])

    .controller('MyCtrl1', ['$scope', require('my1.controller')])
    .controller('MyCtrl2', ['$scope', require('my2.controller')])

    .value('version', require('version.service'))

    .directive('appVersion', ['version', require('app-version.directive')])

    .filter('interpolate', ['version', require('interpolate.filter')]);
});

