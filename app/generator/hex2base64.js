// In the terminal type:
// node hex2base64.js 9a
// In case executing the file from some other path, specify relative or absolute path to file

console.log(new Buffer(process.argv[2],'hex').toString('base64'))