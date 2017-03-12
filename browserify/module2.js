var lib = require('./lib');

exports.getHtml = function(){
  return `Module 2 says: ` + lib.getRandomNumber();
}
