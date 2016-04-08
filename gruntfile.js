'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		electron: {
			package: {
				options: {
					name: 'Fixture',
					dir: 'test/fixture',
					out: 'test/tmp',
					version: '0.25.3',
					platform: 'darwin',
					arch: 'x64'
				}
			}
		},
		nodeunit: {
			tasks: ['test/test.js']
		},
		clean: {
			test: ['test/tmp/**']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('default', [
		'clean',
		'electron',
		'nodeunit',
		'clean'
	]);
};
