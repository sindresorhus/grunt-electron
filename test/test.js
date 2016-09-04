'use strict';
const pathExists = require('path-exists');

exports.electronPackager = {
	package: t => {
		t.ok(pathExists.sync('test/tmp/Fixture-darwin-x64/Fixture.app'));
		t.done();
	}
};
