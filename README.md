NodeJS Merge 0.0.1
==================================================

What is this?
--------------------------------------

NodeJs merge is used to merge multiple objects into one object.

Example
--------------------------------------

	var Merge = require('merge'),
	    result = Merge({ name: 'TrongTran' }, { age: '30' });

	console.log(result); // {"name":"TrongTran","age":"30"}
