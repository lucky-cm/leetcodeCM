var reverse = function(x) {
  var result = 0;
  while(x!=0){
    result = result * 10 + x%10;
    x = Math.trunc(x/10);
  }
  if(result > Math.pow(2,31) || result < -Math.pow(2,31)){
    return 0;
  }
  return result;
};