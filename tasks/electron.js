'use strict';
var electronPackager = require('electron-packager');

module.exports = function (grunt) {
	grunt.registerMultiTask('electron', 'Package Electron apps', function () {
		var done = this.async();
		electronPackager(this.options(), function (error) {
			if (error) {
				grunt.warn(error);
			} else {
				done();
			}
		});
	});
};
