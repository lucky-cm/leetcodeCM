var romanToInt = function(s) {
  const romanMap = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
  }
  let sum = 0;
  for(var i=0;i<s.length-1;i++){
    const currentVal = romanMap[s.charAt(i)];
    const nextVal = romanMap[s.charAt(i+1)];
    if(currentVal < nextVal){
      sum += -currentVal;
    }else{
      sum += currentVal;
    }
  }
  return sum+romanMap[s.charAt(s.length-1)]
};