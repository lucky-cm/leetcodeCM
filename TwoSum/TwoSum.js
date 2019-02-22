var twoSum = function(nums, target) {
  const len = nums.length;
  let map = new Map();
  for(let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }
    map.set(target-nums[i], i);
  }
};