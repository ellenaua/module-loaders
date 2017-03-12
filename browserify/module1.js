var lib = require('./lib');

exports.getHtml = function(){
  return `Module 1 says: ` + lib.getRandomNumber();
}
