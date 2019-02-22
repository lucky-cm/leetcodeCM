var isValid = function(s) {
  if(s.length){
    if(s.length % 2 != 0) {
      return false;
    }else {
      var pattern = ['(','{','[',')','}',']'];
      var stack = [];
      stack.push(s[0])
      var top;
      for(var i=1;i<s.length;i++){
        top = stack[stack.length-1];
        if(stack.length&&pattern.indexOf(s[i]) - pattern.indexOf(top) === 3){
          stack.pop();
        }else{
          stack.push(s[i])
        }
      }
      if(stack.length){
        return false;
      }
    }
  }
  return true;
};