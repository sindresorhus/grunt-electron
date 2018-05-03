'use strict';
const electronPackager = require('electron-packager');

module.exports = grunt => {
	grunt.registerMultiTask('electron', 'Package Electron apps', function () {
		const done = this.async();

		electronPackager(this.options())
			.then(() => done())
			.catch(err => {
				grunt.warn(err);
				done();
			});
	});
};
