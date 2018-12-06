const request = require('./request/browser-request');
const common = require('./common');
module.exports  = function(key , options , cb){
  return common(request , key , options , cb);
}

