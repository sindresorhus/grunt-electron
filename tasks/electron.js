'use strict';
const electronPackager = require('electron-packager');

module.exports = grunt => {
	grunt.registerMultiTask(
		'electron',
		'Package Electron apps',
		async function () {
			const done = this.async();

			try {
				await electronPackager(this.options());
				done();
			} catch (error) {
				grunt.warn(error);
				done();
			}
		}
	);
};
