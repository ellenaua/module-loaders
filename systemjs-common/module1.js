var lib = require('./lib.js');

exports.getHtml = function(){
  return `Module 1 says: ` + lib.getRandomNumber();
}
