# empty-file

[![npm version](https://img.shields.io/npm/v/empty-file.svg)](https://www.npmjs.com/package/empty-file)
[![Build Status](https://travis-ci.com/shinnn/empty-file.svg?branch=master)](https://travis-ci.com/shinnn/empty-file)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/empty-file.svg)](https://coveralls.io/github/shinnn/empty-file)

A [Node.js](https://nodejs.org/) module to write an empty file asynchronously

```javascript
const emptyFile = require('empty-file');
const {readFile} = require('fs').promises;

(async () => {
  await emptyFile('file/path');
  (await readFile('file/path')).length; //=> 0
})();
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install empty-file
```

## API

```javascript
const emptyFile = require('empty-file');
```

### emptyFile(*path*[, *options*])

*path*: `string`  
*options*: `Object` ([`fs.writeFile`](https://nodejs.org/api/fs.html#fs_fspromises_writefile_file_data_options) options except for `encoding`)  
Return: `Promise`

It writes `Buffer.alloc(0)` to a file, replacing the file if it already exists.

## Related project

* [empty-file-callback](https://github.com/shinnn/empty-file-callback) (callback-style version)

## License

[ISC License](./LICENSE) © 2018 Shinnosuke Watanabe
