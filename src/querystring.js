module.exports.stringify = function(json) {
  let string = '';
  for(let j in json)
    string+=j+'='+json[j]+'&';
  string = string.slice(0,-1);

  return string;
}
