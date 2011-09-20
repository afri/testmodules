var c = require('apollo:debug').console();
c.log('Hello from the greasemonkey.sjs script');
c.log('Now doing something asynchronous:');
for (var i=0; i<10; ++i) {
  hold(1000);
  c.log(i);
}
