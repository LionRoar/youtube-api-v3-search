
const config = require('./config');
const querystring = require('querystring');


module.exports = function(request, key, options, cb){
    if(!key && typeof cb === 'function')
      return cb(new Error('API Key is required'));
    else if(!key) throw new Error('API Key is required');
    fillData(key , options);
    const q = querystring.stringify(config.options);
  if(typeof cb === 'function')
    request(config.URL+q).then(res => cb(null,res)).catch(err => cb(err));
  else
    return request(config.URL+q);
}

function fillData(key , options){
  config.options.key = key;
  for(let i in options)
    config.options[i] = options[i];
}
