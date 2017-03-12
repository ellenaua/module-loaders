define('module1', ['lib'], function(lib){
  return {
    getHtml : function(){
      return `Module 1 says: ` + lib.getRandomNumber()
    }
  };
});
