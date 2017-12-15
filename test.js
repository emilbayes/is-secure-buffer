var sodium = require('sodium-native')
var test = require('tape')
var isSecureBuffer = require('.')

test('test', function (assert) {
  assert.ok(Buffer.isBuffer(sodium.sodium_malloc(1)))
  assert.ok(isSecureBuffer(sodium.sodium_malloc(1)))
  assert.notOk(isSecureBuffer(Buffer.alloc(1)))
  assert.end()
})
