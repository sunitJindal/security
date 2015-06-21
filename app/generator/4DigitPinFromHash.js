// In the terminal type:
// node 4DigitPinFromHash.js 888df25ae35772424a560c7152a1de794440e0ea5cfee62828333a456a506e05
//
// 888df25ae35772424a560c7152a1de794440e0ea5cfee62828333a456a506e05 is the sha256 hash for 9999, you can replace it with
// any valid hash that maps to 4 digit pin
// In case executing the file from some other path, specify relative or absolute path to file

var pinGen = require("../lib/pin/pinListGenerator")
pinGen.getValueForHashOf4DigitPin(process.argv[2]);