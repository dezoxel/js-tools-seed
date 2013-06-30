var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return /Spec\.js$/.test(file);
});

require.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app/js',

  paths: {
    'angular': '/base/components/angular/angular',
    'angular.mocks': '/base/components/angular-mocks/angular-mocks',
  },

  shim: {
    'angular': {
      exports: 'angular',
    },
    'angular.mocks': {
      deps: ['angular'],
      exports: 'angular.mock'
    },
    priority: ['angular']
  },
});

require(tests, function() {
  window.__karma__.start();
});