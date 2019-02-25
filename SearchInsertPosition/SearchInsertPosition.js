var searchInsert = function(nums, target) {
  var left = 0;
  var right = nums.length-1;
  while(left <= right){
    var mid = Math.floor((left + right)/2);
    if(target>nums[mid]){
      left = mid+1;
    }else if(target<nums[mid]){
      right = mid-1;
    }else{
      return mid;
    }
  }
  return left;
};