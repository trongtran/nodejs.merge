var assert = require('assert'),
  merge = require('merge');

describe('Test merge module: ', function() {

	it('merge 2 simple objects with one property should be ok', function () {
		
		var x = {name: 'TrongTran'},
				y = {name: 'Trong Tran'};

  	var result = merge(x, y);
		assert.ok(result);
		assert.equal('Trong Tran', result.name);
	});

	it('merge 2 simple objects with two properties should be ok', function () {
		
		var x = {name: 'Trung Ngo'},
				y = {age: 30};
  	var result = merge(x, y);
		assert.ok(result);
		assert.equal('Trung Ngo', result.name);
		assert.equal(30, result.age);
	});

	it('merge 2 simple objects with multiple types should be ok', function () {
		
		var x = {name: 'johndoe', gender: true},
				y = {age: 30, schools: ['school1', 'school2'], address: {country: 'VN', city: 'DaNang'}};

  	var result = merge(x, y);
		assert.ok(result);

		assert.equal('johndoe', result.name);
		assert.equal(30, result.age);
		assert.equal(true, result.gender);

		assert.equal(2, result.schools.length);
		assert.equal('school1', result.schools[0]);
		assert.equal('school2', result.schools[1]);

		assert.ok(result.address);
		assert.equal('VN', result.address.country);
		assert.equal('DaNang', result.address.city);
	});

	it('merge 2 objects with depth equals 2 for sub-object should be ok', function () {
		
		var x = {name: 'johndoe', address: {country: 'VN', city: 'DaNang', location: {latitude: 12345} }},
				y = {birth: '11/29/1983', address: {countryCode: 84, post: 511, location: {longitude: 67890} }};

  	var result = merge(x, y);
		assert.ok(result);

		assert.equal('johndoe', result.name);
		assert.equal('11/29/1983', result.birth);

		assert.ok(result.address);
		assert.equal('VN', result.address.country);
		assert.equal('DaNang', result.address.city);
		assert.equal(84, result.address.countryCode);
		assert.equal(511, result.address.post);

		assert.ok(result.address.location);
	});
});	
