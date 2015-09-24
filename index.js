'use strict';

var emptyFileCallback = require('empty-file-callback');
var PinkiePromise = require('pinkie-promise');

module.exports = function emptyFile(filePath, options) {
  return new PinkiePromise(function promisify(resolve, reject) {
    emptyFileCallback.validateOptions(options, module.exports.ENCODING_ERROR_MESSAGE);

    emptyFileCallback(filePath, options, function callback(err, version) {
      if (err) {
        reject(err);
        return;
      }

      resolve(version);
    });
  });
};

module.exports.ENCODING_ERROR_MESSAGE = emptyFileCallback.ENCODING_ERROR_MESSAGE.replace('-callback', '');
