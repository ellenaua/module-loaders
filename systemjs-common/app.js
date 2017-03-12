var module1 = require('./module1.js');
var module2 = require('./module2.js');

var div1 = document.createElement('div');
div1.innerHTML = module1.getHtml();
document.body.appendChild(div1);

var div2 = document.createElement('div');
div2.innerHTML = module2.getHtml();
document.body.appendChild(div2);
