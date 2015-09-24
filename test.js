'use strong';

const emptyFile = require('.');
const pify = require('pify');
const test = require('tape');

const {
  readFile: readFilePromise,
  stat: statPromise,
  unlink: unlinkPromise
} = pify.all(require('graceful-fs'));

test('emptyFile()', t => {
  t.plan(9);

  t.equal(emptyFile.name, 'emptyFile', 'should have a function name.');

  emptyFile('tmp0')
  .then(() => readFilePromise('tmp0', 'utf8'))
  .then(content => t.strictEqual(content, '', 'should write an empty file.'))
  .then(() => unlinkPromise('tmp0'))
  .catch(t.fail);

  emptyFile('tmp1', {mode: 33261})
  .then(() => statPromise('tmp1'))
  .then(stats => t.strictEqual(stats.mode, 33261, 'should support fs.writeFile options.'))
  .then(() => unlinkPromise('tmp1'))
  .catch(t.fail);

  emptyFile('node_modules', null)
  .then(t.fail, err => t.ok(err, 'should fail when it cannot write a file.'))
  .catch(t.fail);

  emptyFile('__', 'utf8')
  .then(t.fail, err => {
    t.ok(
      /TypeError.*Encoding string is not supported since empty-file writes an empty file\./.test(err),
      'should not accept encoding string.'
    );
  })
  .catch(t.fail);

  emptyFile('__', 'utf8')
  .then(t.fail, err => {
    t.ok(
      /TypeError.*Encoding string is not supported since empty-file writes an empty file\./.test(err),
      'should not accept encoding string.'
    );
  })
  .catch(t.fail);

  emptyFile('___', {encoding: 'base64'})
  .then(t.fail, err => {
    t.ok(
      /TypeError.*Encoding option is not supported since empty-file writes an empty file\./.test(err),
      'should not accept encoding option.'
    );
  })
  .catch(t.fail);

  emptyFile(null)
  .then(t.fail, err => {
    t.ok(
      /TypeError.*path/.test(err),
      'should fail when the first argument is not a string.'
    );
  })
  .catch(t.fail);

  emptyFile('foo', 123)
  .then(t.fail, err => {
    t.ok(
      /TypeError.*Expected options to be either an object or a string/.test(err),
      'should fail when the second argument is neither an object nor a string.'
    );
  })
  .catch(t.fail);
});
