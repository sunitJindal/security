var crypto = require('crypto');

exports.sha256 = function(data){
  var sha = crypto.createHash('sha256');
  sha.update(data);

  return sha.digest('hex');
}
