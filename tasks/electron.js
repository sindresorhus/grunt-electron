'use strict';
var electronPackager = require('electron-packager');

module.exports = function (grunt) {
	grunt.registerMultiTask('electron', 'Package Electron apps', function () {
		var done = this.async(), options, ref;
		if (this.data.options === undefined) {
			throw new Error('`options` required');
		} else {
			options = typeof (ref = this.data.options) === 'function' ? ref.apply(this, arguments) : ref;
		}

		electronPackager(options, function (err, appPath) {
			if (err) {
				grunt.warn(err);
				return;
			}
			if (appPath) {
				grunt.log.oklns("Path to app: " + appPath);
			}

			done();
		});
	});
};
