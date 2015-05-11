'use strict';
var pathExists = require('path-exists');

exports.electronPackager = {
	package: function (t) {
		t.ok(pathExists.sync('test/tmp/Fixture.app'));
		t.done();
	}
};
