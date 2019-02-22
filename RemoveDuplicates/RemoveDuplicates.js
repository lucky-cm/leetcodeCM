/*法一*/
var removeDuplicates = function(nums) {
  nums.forEach((item ,index) => {
    while(item == nums[index+1]){
      nums.splice(index+1,1);
    }
  })
  return nums
};
/*法二*/
var removeDuplicates = function(nums) {
  return [...new Set(nums)]
};