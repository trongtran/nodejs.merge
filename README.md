NodeJS Merge 0.0.1
==================================================

What is this?
--------------------------------------

NodeJs merge is used to merge multiple objects into one object.

Example
--------------------------------------

	var Merge = require('merge'),
	    result = Merge({ name: 'TrongTran' }, { company: 'AsNet' });

	console.log(result); // {"name":"TrongTran","company":"AsNet"}
