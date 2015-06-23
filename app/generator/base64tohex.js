// In the terminal type:
// node base64tohex.js mg==
// In case executing the file from some other path, specify relative or absolute path to file

console.log(new Buffer(process.argv[2],'base64').toString('hex'))