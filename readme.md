# grunt-electron [![Build Status](https://travis-ci.org/sindresorhus/grunt-electron.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-electron)

> Package [Electron](http://electron.atom.io) apps using [`electron-packager`](https://github.com/maxogden/electron-packager)

*Issues should be reported on the `electron-packager` [issue tracker](https://github.com/maxogden/electron-packager/issues).*

Please think hard if you really need grunt for this. A simple vanilla node build script would probably be better.

This is mostly intended for those that have an existing grunt setup and want to integrate Electron app packaging.


## Install

```
$ npm install --save-dev grunt-electron
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	electron: {
		osxBuild: {
			options: {
				name: 'Fixture',
				dir: 'app',
				out: 'dist',
				version: '0.25.3',
				platform: 'darwin',
				arch: 'x64'
			}
		}
	}
});

grunt.registerTask('default', ['electron']);
```


## Options

See the `electron-packager` [options](https://github.com/maxogden/electron-packager#usage).

In addition you need to supply the `name` of your app and the `dir` where your app is located.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
