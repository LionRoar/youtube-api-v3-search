const request = require('./request/node-request');
const common = require('./common');
module.exports = function(key , options , cb){
  return common(request , key , options , cb);
}
