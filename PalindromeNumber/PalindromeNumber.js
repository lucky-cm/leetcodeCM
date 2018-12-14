var isPalindrome = function(x) {
  x = x.toString();
  if(x<0){
    return false;
  }else{
    var left = 0;
    var right = x.length - 1;
    while(left<=right){
      if(x[left] == x[right]){
        left++;
        right--;
      }else{
        return false;
      }
    }
    return true;
  }
};