var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return /Spec\.js$/.test(file);
});

require.config({
  baseUrl: '/base/app/js'
});

require(tests, function() {
  window.__karma__.start();
});