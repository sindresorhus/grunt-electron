# grunt-electron

> Package [Electron](https://electronjs.org) apps using [`electron-packager`](https://github.com/electron/packager)

*Issues should be reported on the `electron-packager` [issue tracker](https://github.com/electron/packager/issues).*

Please think hard if you really need Grunt for this. A simple vanilla Node.js build script would probably be better.

This is mostly intended for those that have an existing Grunt setup and want to integrate Electron app packaging.

## Install

```sh
npm install --save-dev grunt-electron
```

## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	electron: {
		macosBuild: {
			options: {
				name: 'Fixture',
				dir: 'app',
				out: 'dist',
				version: '1.3.5',
				platform: 'darwin',
				arch: 'x64'
			}
		}
	}
});

grunt.registerTask('default', ['electron']);
```

## Options

See the `electron-packager` [options](https://github.com/electron/electron-packager#usage).

In addition you need to supply the `name` of your app and the `dir` where your app is located.
