# empty-file

[![NPM version](https://img.shields.io/npm/v/empty-file.svg)](https://www.npmjs.com/package/empty-file)
[![Build Status](https://travis-ci.org/shinnn/empty-file.svg?branch=master)](https://travis-ci.org/shinnn/empty-file)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/empty-file.svg)](https://coveralls.io/r/shinnn/empty-file)
[![Dependency Status](https://david-dm.org/shinnn/empty-file.svg)](https://david-dm.org/shinnn/empty-file)
[![devDependency Status](https://david-dm.org/shinnn/empty-file/dev-status.svg)](https://david-dm.org/shinnn/empty-file#info=devDependencies)

A [Node](https://nodejs.org/) module to write an empty file asynchronously

```javascript
const emptyFile = require('empty-file');
const fs = require('fs');

emptyFile('file/path').then(() => {
  fs.readFileSync('file/path', 'utf8'); //=> ''
});
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install empty-file
```

## API

```javascript
const emptyFile = require('empty-file');
```

### emptyFile(*filePath*[, *options*])

*filePath*: `String`  
*options*: `Object` ([`fs.writeFile`](https://nodejs.org/api/fs.html#fs_fs_writesync_fd_data_position_encoding) options except for `encoding`)  
Return: `Object` ([Promise](https://promisesaplus.com/) instance)

It writes `new Buffer(0)` to a file.

When it finish writing a file, it will be [fulfilled](https://promisesaplus.com/#point-26) with no arguments.

When it fails, it will be [rejected](https://promisesaplus.com/#point-30) with an error object.

```javascript
const emptyFile = require('empty-file');
const fs = require('fs');

function onFulfilled() {
  fs.readFileSync('tmp', 'utf8'); //=> ''
  fs.statSync('tmp').mode; //=> 33261
}

function onRejected(err) {
  console.error(err.message);
}

emptyFile('tmp', {mode: 33261}).then(onFulfilled, onRejected);
```

## Related project

* [empty-file-callback](https://github.com/shinnn/empty-file-callback) ([callback](http://thenodeway.io/posts/understanding-error-first-callbacks/)-style version)

## License

[The Unlicense](./LICENSE)
