require.config({
  baseUrl: 'app/js'
});

require(['my1', 'my2', 'my3'], function(my1, my2, my3) {
  console.log(my1.sayHi());
  console.log(my2.sayHi());
  console.log(my3.sayHi());
});