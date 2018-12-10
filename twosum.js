var twoSum = function(nums, target) {
  const len = nums.length;
  let map = {};
  for(let i = 0; i < len; i++) {
    if (map[nums[i]]) {
      return [map[nums[i]], i];
    }
    map[target-nums[i]]=i;
  }
};