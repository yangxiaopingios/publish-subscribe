var pubSub = require('./publish-subscribe');

var testStr = 'testStr';

pubSub.listen(testStr, function() {
	console.log('pubSub.listen');
});

setTimeout(function() {
	console.log('1秒后的 pubSub.trigger')
	pubSub.trigger(testStr);
	pubSub.remove(testStr);
}, 1000);

setTimeout(function() {
	console.log('2秒后的 pubSub.trigger');
	pubSub.trigger(testStr);
}, 2000);