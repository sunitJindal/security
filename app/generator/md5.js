// In the terminal type:
// node md5.js randomString
//
// 888df25ae35772424a560c7152a1de794440e0ea5cfee62828333a456a506e05 is the sha256 hash for 9999, you can replace it with
// any valid hash that maps to 4 digit pin
// In case executing the file from some other path, specify relative or absolute path to file

var hashing = require("../lib/crypto/hashing.js")
console.log(hashing.md5(process.argv[2]))