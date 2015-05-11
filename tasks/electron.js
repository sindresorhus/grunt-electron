'use strict';
var electronPackager = require('electron-packager');

module.exports = function (grunt) {
	grunt.registerMultiTask('electron', 'Package Electron apps', function () {
		electronPackager(this.options(), this.async());
	});
};
