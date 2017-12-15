# `is-secure-buffer`

[![Build Status](https://travis-ci.org/emilbayes/is-secure-buffer.svg?branch=master)](https://travis-ci.org/emilbayes/is-secure-buffer)

> Check if a Buffer is a sodium-native Secure Buffer

## Usage

```js
var isSecureBuffer = require('is-secure-buffer')
var sodium = require('sodium-native')

isSecureBuffer(Buffer.alloc(1)) // => false
isSecureBuffer(sodium.sodium_malloc(1)) // => false
```

## API

### `var bool = isSecureBuffer(sbuf)`

Check if `sbuf` is a [`sodium-native`](https://github.com/sodium-friends/sodium-native)
Secure Buffer. This check only works with `sodium-native@3` or greater.

## Install

```sh
npm install is-secure-buffer
```

## License

[ISC](LICENSE)
