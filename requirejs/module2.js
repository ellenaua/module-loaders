define('module2', ['lib'], function(lib){
  return {
    getHtml : function(){
      return `Module 2 says: ` + lib.getRandomNumber()
    }
  };
});
