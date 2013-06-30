require.config({
  baseUrl: 'app/js',
  paths: {
    'angular': '../../components/angular/angular'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
  }
});

require(['angular', 'app'], function(angular, app) {
  'use strict';

  angular.bootstrap(document, [app.name]);
});