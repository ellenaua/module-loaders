define('app', ['module1', 'module2'], function(module1, module2){

  /* This code will execute when all modules are loaded */

  var div1 = document.createElement('div');
  div1.innerHTML = module1.getHtml();
  document.body.appendChild(div1);

  var div2 = document.createElement('div');
  div2.innerHTML = module2.getHtml();
  document.body.appendChild(div2);

});
