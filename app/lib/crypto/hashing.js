var crypto = require('crypto');

exports.sha256 = function(data){
  var sha = crypto.createHash('sha256');
  sha.update(data);

  return sha.digest('hex');
}

exports.md5 = function(data){
  var hash = crypto.createHash('md5');
  hash.update(data);

  return hash.digest('hex');
}