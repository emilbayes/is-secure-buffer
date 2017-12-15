module.exports = function (sbuf) {
  return Buffer.isBuffer(sbuf) && sbuf.secure === true
}
