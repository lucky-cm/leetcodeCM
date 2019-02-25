var maxSubArray = function(nums) {
var max = Math.min(...nums);
var sum = 0;
for(var i =0; i< nums.length; i++) {
  sum +=nums[i];
  max = Math.max(sum,max);
  if(sum<0){
    sum = 0;
  }
}
return max;
};