function findMaxLength(nums) {
    const map = new Map();
    let maxLength = 0;
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
      count += nums[i] === 1 ? 1 : -1;
      
      if (count === 0) {
        maxLength = i + 1;
      } else if (map.has(count)) {
        maxLength = Math.max(maxLength, i - map.get(count));
      } else {
        map.set(count, i);
      }
    }
    
    return maxLength;
  }
  
  // Test the function
  const nums = [0, 1];
  const maxLength = findMaxLength(nums);
  console.log(maxLength);
  