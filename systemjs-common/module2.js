var lib = require('./lib.js');

exports.getHtml = function(){
  return `Module 2 says: ` + lib.getRandomNumber();
}
